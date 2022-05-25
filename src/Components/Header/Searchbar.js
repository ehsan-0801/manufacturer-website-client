import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Searchbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="navbar bg-base-100 lg:px-24">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">E-tools</a>
            </div>
            <div className="flex-initial mx-auto">
                <div className="w-full">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>

            </div>
            { user && <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-primary">
                    <div className="w-full">
                        <p>{ user.displayName }</p>
                    </div>
                </label>
                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div> }
        </div>
    );
};

export default Searchbar;