import React from 'react';
import {Form, FormItem, Submit} from "../components";
import {Link} from "react-router-dom";

const SignInContainer = () => {
    return (
        <>
            <p>sign In</p>
            <Form formProps={{}}>
                <FormItem label={"Email"}
                          validation={"email"}
                          errorMessage="Please enter the email correctly"
                          inputProps={{
                              type: 'email',
                              name: 'email',
                              placeholder: 'Email',
                              required: true
                          }}/>

                <FormItem label={"Password"}
                          validation={/^[A-Za-z\d@$_]{4,32}$/g}
                          errorMessage="Please enter the password correctly"
                          inputProps={{
                              type: 'password',
                              name: 'password',
                              placeholder: 'Password',
                              required: true
                          }}/>
                <div className="auth__form-container_fields-content_button">
                    <Submit>Sign In</Submit>
                </div>
            </Form>
            <div className="auth__form-container_fields-account">
                <p>
                    Don't have an account?
                    <Link to={'/sign-up'}>Sign Up</Link>
                </p>
            </div>
        </>
    );
};

export default SignInContainer;
