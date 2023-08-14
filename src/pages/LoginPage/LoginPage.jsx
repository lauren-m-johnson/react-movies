import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function LoginPage({ handleSignUp }) {
    return (
        <>
            <h1>SignUp/Login</h1>
            < SignUpForm handleSignUp={handleSignUp}/>
        </>
    );
}

