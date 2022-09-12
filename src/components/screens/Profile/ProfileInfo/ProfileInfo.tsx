import React, {FC} from 'react';

import {ProfileInfoPropsType} from '../profile.types';
import s from '../proifle.module.scss';

import defaultAvatar from '../../../../assets/images/defaultAvatar.png';
import uploadAvatarIcon from '../../../../assets/icons/upload-avatar.png' ;
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, updateStatus, status}) => {

    return (
        <div className={s.user}>
            <div className={s.ownerAvatar}>
                <img className={s.avatarImg} src={profile?.photos?.large || defaultAvatar} alt="avatar"/>
                <img className={s.addIcon} src={uploadAvatarIcon} alt="addIcon"/>
                <label>
                    <div className={s.uploadFileArea}></div>
                    <input type="file" hidden/>
                </label>
            </div>
            <div className={s.userInfo}>
                <div className={s.infoName}>
                    <p>{profile?.fullName}</p>
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

