//--------------------------require for connections-------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mg = require('mongoose');
const app = express();
app.use(cors());  
app.use(bodyParser.json());
//------------------------mongoDb connection--------------------------------------------------------
mg.connect('mongodb://localhost:27017/Data',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
//---------------make userSchema FOR register ------------------------------------------------------
const userSchema = new mg.Schema({
  firstname: String,
  lastname: String,
  birthDate: Date,
  gender: { type: String, enum: ['Male', 'female', 'other'], required: true },
  mobile: { type: String, required: true },
  email: { type: String, unique: true },
  password: String,
  active: { type: Boolean, default: true },
  role:{ type:String,enum:['user','admin'],default:'user'}
});
//-------------make Model for userSchema -----------------------------------------------------------
const User = mg.model('register', userSchema);
//-----------------register-API---------------------------------------------------------------------
app.post('/api/register', async (req, res) => {
  const data = req.body;
  try {
    const isDuplicate = await User.findOne({ email: data.email });
    if (!isDuplicate) {
      const newUser = new User(data);
      await newUser.save();
      return res.json({ message: 'Registration successful', data: newUser })
    }
    return res.status(400).json({ message: 'User already registered' });
  } catch (error) {
    return res.status(500).json({ message: 'Error storing user', error });
  }
});

//----------------------------------Login-API-------------------------------------------------------
app.post('/api/login', async (req, res) => {
  const data = req.body;
  try {
    const matchUser = await User.findOne({ email: data.email, password: data.password });
    if (!matchUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!matchUser.active) {
      return res.status(403).json({ message: 'Account is inactive' });
    }

    return res.json({ message: 'Login successful', user: matchUser });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

//--------------------------fetchUser-usersAPI------------------------------------------------------
app.get('/api/users', async (req, res) => {
  const data=req.query;
  try {
    const user = await User.findOne({email:data.email});
    if(!user ||user.role!=='admin'){
      return res.status(403).json({message:'Access denied,Admin Only'})
    }
    const users= await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

//--------------------Api for active or inactive---------------------------------------------
app.put('/api/Active/:id/status', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { active: req.body.active },
      { new: true }
    );
    res.json({ message: 'Status updated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating status' });
  }
});

//-------------------Update-Api---------------------------------------------------------------------
app.put('/api/update/:id', async (req, res) => {
  const allow = ['firstname', 'lastname', 'email', 'mobile', 'gender', 'birthDate'];
  const updates = req.body; 
  const invalid = Object.keys(updates).filter(field => !allow.includes(field));
  if (invalid.length > 0) {
    return res.status(400).json({ message: `Invalid fields: ${invalid.join(', ')}` });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Error updating user', error });
  }
});

//---------------------Delete-Api-------------------------------------------------------------------
app.delete('/api/delete', async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting users' });
  }
});

//---------------------Delete-by ID-----------------------------------------------------------------
app.delete('/api/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'Data Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});                                                                             
