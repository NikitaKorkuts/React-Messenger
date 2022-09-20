import React, {FC} from 'react';

import {ProfileProfessionalSkillsPropsType} from '../profile.types';

export const ProfileProfessionalSkills: FC<ProfileProfessionalSkillsPropsType> = ({lookingForAJobDescription}) => {
    if (lookingForAJobDescription) {
        return (
            <div>
                <h1>My Professional skills</h1>
                <p>{lookingForAJobDescription}</p>
            </div>
        );
    }
    return <></>;
};

