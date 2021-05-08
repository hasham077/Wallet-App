import {Link} from 'react-router-dom';

const Payment = () => {
    return (  
        <div className="Withdraw">
            <form>
        <fieldset>
        <br></br>
          <legend>Make Payment</legend>
          <label >Enter Amount </label><br></br>
          <input type='amount'   min='100' ></input><br></br>
          <label >Enter Recipient Number </label><br></br>
          <input type='number'   min='100' ></input><br></br>
          <label >Password </label><br></br>
          <input type='password'></input><br></br>
          <button ><Link to="/WalletActions">Make Payment</Link></button>

          </fieldset>
        </form>
        </div>
    );
}
 
export default Payment;