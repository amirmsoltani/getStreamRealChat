import React, {FormEventHandler} from "react";

export type Items = {
    [k in string]?: {
        valid: boolean;
        name: string;
        value: any;
    };
};
export type StateType = {
    formValid: boolean;
    formSubmit: boolean;
    formLoading: boolean;
    items: Items;
}
export type ContextType = {
    createItem(name: string, valid: boolean): void;
    setValue(name: string, value: string): void;
    setValidation(name: string, valid: boolean): void;
    onSubmit(this: ContextType, event: React.FormEvent<HTMLFormElement>): void;
    formProps: React.FormHTMLAttributes<HTMLFormElement>;
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export type FromType = React.FC<ContextType & { children: React.ReactNode }>;

export type FormContextType = React.FC<{
    formProps: React.FormHTMLAttributes<HTMLFormElement>;
}>;

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>
export type FormItemType = React.FC<{
    label?: string;
    inputProps: InputProps & Required<Pick<InputProps, 'type' | 'name' | 'placeholder' | 'required'>>;
    labelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'>;
    errorLabelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'>;
    validation?: 'phoneNumber' | 'email' | 'password' | 'name' | RegExp;
    errorMessage?: string;
}>;

export type SubmitType = React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
