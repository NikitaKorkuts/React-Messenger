import React, {FC} from 'react';

import s from './dialog.module.scss';
import {SeparatingDateItemPropsType} from './dialog.types';

export const SeparatingDateItem:FC<SeparatingDateItemPropsType> = ({isLast, date}) => {
    return (
        <div>
            {!isLast && <hr className={s.separationLine}/>}
            <div className={s.separationDate}>
                <p>
                    {date}
                </p>
            </div>
        </div>
    );
};