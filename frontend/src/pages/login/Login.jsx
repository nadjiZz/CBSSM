import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import Logo from "../../components/logo/Logo";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
    { email: email.current.value, password: password.current.value },
    dispatch
  );
};
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <>
          <Logo />
          </>
          <span className="loginDesc">
            Se connecter sur CBS Social Media pour echanger avec vos amis
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Se connecté"
              )}
                      </button>
                      <span className="loginForgot"><a href="login">Mots de passe oublier?</a></span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "creer un nouveau compte"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
