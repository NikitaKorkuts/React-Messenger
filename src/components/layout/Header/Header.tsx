import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import searchIcon from '../../../assets/icons/search-icon.svg';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';

import s from './Header.module.scss';


export const Header: FC = () => {
    return (
        <div className={s.header}>
            <div className={s.search}>
                <img className={s.searchIcon} src={searchIcon} alt="search-icon"/>
            </div>
            <div className={s.profileLink}>
                <Link to="/profile" className={s.profileLink}>
                    <p className={s.link}>NikitaKorkuts</p>
                    <img className={s.avatar} src={defaultAvatar} alt="avatar"/>
                </Link>
            </div>
        </div>
    );
};