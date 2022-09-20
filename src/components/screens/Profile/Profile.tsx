import React, {Component} from 'react';

import {ProfileType} from '../../../store/profile/profile.types';
import {Preloader} from '../../shared/Preloader/Preloader';

import {ProfileAboutMe} from './ProfileAboutMe/ProfileAboutMe';
import {ProfileContacts} from './ProfileContacts/ProfileContacts';
import {ProfileEditDataForms} from './ProfileEditDataForms/ProfileEditDataForms';
import {ProfileProfessionalSkills} from './ProfileProfessionalSkills/ProfileProfessionalSkills';
import {ProfilePropsType} from './profile.types';
import {ProfileJobSearchStatus} from './ProfileJobSearchStatus/ProfileJobSearchStatus';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './profile.module.scss';


export class Profile extends Component<ProfilePropsType> {
    state = {
        editMode: false,
    };

    _setEditMode(status: boolean) {
        this.setState(() => ({
            editMode: status,
        }));
    }

    onSubmit(values: ProfileType, setStatus: (status: object) => void, setErrors: (errors: object) => void) {
        const {updateProfile} = this.props;

        updateProfile(values, setStatus, setErrors)
            .then(() => {
                this._setEditMode(false);
            });
    }

    render() {
        const {
            isOwner,
            profile,
            status,
            updateUserAvatar,
            profileUpdatingStatus,
            updateUserStatus,
            setProfileUpdatingStatus,
        } = this.props;


        if (!profile) {
            return <Preloader/>;
        }

        if (this.state.editMode) {
            return <ProfileEditDataForms submit={this.onSubmit.bind(this)} profile={profile}/>;
        } else {
            return (
                <div>
                    <ProfileJobSearchStatus
                        areLookingForJob={profile.lookingForAJob}
                    />
                    <ProfileInfo
                        isOwner={isOwner}
                        profile={profile}
                        updateStatus={updateUserStatus}
                        updateAvatar={updateUserAvatar}
                        status={status}
                    />
                    {isOwner &&
                        <div>
                            <button
                                className={s.editProfileBtn}
                                onClick={() => {
                                    this._setEditMode(true);
                                }}
                            >
                                Редактировать Профиль
                            </button>
                        </div>
                    }
                    <ProfileAboutMe
                        aboutMe={profile.aboutMe}
                    />
                    <ProfileProfessionalSkills
                        lookingForAJobDescription={profile.lookingForAJobDescription}
                    />
                    <ProfileContacts
                        contacts={profile.contacts}
                    />
                </div>
            );
        }
    }
}
