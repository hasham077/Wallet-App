import {Link} from 'react-router-dom';

const Withdraw = () => {
    return (  
        <div className="Withdraw">
            <form>
        <fieldset>
        <br></br>
          <legend>Withdraw Money</legend>
          <label >Enter Amount to be Withdrawl </label><br></br>
          <input type='amount'   min='100' ></input><br></br>
          <label >Password </label><br></br>
          <input type='password'></input><br></br>
          <button onClick={(e)=>{
              
              
          }}><Link to="/WalletActions">Withdraw</Link></button>

          </fieldset>
        </form>
        </div>
    );
}
 
export default Withdraw;