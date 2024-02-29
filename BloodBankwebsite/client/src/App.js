// App.js or your main component where you define routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HospitalList from "./services/HospitalList";
import HospitalRegistration from "./services/HospitalRegistration";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import EditProfile from "./services/EditProfile";
import NavBar from './pages/NavBar';
//import Register from './pages/Registration';
import Login from './pages/Login';
import HospitalBloodForm from './services/BloodBank';
import SeeDonors from './services/SeeDonors';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Home from './pages/Home';
import User from './pages/User';
import MiniDrawer from './MiniDrawer';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/User" component={User}/>
      <Route exact path="/about" component={About}/>
    
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/MiniDrawer" component={MiniDrawer}/>
      <Route exact path="/pagenotfoundr" component={Pagenotfound}/>
      {/* <Route exact path="/" component={NavBar}/> */}
       <Route exact path="/login" component={Login}/>
      {/* // <Route exact path="/register" component={Register}/>  */}
                    <Route exact path="/navbar" component={NavBar}/>
                    <Route exact path="/seedonor" component={SeeDonors}/>

                    <Route exact path="/editprofile" component={EditProfile}/>
                    <Route exact path="/bloodbank" component={HospitalBloodForm}/>
                   
                    <Route exact path="/hlist" component={HospitalList}/>
                    <Route exact path="/hregister/:hospitalId" component={HospitalRegistration}/>

        
                    <Route exact path="/registration-confirmation" component={RegistrationConfirmation}/>
                    <Route exact path="*" component={Pagenotfound}/>
      </Switch>
    </Router>
  );
}

export default App;
