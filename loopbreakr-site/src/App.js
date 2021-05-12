import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import DonationForm from './pages/donationform.js';
import cogstruct from './pages/cogstruct.js';
import hocusfocus from './pages/hocusfocus.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/donationform" component={DonationForm} exact/>
        <Route path="/cogstruct" component={cogstruct} exact/>
        <Route path="/hocusfocus" component={hocusfocus} exact/>
      </Switch>
    </Router>
  );
}

export default App;
