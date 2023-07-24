import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {
  const{createUser} = useContext(AuthContext)

  const navigate = useNavigate();


  const handleSignUp = event => {


    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    }) 
    .catch(error => console.log(error))
  }


  
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Sign Up Please!</h1>
        
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" name="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="PhotoURL" name="PhotoURL" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="text" placeholder="Password" name="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-primary">Sign Up</button>
          </div>
          </form>
          <p className="my-4 text-center">Already Haven a Account?<Link className="font-bold text-cyan-600" to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default SignUp;