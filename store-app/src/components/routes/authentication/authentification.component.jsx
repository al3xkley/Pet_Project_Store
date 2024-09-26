import SignUpForm from "../signup.form/signupform.component";
import SignInForm from "../signin.form /signinform.component";
import "../authentication/authentification.styles.scss";

const Authentification = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentification;
