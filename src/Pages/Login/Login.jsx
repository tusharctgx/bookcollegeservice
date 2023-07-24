import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

 const {signIn} = useContext(AuthContext);
 const navigation =useNavigate();
 const location = useLocation();


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigation(location.state.pathname || "?");
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="Password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p className="my-4 text-center">New to Sports Toys <Link className="font-bold text-cyan-600" to="/signup" state={location.state}>Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;