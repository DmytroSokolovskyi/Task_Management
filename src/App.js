import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import {AuthContext} from "./context";
import {useState} from "react";

function App () {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>
                <Router>
                    <AppRouter/>
                </Router>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
