import {Link} from 'react-router-dom';

const Deposite = () => {
    return (  
        <div className="Withdraw">
            <form>
        <fieldset>
        <br></br>
          <legend>Deposite Money</legend>
          <label >Enter Amount to be Deposited </label><br></br>
          <input type='number'   min='100' ></input><br></br>
          <label >Password </label><br></br>
          <input type='password'></input><br></br>
          <button onClick={} ><Link to="/WalletActions">Deposite</Link></button>

          </fieldset>
        </form>
        </div>
    );
}
 
export default Deposite;