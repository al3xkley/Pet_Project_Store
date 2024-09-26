import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../signup.form/signupform.component";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop-Up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
