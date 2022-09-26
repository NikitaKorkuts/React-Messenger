import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {UserItemPropsType} from './users.types';
import s from './user.module.scss';

export const UserItem: FC<UserItemPropsType> = ({
    imgUrl,
    name,
    isFriend,
    isFollowingInProgress,
    follow,
    id,
    unfollow,
}) => {
    const onAddToFriends = () => {
        follow(id);
    };
    const onRemoveFromFriends = () => {
        unfollow(id);
    };
    const getIsFriend = (isFriend: boolean) => {
        if (isFriend) {
            return (
                <div className={s.infoFriend}>
                    <span>&#10003; Your friend</span>
                    <button
                        disabled={isFollowingInProgress.some(userId => userId === id)}
                        onClick={onRemoveFromFriends}
                    >
                        Remove From Friends
                    </button>
                </div>
            );
        } else {
            return (
                <div className={s.infoFriend}>
                    <button
                        disabled={isFollowingInProgress.some(id => id === id)}
                        onClick={onAddToFriends}
                    >
                        Add To Friends
                    </button>
                </div>
            );
        }
    };

    return (
        <div className={s.user}>
            <div className={s.userAvatar}>
                <Link to={`/profile/${id}`}>
                    <img alt="UserAvatar" src={imgUrl}/>
                </Link>
            </div>
            <div className={s.userInfo}>
                <div className={s.infoName}>
                    <Link to={`/profile/${id}`}>
                        <p>{name}</p>
                    </Link>
                </div>
                <div className={s.infoInfo}>

                </div>
                {getIsFriend(isFriend)}
            </div>
        </div>
    )
};