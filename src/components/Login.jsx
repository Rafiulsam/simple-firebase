import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    console.log(app);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                setUser(loggedInUser)
            }).catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage);
            })
    }

    const handleSignOut =()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            {user ? <button onClick={handleSignOut}>Sign Out</button>:
            <button onClick={handleGoogleSignIn}>Google Login</button>}

            {user && <div>
                <h2>{user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>

            }

        </div>
    );
};

export default Login;

// import React, { useEffect } from 'react';
// import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth";
// import app from '../Firebase/firebase.init';

// const Login = () => {
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   useEffect(() => {
//     // Handle the redirect result after signing in
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result.user) {
//           const user = result.user;
//           console.log('Successfully signed in:', user);
//           // Handle successful authentication (e.g., redirect to a profile page)
//         }
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.error('Error during sign-in:', errorMessage);
//         // Handle specific error scenarios (e.g., network issues, user cancellation)
//         // You can display an error message or retry the sign-in
//       });
//   }, []);

//   const handleGoogleSignIn = () => {
//     // Initiate sign-in with redirect
//     signInWithRedirect(auth, provider)
//       .then(() => {
//         // Handle successful initiation of sign-in flow (optional)
//         // You can display a loading indicator while redirecting
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.error('Error initiating sign-in:', errorMessage);
//         // Handle errors during sign-in initiation (e.g., invalid configuration)
//       });
//   };

//   return (
//     <button onClick={handleGoogleSignIn}>Google Login</button>
//   );
// };

// export default Login;