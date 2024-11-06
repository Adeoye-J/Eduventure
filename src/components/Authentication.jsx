import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { SolutionContext } from '../context/SolutionContext'

const Authentication = () => {

    const {authType, setAuthType} = useContext(SolutionContext)
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('');

    // const handleAuthSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //     if (authType === 'signup') {
    //         await registerUser({ email, password, username });
    //         alert("Registration successful");
    //     } else {
    //         await loginUser({ identifier: email, password });
    //         alert("Login successful");
    //     }
    //     } catch (error) {
    //     alert(`Error: ${error.response.data.message}`);
    //     }
    // };

  return (
    <div className='flex items-center justify-center pb-[5rem] pt-[9rem]'>
        <div className="w-1/2 min-w-[300px]">
            <div className='flex flex-col items-center gap-[1.5rem]'>
                <h1 className='text-center text-[2.5rem]'>{authType === "login" ? "Login Form" : "Signup Form"}</h1>
                <div className="flex border-2 border-blue-900 rounded-md">
                    <button className={`${authType === "login" ? "bg-blue-900 text-white" : "bg-transparent text-black"} px-8 rounded-md`} onClick={() => setAuthType("login")}>Login</button>
                    <button className={`${authType === "signup" ? "bg-blue-900 text-white" : "bg-transparent text-black"} px-8 rounded-md`} onClick={() => setAuthType("signup")}>Signup</button>
                </div>
            </div>
            {
                authType === "login" && (
                    <div className='mt-8'>
                        <form action="">
                            <div className="mt-6">
                                <input className='w-full h-[50px] outline-none border-2 border-blue-900 rounded-md px-4 text-[1.2rem]' type="email" placeholder='Email Address' />
                            </div>
                            <div className="mt-6">
                                <input className='w-full h-[50px] outline-none border-2 border-blue-900 rounded-md px-4 text-[1.2rem]' type="password" placeholder='Password' />
                            </div>
                            <span className='inline-block text-[1rem] font-bold cursor-pointer transition-all duration-500 mt-4 hover:text-blue-900'>Forgot Password?</span>
                            <button className='block mt-8 w-full h-[50px] border-2 border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white' type='submit'>Login</button>
                            <p className='text-center mt-8'>Not a member? <Link onClick={() => setAuthType("signup")}>Signup now</Link></p>
                        </form>
                    </div>
                )
            }
            {
                authType === "signup" && (
                    <div className='mt-8'>
                        <form action="">
                            <div className="mt-6">
                                <input className='w-full h-[50px] outline-none border-2 border-blue-900 rounded-md px-4 text-[1.2rem]' type="email" placeholder='Email Address' />
                            </div>
                            <div className="mt-6">
                                <input className='w-full h-[50px] outline-none border-2 border-blue-900 rounded-md px-4 text-[1.2rem]' type="password" placeholder='Password' />
                            </div>
                            <div className="mt-6">
                                <input className='w-full h-[50px] outline-none border-2 border-blue-900 rounded-md px-4 text-[1.2rem]' type="password" placeholder='Confirm Password' />
                            </div>
                            <button className='block mt-8 w-full h-[50px] border-2 border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white' type='submit'>Signup</button>
                            <p className='text-center mt-8'>Already Have An Account? <Link onClick={() => setAuthType("login")}>Login now</Link></p>
                        </form>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Authentication


// import React, { useContext, useState } from 'react';
// import { SolutionContext } from '../context/SolutionContext';

// const Authentication = () => {
//   const { authType, setAuthType, registerUser, loginUser } = useContext(SolutionContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleAuthSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (authType === 'signup') {
//         await registerUser({ email, password, username });
//         alert("Registration successful");
//       } else {
//         await loginUser({ identifier: email, password });
//         alert("Login successful");
//       }
//     } catch (error) {
//       alert(`Error: ${error.response.data.message}`);
//     }
//   };

//   return (
//     <div className="auth-container p-32">
//       <h1>{authType === 'login' ? 'Login' : 'Signup'}</h1>
//       <form onSubmit={handleAuthSubmit}>
//         {authType === 'signup' && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">{authType === 'login' ? 'Login' : 'Signup'}</button>
//       </form>
//     </div>
//   );
// };

// export default Authentication;
