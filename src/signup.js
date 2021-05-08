import './index.css';
import {Link} from 'react-router-dom';


function Signup() {
  
  return (
    
      <div className="signup">
        <h1>Pak Wallet</h1>
        <form>
        <fieldset>
        <br></br>
          <legend>Sign-Up</legend>
          <label >Name </label>
          <input type='text'></input><br></br>
          <label >Phone No. </label>
          <input type='password'></input><br></br>
          <label >CNIC </label>
          <input id="phonenum"  max="13" type="tel"pattern="^\d{5}-\d{7}-\d{1}$" required ></input><br></br>
          <label >Password </label>
          <input type='password'></input><br></br>
          <label >Re-Enter Password </label>
          <input type='password'></input>

          
          <button ><Link to="/">Sign-Up</Link></button>

          <h4>Already have an Account? <Link to="/">Sign-In</Link>  </h4>
          </fieldset>
        </form>
     
    </div>
  );
}

export default Signup;
