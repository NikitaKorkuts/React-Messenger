import React, {Component} from 'react';

import {Preloader} from '../../shared/Preloader/Preloader';

import {ProfileAboutMe} from './ProfileAboutMe/ProfileAboutMe';
import {ProfileContacts} from './ProfileContacts/ProfileContacts';
import {ProfileEditDataForms} from './ProfileEditDataForms/ProfileEditDataForms';
import {ProfileProfessionalSkills} from './ProfileProfessionalSkills/ProfileProfessionalSkills';
import {ProfilePropsType} from './profile.types';
import {ProfileJobSearchStatus} from './ProfileJobSearchStatus/ProfileJobSearchStatus';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export class Profile extends Component<ProfilePropsType> {

    render() {
        const {
            profile,
            status,
            profileUpdatingStatus,
            updateUserStatus,
            setProfileUpdatingStatus,
        } = this.props;

        if (!profile) {
            return <Preloader/>;
        }
        return (
            <div>
                <ProfileEditDataForms />
                <ProfileJobSearchStatus areLookingForJob={profile.lookingForAJob}/>
                <ProfileInfo
                    profile={profile}
                    updateStatus={updateUserStatus}
                    status={status}/>
                <ProfileAboutMe aboutMe={profile.aboutMe}/>
                <ProfileProfessionalSkills lookingForAJobDescription={profile.lookingForAJobDescription}/>
                <ProfileContacts contacts={profile.contacts}/>


            </div>
        );
    }
}
