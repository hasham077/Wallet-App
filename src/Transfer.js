import {Link} from 'react-router-dom';

const Transfer = () => {
    return (  
        <div className="Withdraw">
            <form>
        <fieldset>
        <br></br>
          <legend>Transfer Money</legend>
          <label >Enter Amount to be Tranfered </label><br></br>
          <input type='amount'   min='100' ></input><br></br>
          <label >Enter Recipient Number </label><br></br>
          <input type='number'   min='100' ></input><br></br>
          <label >Password </label><br></br>
          <input type='password'></input><br></br>
          <button ><Link to="/WalletActions">Transfer Money</Link></button>

          </fieldset>
        </form>
        </div>
    );
}
 
export default Transfer;