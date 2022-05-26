import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Profile</Link></li>
                        { user && !admin && <>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            <li><Link to="/dashboard/addreview">Add A Review</Link></li>
                        </>
                        }
                        { admin && <>
                            <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addDoctor">Add Products</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Manage Products</Link></li>
                        </> }

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;