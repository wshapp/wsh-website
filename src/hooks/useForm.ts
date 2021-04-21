import React from 'react';

export const useForm = (callback, initialState = {}): { onChange: Function, onSubmit: Function, values: any} => {
    const [values, setValues] = React.useState(initialState);

    const onChange = (event) => {
        if (event.target.getAttribute("contenteditable")) setValues({ ...values, [event.target.getAttribute("name")]: event.target.textContent });
        else setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    };
};
