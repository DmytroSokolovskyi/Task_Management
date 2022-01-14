import HomeRouter from "../../routing/HomeRouter";
import cl from "./HomePage.module.css";

export default function HomePage () {
    return (
        <div className={cl.wrapper}>
            <div className={cl.header} name="scrollAnim">
                header
                {/* <Header/> */}
            </div>
            <div className={cl.main}>
                <HomeRouter/>
            </div>
            <div className={cl.footer}>
                footer
            </div>
        </div>
    );
};
