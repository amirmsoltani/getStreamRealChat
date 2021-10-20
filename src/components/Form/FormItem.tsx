import React from 'react';
import {Context} from "./Form";
import {FormItemType} from './types';

/* -- Validation regex -- */
const validations = {
    name: /^[a-z A-Z.]{5,30}$/g,
    password: /^(?=.*[A-Za-z@$_])(?=.*\d)[A-Za-z@$_\d]{8,}$/g,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
    phoneNumber: /^\(?([0-9]{4})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/g,

}
const FormItem: FormItemType = (
    {
        inputProps,
        label,
        labelProps = {},
        validation,
        errorMessage = 'Please enter the correct information',
        errorLabelProps = {}
    }
) => {
    //create State for Input Status Ok or Error and user before Clicked on input
    const [{status, first}, setStatus] = React.useState<{ status: 'error' | 'ok', first: boolean }>({
        first: true,
        status: inputProps.required ? 'error' : 'ok'
    });
    // Context
    const context = React.useContext(Context);
    // speared Name
    const name = inputProps.name;

    // after create component add component into context items
    React.useEffect(() => {
        context.createItem(name, !inputProps.required);
    }, []);

    // validation method for validate data
    const valid = (value: string, reg: RegExp): boolean => {
        if (!inputProps.required && [null, '', undefined].includes(value)) {
            return true;
        }
        if (!value.match(reg)) {
            status !== 'error' && setStatus({first, status: 'error'});
            return false;
        }
        if (status === 'error') {
            setStatus({first, status: 'ok'});
        }
        return true;
    }

    // check validation type for validate
    const check = (event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): boolean => {
        const value = event.target.value;
        if (!validation) {
            return true;
        }
        if (validation instanceof RegExp) {
            return valid(value, validation);
        }
        if (validation in validations) {
            const isValid = valid(value, validations[validation]);
            if (isValid && validation === 'password' && name === 'confirmPassword') {
                return context.state.items.password?.value === value;
            }
            return isValid
        }
        return true;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputProps.onChange?.(event);
        check(event);
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        inputProps.onBlur?.(event);
        const isValid = check(event);
        console.log(context.state.items,isValid);
        if (isValid !== context.state.items[name]!.valid) {
            console.log('run');
            context.state.items[name]!.value = event.target.value;
            context.setValidation(name, isValid);
        }
        setStatus({status: isValid ? 'ok' : 'error', first: false});
    }
    return (
        <div
            className={`auth__form-container_fields-content_input ${status === 'error' && (context.state.formSubmit || !first) ? 'error' : ''}`}>
            <label htmlFor={name} {...labelProps}>{label}</label>
            <label htmlFor={name} {...errorLabelProps}
                   className={
                       `${(errorLabelProps?.className || '')}
                        auth__form-container_fields-content_error-message 
                   ${(status === 'error' && (context.state.formSubmit || !first)) ? 'error' : ''}`
                   }>
                {errorMessage}
            </label>
            <input {...inputProps} onChange={handleChange} onBlur={handleBlur}/>
        </div>
    );
};

export default FormItem;
