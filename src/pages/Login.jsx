import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { createRef, useContext } from "react";
import google from "/google.png";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
  const emailRef = createRef(null);

  const { signInUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      emailRef.current.focus();
      emailRef.current.placeholder = "Must give your email for reset ";
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("reset");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <h1 className='text-3xl font-bold text-center pt-3'>Login now!</h1>
        <form className='card-body' onSubmit={handleLogin}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='email'
              ref={emailRef}
              name='email'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              name='password'
              className='input input-bordered'
              required
            />
            <label className='label'>
              <a
                onClick={handleForgetPassword}
                className='label-text-alt link link-hover'
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-secondary'>Login</button>
          </div>
          <p>
            New Here? Please{" "}
            <Link className='font-semibold underline' to='/register'>
              Register
            </Link>
          </p>

          <img
            onClick={handleGoogleSignIn}
            className='size-9 rounded-full cursor-pointer'
            src={google}
            alt=''
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
