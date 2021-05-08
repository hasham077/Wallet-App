import {useState} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Deposite from './Deposite';
import Payment from './Payment';
import Transfer from './Transfer';
import Withdraw from './Withdraw';
const WalletActions = () => {
    const [balance,setbalance]=useState(500);
    return ( 
        <Router>
        <div className="actions">
           <nav>
            <h1>Your Balance: {balance}</h1> 
            <Link to='/Transfer'> Transfer Money</Link>
            <Link to='/Deposite'> Deposite Money</Link>
            <Link to='/Withdraw'>WithDraw Money</Link>
            <Link to='/Payment'>Make Payments</Link>
            <Link to='/' >LogOut</Link></nav>

            <Switch>
        <Route  path="/Transfer"  component={Transfer}>

        </Route>
        <Route  path="/Withdraw" component={Withdraw}>
          
        </Route>
        <Route  path="/Deposite" component={Deposite}>

        </Route>
        
        <Route  path="/Payment" component={Payment}>

        </Route>
      </Switch>
      
        </div>
        </Router>
     );
}
 
export default WalletActions;