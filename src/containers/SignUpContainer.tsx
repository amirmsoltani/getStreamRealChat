import React from 'react';
import {Form, FormItem, Submit} from "../components";
import {Link} from 'react-router-dom';

const SignUpContainer = () => {
    return (
        <>
            <p>Sign Up</p>
            <Form formProps={{}}>
                <FormItem label={"Full Name"}
                          validation="name"
                          errorMessage="Please enter a name without special characters and numbers"
                          inputProps={{
                              type: 'text',
                              name: 'fullName',
                              placeholder: 'Full Name',
                              required: true
                          }}/>
                <FormItem label={"Email"}
                          validation="email"
                          errorMessage="Please enter the email correctly"
                          inputProps={{
                              type: 'email',
                              name: 'email',
                              placeholder: 'Email',
                              required: true
                          }}/>
                <FormItem label={"Phone Number"}
                          validation="phoneNumber"
                          errorMessage="Please enter the phone number correctly"
                          inputProps={{
                              type: 'text',
                              name: 'phoneNumber',
                              placeholder: 'Phone Number',
                              required: true
                          }}/>
                <FormItem label={"Password"}
                          validation="password"
                          errorMessage="The password must contain eight uppercase and lowercase letters, a special character and a number"
                          inputProps={{
                              type: 'password',
                              name: 'password',
                              placeholder: 'Password',
                              required: true
                          }}/>
                <FormItem label={"Confirm Password"}
                          validation="password"
                          errorMessage="Repeat password is incorrect"
                          inputProps={{
                              type: 'password',
                              name: 'confirmPassword',
                              placeholder: 'Confirm Password',
                              required: true
                          }}/>
                <FormItem label={"Avatar Image"}
                          inputProps={{
                              type: 'file',
                              accept: "image/png, image/jpeg",
                              name: 'avatarImage',
                              placeholder: 'Avatar Image',
                              required: false,
                          }}/>
                <div className="auth__form-container_fields-content_button">
                    <Submit>Sign Up</Submit>
                </div>
            </Form>
            <div className="auth__form-container_fields-account">
                <p>
                    Already have an account?
                    <Link to={'/sign-in'}>Sign In</Link>
                </p>
            </div>
        </>
    );
};

export default SignUpContainer;
