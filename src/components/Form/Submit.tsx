import React from 'react';
import {SubmitType} from "./types";
import {Context} from "./Form";

const Submit:SubmitType = (props) => {
    const context = React.useContext(Context);
    return (
        <button {...props} disabled={props.disabled || !context.state.formValid}/>
    );
};

export default Submit;
