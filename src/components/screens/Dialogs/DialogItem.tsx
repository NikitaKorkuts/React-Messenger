import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import defaultAvatar from '../../../assets/images/defaultAvatar.png';

import s from './dialogs.module.scss';
import {DialogItemPropsType} from './dialogs.types';

export const DialogItem: FC<DialogItemPropsType> = ({dialog}) => {

    const getUserAvatar = () => {
        const avatar = dialog.photos.small;
        return <img className={s.avatar} src={avatar ? avatar : defaultAvatar} alt="avatar"/>;
    };

    const getNewMsgCount = () => {
        if (dialog.hasNewMessages) {
            return <div className={s.newMessagesCount}>{dialog.newMessagesCount}</div>;
        }
    };

    return (
        <Link to={'/dialog/' + dialog.id} className={s.dialog}>
            <div >
                {getUserAvatar()}
            </div>
            <div className={s.userInfo}>
                <p className={s.userName}>{dialog.userName}</p>
                <p className={s.lastUserActivityDate}>{dialog.lastUserActivityDate}</p>
            </div>
            {getNewMsgCount()}
        </Link>
    );
};