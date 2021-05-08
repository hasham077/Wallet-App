import './index.css'
import {Link} from 'react-router-dom';


const Signin=()=> {
  return (
      <div className="signin">
        <h1>Pak Wallet</h1>
        <form>
        <fieldset>
        <br></br>
          <legend>Login</legend>
          <label >CNIC </label><br></br>
          <input id="phonenum"  max="13" type="tel"pattern="^\d{5}-\d{7}-\d{1}$"  ></input><br></br>
          <label >Password </label><br></br>
          <input type='password'></input><br></br>

          {/* <a href=''><h3>Forgot Password</h3></a> */}

          <button ><Link to="/WalletActions">Login</Link></button>

          <h4>Don't have an Account? <Link to="/Signup">Sign-Up</Link> </h4>
          </fieldset>
        </form>
      </div>
 
  );
}

export default Signin;
