// import {deleteUser, setUser} from "../redux/actions";
// import {
//     destroyAuthToLocal,
//     destroyTokens,
//     getAuth,
//     getToken,
//     logOut,
//     login,
//     saveAuthToLocal,
//     saveTokens,
// } from "../services";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

export const useAuth = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {setIsAuth} = useContext(AuthContext);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const checkAuth = async () => {
        setLoading(true);
        // const auth = await getAuth();

        // if (auth) {
        //     setIsAuth(true);
        //     history.push("/");
        // }

        setLoading(false);
    };

    const goLogin = async (logPass) => {
        try {
            setLoading(true);
            // const res = await login(logPass);

            // if (res) {
            //     setIsAuth(true);
            //     saveTokens(res.access_token, res.refresh_token);
            //     saveAuthToLocal(true, res.clearUser);
            //     dispatch(setUser(res.clearUser));
            //
            //     setLoading(false);
            // }

            setError("Wrong email or password");
        } catch (e) {
            setError(e.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    // const goLogOut = async () => {
    //     try {
    //         setLoading(true);
    //         const accessToken = getToken("access_token");
    //
    //         const res = await logOut(accessToken);
    //         destroyAuthToLocal();
    //
    //         if (res === 204) {
    //             setIsAuth(false);
    //             destroyTokens();
    //             destroyAuthToLocal();
    //             dispatch(deleteUser());
    //         }
    //     } catch (e) {
    //         setError(e.message);
    //         setLoading(false);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(async () => {
        await checkAuth();
    }, []);

    return {
        error,
        loading,
        goLogin,
        // goLogOut,
        checkAuth,
    };
};
