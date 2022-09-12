import React, {FC} from 'react';

import {ProfileAboutMePropsType} from '../profile.types';

export const ProfileAboutMe: FC<ProfileAboutMePropsType> = ({aboutMe}) => {
    if (aboutMe) {
        return (
            <div>
                <h1>About Me</h1>
                <p>{aboutMe}</p>
            </div>
        );
    }
    return <></>;
};
