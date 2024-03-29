import { SignInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const SignIn = () =>{
    const logGoogleUser = async() =>{
        const {user} = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    
        //console.log(user);
    }
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )
}

export default SignIn