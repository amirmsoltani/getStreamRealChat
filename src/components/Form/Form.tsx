import React, {FormEventHandler} from 'react';
import {StateType, ContextType, FormContextType} from './types';
import {createItem, onSubmit, setValue, setValidation} from './formHandlers';

// State  default value
export const defaultValues: StateType = {
    formLoading: false,
    formSubmit: false,
    formValid: false,
    items: {},
};

//create Context
export const Context = React.createContext<ContextType>({
    state: {...defaultValues},
    setState: () => {
    },
    formProps: {},
    setValidation,
    setValue,
    createItem,
    onSubmit,
});


const Form: FormContextType = ({formProps = {}, children}) => {
    const [state, setState] = React.useState<StateType>({...defaultValues});
    const values: Partial<ContextType> = {state, setState, formProps};
    values.setValidation = setValidation.bind(values as ContextType);
    values.setValue = setValue.bind(values as ContextType);
    values.createItem = createItem.bind(values as ContextType);
    values.onSubmit = onSubmit.bind(values as ContextType);
    return (
        <Context.Provider value={values as ContextType}>
            <Context.Consumer>
                {
                    (value) => (
                        <form {...formProps} onSubmit={value.onSubmit}>
                            {children}
                        </form>)
                }
            </Context.Consumer>
        </Context.Provider>
    );
};

export default Form;


