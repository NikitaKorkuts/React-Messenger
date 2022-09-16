import React, {FC} from 'react';

import s from './field.module.scss';

export type FieldPropsType = {
    children: React.ReactNode
    hasError?: boolean | string
    error?: string
}

export const Field: FC<FieldPropsType> = ({
    children,
    hasError = false,
    error = '',
}) => {
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <>
                {children}
                {hasError && <span>{error}</span>}
            </>
        </div>
    );
};

