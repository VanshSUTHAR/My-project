import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';

const Data = yup.object().shape({
    email: yup.string().matches(/^[a-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'First latter must be small').required('Required Email'),
    password: yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must include uppercase, lowercase, number and special character').required('Required min 8 char')
});

function Login() {

    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserRole(parsedUser.role);
        }
    }, []);

    const handleLogin = async (newUser) => {

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            const result = await response.json();

            if (response.ok) {
                const { user } = result;
                localStorage.setItem('user', JSON.stringify(user));

                alert(`Login successful! Welcome, ${user.firstname || user.email}`);

                if (user.role === 'admin') {
                    navigate('/Listing');
                } else {
                    navigate('/Home');
                }
            } else {
                alert(result.message || 'Login failed');
            }
        }
        catch (error) {
            alert('Something going Wrong, Please try again OR you make some mistakes.');
        }
    };

    return (
        <div>
            <nav>
                <Link to="/Home">home</Link>
                <Link to="/Infrom">information</Link>

                  {userRole ==='admin' && <Link to ="/listing">list</Link>}
                    
                {!userRole && (
                    <><Link to="/Login">login</Link>
                        <Link to="/Register">register</Link>
                    </>
                )}
            </nav>

            <div className="scrollable-section">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Data}
                    onSubmit={handleLogin}
                >
                    <Form>
                        <h1 className="formtitle">Login Form</h1>
                        <br />
                        <div className="input-field">
                            <label htmlFor="email">Email:</label>
                            <Field id="email" name="email" type="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password:</label>
                            <Field id="password" name="password" type="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button type="submit">SUBMIT</button>
                        <p>
                            Don't have an account? <Link to="/register">Register here</Link>
                        </p>
                    </Form>
                </Formik>
                
            </div>
            <footer><h2>Thank you visiting!</h2></footer>
        </div>
    );
}

export default Login;
