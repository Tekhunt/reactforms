// import './App.css';
import Header from './Components/Header'
import InputField from './Components/InputField'
import Caption from './Components/Caption';
import PasswordField from './Components/PasswordField';
import SignUpButton from './Components/SignUpButton';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (

    <div className="App">
      <Header />
      <div className="inner-container">
      <div className="left-container" > <img src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576756310/bouncer-frontend/jonh_sv_vrsxva.svg" /> </div>
      <div className="right-container">
      <ForgotPassword />
      <Caption left="Sign in" right="Register" />
      <InputField label="First name"/>
      <InputField label="Last name"/>
      <InputField label="Username"/>
      <InputField label="Email"/>
      <PasswordField label="Password"/>
      <PasswordField label="Confirm Password"/>
      <SignUpButton action="Sign Up"/>
      <Caption left="Become a vendor" right="Forgot password" />
      </div>
      </div>
    </div>
  );
}

export default App;
