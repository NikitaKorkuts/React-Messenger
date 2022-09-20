import React, {FC} from 'react';

import {ProfileJobSearchStatusType} from '../profile.types';
import s from '../profile.module.scss';

export const ProfileJobSearchStatus: FC<ProfileJobSearchStatusType> = ({areLookingForJob}) => {
    if (areLookingForJob) {
        return (
            <div className={s.jobSearchStatus}>
                <h2>Job Search Status: <span className={s.activelyLooking}>Actively Looking</span></h2>
            </div>
        );
    }
    return (
        <div className={s.jobSearchStatus}>
            <h2>Job Search Status: <span className={s.notLooking}>Not Looking</span></h2>
        </div>
    );
};