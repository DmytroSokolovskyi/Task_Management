import {Redirect, Route, Switch} from "react-router-dom";

export default function HomeRouter () {
    return (
        <Switch>
            <Route exact={true} path={"/visits/:id"} render={(props) => {
                const client = props.location.state.client;
                // return <Visits client={client}/>;
            }}/>
            {/* <Route exact={true} path={"/visits"} component={Visits}/> */}
            {/* <Route exact={true} path={"/clients"} component={Clients}/> */}
            {/* <Route exact={true} path={"/teethes"} component={Teethes}/> */}
            {/* <Route exact={true} path={"/notifications"} component={Notifications}/> */}
            <Redirect to={"/clients"}/>
        </Switch>
    );
}
