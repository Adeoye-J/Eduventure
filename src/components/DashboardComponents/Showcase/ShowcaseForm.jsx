import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import ViewSkill from './ViewSkill';
import RegisterSkill from './RegisterSkill';
import AddSkill from './AddSkill';
// import AddProducts from './AddProducts';
// import ViewProducts from './ViewProducts';
// import RegisterBrand from './RegisterBrand';

const ShowcaseForm = () => {
    return (
        <div className='w-full p-10 space-y-10'>
            <div className="">
                <nav className='list-none grid grid-cols-1 md:grid-cols-3'>
                    <NavLink 
                        to="register" 
                        className={({ isActive }) => 
                            `border-2 flex justify-center h-[50px] items-center border-blue-900 font-bold transition duration-500 ${
                                isActive ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-blue-900 hover:text-white'
                            }`
                        }
                    >
                        <li>Register Skillset</li>
                    </NavLink>
                    <NavLink 
                        to="add" 
                        className={({ isActive }) => 
                            `border-2 flex justify-center h-[50px] items-center border-blue-900 font-bold transition duration-500 ${
                                isActive ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-blue-900 hover:text-white'
                            }`
                        }
                    >
                        <li>Add Skills</li>
                    </NavLink>
                    <NavLink 
                        to="view" 
                        className={({ isActive }) => 
                            `border-2 flex justify-center h-[50px] items-center border-blue-900 font-bold transition duration-500 ${
                                isActive ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-blue-900 hover:text-white'
                            }`
                        }
                    >
                        <li>View Skills</li>
                    </NavLink>
                </nav>
            </div>
            <Routes>
                <Route index element={<RegisterSkill />} />
                <Route path='view' element={<ViewSkill />} />
                <Route path='add' element={<AddSkill />} />
                <Route path='register' element={<RegisterSkill />} />
            </Routes>
        </div>
    );
}

export default ShowcaseForm;
