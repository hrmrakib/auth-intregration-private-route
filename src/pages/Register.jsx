import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    // create a user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <h1 className='text-3xl font-bold text-center pt-3'>Register now!</h1>
        <form className='card-body' onSubmit={handleRegister}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Your Name'
              name='name'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Your Email'
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
              placeholder='Enter Password'
              name='password'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Submit</button>
          </div>

          <p>
            Already have an account? Please{" "}
            <Link className='font-semibold underline' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
