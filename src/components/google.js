import React,{useState,useEffect} from 'react'
// import app from './firebase';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
// import 'firebase/auth';
const provider = new GoogleAuthProvider();
const auth = getAuth();



function Google() {
    const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        // Handle successful authentication
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <center>
    <h2>Login Form</h2>
    {user ? (
      <div>
        
        <p>Welcome, {user.displayName}</p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
       
      </div>
    ) : (
      <div>
        <button onClick={handleSignIn}>Sign in with Google</button>
        {error && <p>{error}</p>}
      </div>
    )}
     </center>
  </div>
);
}

export default Google;
