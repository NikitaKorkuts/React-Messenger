import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import searchIcon from '../../../assets/icons/search-icon.svg';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';

import s from './Header.module.scss';
import {HeaderPropsType} from './header.types';

export const Header: FC<HeaderPropsType> = ({isAuth, userId, authUserProfile}) => {

    return (
        <div className={s.header}>
            <div className={s.search}>
                <img className={s.searchIcon} src={searchIcon} alt="search-icon"/>
            </div>
            {isAuth && authUserProfile
                ?
                <div className={s.profileLink}>
                    <Link to={`/profile/${userId}`} className={s.profileLink}>
                        <p className={s.link}>{authUserProfile.fullName}</p>
                        <img className={s.avatar} src={authUserProfile.photos?.small || defaultAvatar} alt="avatar"/>
                    </Link>
                </div>
                :
                <Link to={'/login'} className={s.login}>Войти</Link>
            }

        </div>
    );
};