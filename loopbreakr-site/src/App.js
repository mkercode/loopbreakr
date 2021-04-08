import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import DonationForm from './pages/donationform.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/donationform" component={DonationForm} exact/>
      </Switch>
      
    </Router>
  );
}

export default App;
