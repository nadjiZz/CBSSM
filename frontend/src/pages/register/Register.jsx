import "./register.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";


export default function Register() {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const passwordAgain = useRef("");
  const navigate = useNavigate("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
     passwordAgain.current.setCustomValidity("Le mot de passe ne correspond pas!");
    } else {
     const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate.push("/login");
      } catch (err) {
        console.log(err);
   }
    }
  };
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <>
            <Logo />
          </>
          <span className="loginDesc">
            Connectez-vous avec vos amis sur CBS Social Media
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox" >
            <input
              placeholder="Nom d'utilisateur"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Entrée le mots de passe"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Réentrez le mot de passe"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              S'inscrire
            </button>
            <Link to="./login/Login" className="loginRegisterButton">Connectez-vous <em>ici</em></Link>
            {/* <span className=""><Link to="/Login">Se connecter avec un compte</Link></span>  */}
          </form>
        </div>
      </div>
    </div>
  );
};


// import "./register.css";
// import axios from "axios";
// // import { useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Logo from "../../components/logo/Logo";
// import { useState } from "react";

// import { Link } from "react-router-dom";


// const Register = ({ history }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const registerHandler = async (e) => {
//     e.preventDefault();

//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     if (password !== confirmpassword) {
//       setPassword("");
//       setConfirmPassword("");
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//       return setError("Passwords do not match");
//     }

//     try {
//       const { data } = await axios.post(
//         "/api/auth/register",
//         {
//           username,
//           email,
//           password,
//         },
//         config
//       );

//       localStorage.setItem("authToken", data.token);

//       history.push("/");
//     } catch (error) {
//       setError(error.response.data.error);
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <div className="register-screen">
//       <form onSubmit={registerHandler} className="register-screen__form">
//         <h3 className="register-screen__title">Register</h3>
//         {error && <span className="error-message">{error}</span>}
//         <div className="form-group">
//           <label htmlFor="name">Username:</label>
//           <input
//             type="text"
//             required
//             id="name"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             required
//             id="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             required
//             id="password"
//             autoComplete="true"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmpassword">Confirm Password:</label>
//           <input
//             type="password"
//             required
//             id="confirmpassword"
//             autoComplete="true"
//             placeholder="Confirm password"
//             value={confirmpassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Register
//         </button>

//         <span className="register-screen__subtext">
//           Already have an account? <Link to="/login">Login</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Register;
