import './index.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import Signin from './signin';
import Signup from './signup';
import WalletActions from './WalletActions';

const App=()=> {
 
 
  return (
    
    <Router>
    <div className="App">
    
    <Switch>
    <Route exact path="/">
      <Signin/>
    </Route>
  
    <Route path="/Signup">
      <Signup/>
    </Route>
    
    <Route path="/WalletActions" >
      <WalletActions/>
    </Route>

    </Switch>

    </div>
    </Router>
    
  );
}

export default App;
