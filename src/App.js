import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Americas from './components/pages/Americas';
import Africa from './components/pages/Africa';
import Asia from './components/pages/Asia';
import Caribbean from './components/pages/Caribbean';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/america' exact component={Americas} />
          <Route path='/africa' exact component={Africa} />
          <Route path='/asia' exact component={Asia} />
          <Route path='/caribbean' exact component={Caribbean} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;
