
import React, { useState } from "react";
// import  {auth} from "./firebase";
import { getAuth,sendPasswordResetEmail} from "firebase/auth";
const auth = getAuth();

function Forgotpassword() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth,resetEmail)
      .then(() => {
        setErrorMessage('Reset password email sent. Check your inbox.');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <center>
     <form onSubmit={handleResetPassword}>
     <label>
          Email:
          <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Reset Password</button>

     </form>
     {errorMessage && <div>{errorMessage}</div>}
     </center>
   </div>
  );
}

export default Forgotpassword;

