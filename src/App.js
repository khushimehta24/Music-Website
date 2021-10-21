import './App.css';
import MusicWeb from './MusicWeb'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Logon from './Components/Logon';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/SignUp' exact component={Logon} />
        <Route path='/main' exact component={MusicWeb} />
      </Switch>
    </Router>
  );
}

export default App;
