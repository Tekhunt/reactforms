// import './App.css';
import Header from './Components/Header'
// import InputField from './Components/InputField'
// import Caption from './Components/Caption';
// import PasswordField from './Components/PasswordField';
// import SignUpButton from './Components/SignUpButton';
// import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Image from './Components/Image';
import Vendor from './Components/Vendor';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="inner-container">
      <Image url="https://res.cloudinary.com/decagonbouncer/image/upload/v1576756310/bouncer-frontend/jonh_sv_vrsxva.svg" />
      {/* <div className="left-container" > <img src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576756310/bouncer-frontend/jonh_sv_vrsxva.svg" /> </div> */}
      <div className="right-container">
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact  path="/login">
            <Login />
          </Route>
          <Route exact  path="/vendor">
            <Vendor />
          </Route>
          <Route exact  path="/forgotpassword">
            <ForgotPassword />
          </Route>
       </Switch>
      
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
