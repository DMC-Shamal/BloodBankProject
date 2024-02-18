// App.js or your main component where you define routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HospitalList from "./services/HospitalList";
import HospitalRegistration from "./services/HospitalRegistration";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import EditProfile from "./services/EditProfile";
import NavBar from './pages/NavBar';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={NavBar}/>
                    <Route exact path="/navbar" component={NavBar}/>
                    <Route exact path="/editprofile" component={EditProfile}/>
                   
                    <Route exact path="/hlist" component={HospitalList}/>
                    <Route exact path="/hregister/:hospitalId" component={HospitalRegistration}/>
                    <Route exact path="/registration-confirmation" component={RegistrationConfirmation}/>
      </Switch>
    </Router>
  );
}

export default App;
