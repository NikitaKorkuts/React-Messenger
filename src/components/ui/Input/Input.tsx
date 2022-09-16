import React, {FC} from 'react';

import {Field} from '../../shared/Field/Field';

import {InputPropsType} from './input.types';

export const Input: FC<InputPropsType> = ({
    type = 'text',
    name,
    hasError= false,
    error= '',
    props = {},
}) => {
    return (
        <Field error={error} hasError={hasError}><input type={type} name={name} {...props} /></Field>
    );
};