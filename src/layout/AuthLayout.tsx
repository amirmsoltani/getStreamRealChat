import React from 'react';
import {useHistory, Route, Switch} from "react-router-dom";
import {SignInContainer, SignUpContainer} from "../containers";
import AuthImage from '../assets/authImage.jpg'

const AuthLayout = () => {
    const history = useHistory();
    const {location: {pathname}, replace} = history;
    React.useEffect(() => {
        if (!['/sign-in', '/sign-up'].includes(pathname)) {
            replace('/sign-in');
        }
    }, [pathname])
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <Switch>
                        <Route path="/sign-in" component={SignInContainer}/>
                        <Route path="/sign-up" component={SignUpContainer}/>
                    </Switch>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={AuthImage} alt="auth Image"/>
            </div>
        </div>
    );
};

export default AuthLayout;
