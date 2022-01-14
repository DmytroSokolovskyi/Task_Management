import {useFormValid, useInput} from "../../hooks";
import {Link} from "react-router-dom";
import MyButton from "../../components/UI/myButton/MyButton";
import MyInput from "../../components/UI/myInput/MyInput";
// import MyLoader from "../../components/UI/myLoader/MyLoader";
import cl from "./SignUp.module.scss";

export default function SignUp () {
    const username = useInput("", {isEmpty: true, minLength: 3, maxLength: 30});
    const email = useInput("", {isEmpty: true, isEmail: true});
    const password = useInput("", {isEmpty: true, isPassword: true});
    const passwordRepeat = useInput("", {isEmpty: true, isPassword: true, isPasswordMatched: password.value});
    const validForm = useFormValid(email, password, username, passwordRepeat);

    const clickCreate = (e) => {
        e.preventDefault();
        const newUser = {
            username: username.value,
            email: email.value,
            password: password.value,
        };
        goLogin(mailPass);
    };

    // if (loading) {
    //     return <MyLoader/>;
    // }

    return (
        <div className={cl.loginPageDiv}>
            <h2>Create account</h2>
            <form >
                <span>{error}</span>
                <MyInput
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => username.onChange(e)}
                    onBlur={(e) => username.onBlur(e)}
                    error={username.isDirty ? username.errorMessage : ""}
                />
                <MyInput
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => email.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                    error={email.isDirty ? email.errorMessage : ""}
                />
                <MyInput
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => password.onChange(e)}
                    onBlur={(e) => password.onBlur(e)}
                    error={password.isDirty ? password.errorMessage : ""}
                />
                <MyInput
                    type="password"
                    placeholder="Repeat your password"
                    onChange={(e) => passwordRepeat.onChange(e)}
                    onBlur={(e) => passwordRepeat.onBlur(e)}
                    error={passwordRepeat.isDirty ? passwordRepeat.errorMessage : ""}
                />
            </form>
            <MyButton
                type="submit"
                onClick={clickCreate}
                disabled={validForm}
            >Create
            </MyButton>

            <div className={cl.toRegistration}>
                <div>Already have an account? <Link to={"/login"}> Sign in</Link></div>
            </div>
        </div>
    );
}
