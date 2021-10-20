import React from "react";
import {ContextType} from "./types";

//create new Item into context state
export function createItem(this: ContextType, name: string, valid: boolean) {
    this.state = {
        ...this.state,
        items: {
            ...this.state.items,
            [name]: {name, value: undefined, valid: valid}
        }
    };
    this.setState(this.state);
};

// set Value Into target
export function setValue(this: ContextType, name: string, value: any) {
    if (name in this.state.items) {
        this.setState({
            ...this.state,
            items: {
                ...this.state.items,
                [name]: {...this.state.items[name]!, value: value}
            }
        })
    }
};

// Set Validation Inputs into Context
export function setValidation(this: ContextType, name: string, validate: boolean) {
    const items = this.state.items;
    if (name in items) {
        let formValid = false;
        if (validate) {
            formValid = !Object.values(items).find((item) => (!item!.valid && name !== item!.name))
        }
        this.setState({
            ...this.state,
            formValid,
            items: {
                ...items,
                [name]: {...items[name]!, valid: validate}
            }
        });
    }
};

// form Submit method
export function onSubmit(this: ContextType, event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const items = this.state.items;
    for (const key in items) {
        if (!items[key]!.valid) {
            this.setState({...this.state, formValid: false, formSubmit: true});
            return;
        }
    }
    this.formProps.onSubmit?.(event);
    this.setState({...this.state, formValid: true, formSubmit: true, formLoading: true})

};
