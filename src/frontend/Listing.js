import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Listing.css';

const Listing = () => {
    const [users, setUsers] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserRole(parsedUser.role);
        }
    }, [])

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('user');
            navigate('/login');
        }
    };

    const fetchUsers = useCallback(async () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedInUser || loggedInUser.role !== 'admin') {
            navigate('/Home');
            return;
        } try {
            const response = await fetch(`http://localhost:5000/api/users?email=${loggedInUser.email}`);
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                alert(data.message || 'Failed to detch users')
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [navigate])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    const toggleStatus = async (id, currentStatus) => {
        try {
            await fetch(`http://localhost:5000/api/Active/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ active: !currentStatus }),
            });
            fetchUsers();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const updateUser = async (id) => {
        const field = prompt(
            "Which field do you want to update?\nOptions: firstname, lastname, email, mobile, gender, birthDate"
        );

        const validFields = ['firstname', 'lastname', 'email', 'mobile', 'gender', 'birthDate'];
        if (!validFields.includes(field)) {
            alert('Invalid field selected!');
            return;
        }

        const newValue = prompt(`Enter new value for ${field}:`);
        if (!newValue) {
            alert('Value cannot be empty!');
            return;
        }

        const updatedData = { [field]: newValue };

        try {
            const response = await fetch(`http://localhost:5000/api/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });

            const result = await response.json();
            if (!response.ok) {
                alert(result.message || 'Update failed');
            } else {
                alert('User updated successfully');
                fetchUsers();
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Something went wrong while updating');
        }
    };

    const deleteAll = async () => {
        if (!window.confirm('Are you sure you want to Remove all users?')) return;
        try {
            await fetch('http://localhost:5000/api/delete', { method: 'DELETE' });
            fetchUsers();
        } catch (error) {
            console.error('Error deleting users:', error);
        }
    };

    const deleteUser = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            await fetch(`http://localhost:5000/api/delete/${id}`, { method: 'DELETE', });
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const total = users.length;
    const active = users.filter((u) => u.active).length;

    return (
        <div>

            <nav>

                <Link to="/Home">HOME</Link>
                <Link to="/Infrom">INFORMATION</Link>

                {userRole === 'admin' && <Link to="/Listing">LIST</Link>}

                {!userRole && (
                    <>
                        <Link to="/Login">LOGIN</Link>
                        <Link to="/Register">REGISTER</Link>
                    </>
                )}
                <button onClick={handleLogout}>LOGOUT</button>

            </nav>
            <div className="scrollable-section">

                <div className="container">

                    <div className="header">

                        <div className="header-title">
                            <h2>Registered Users</h2>
                            <div className="header-stats">
                                <p>Total Users: {total}</p>
                                <p>Active Users: {active}</p>
                            </div>
                        </div>

                        <button onClick={deleteAll} className="btn-delete-all">
                            REMOVE
                        </button>
                    </div>

                    <table className="user-table">
                        <thead>

                            <tr>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Birth Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>

                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.gender}</td>
                                        <td>{new Date(user.birthDate).toLocaleDateString()}</td>

                                        <td>
                                            <span className={user.active ? 'status-active' : 'status-inactive'}>
                                                {user.active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="actions-cell">
                                            <button
                                                className="btn-toggle" onClick={() => toggleStatus(user._id, user.active)}
                                            >
                                                {user.active ? 'Inactivate' : 'Activate'}
                                            </button>
                                            <button
                                                onClick={() => updateUser(user._id)}
                                                className="btn-action"
                                            >
                                                Update
                                            </button>

                                            <button className="btn-action2" onClick={() => deleteUser(user._id)}>
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center' }}>
                                        No User Found
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

            <footer>
                <h3>Thankyou for visiting!</h3>
            </footer>

        </div>);
};

export default Listing;


