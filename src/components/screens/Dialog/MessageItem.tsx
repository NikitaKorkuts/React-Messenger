import React, {FC} from 'react';

import defaultAvatar from '../../../assets/images/defaultAvatar.png';

import s from './dialog.module.scss';
import {MessageItemPropsType} from './dialog.types';

export const MessageItem: FC<MessageItemPropsType> = ({
    senderName,
    viewed,
    id,
    body,
    addedAt,
    senderId,
    chattingUserProfile,
    authUserProfile,
    isSameSender,
    getFormattedDateHMM,
}) => {
    const isSender = authUserProfile.userId === senderId;

    return (
        <div
            id={id}
            className={`${s.message} ${isSender ? s.left : s.right} ${isSameSender ? s.sameSender : ''}`}
        >
            <div className={s.avatar}>
                {!isSameSender && (
                    <>
                        {isSender && <img src={authUserProfile?.photos?.large || defaultAvatar} alt="avatar"/>}
                        {!isSender && <img src={chattingUserProfile?.photos?.small || defaultAvatar} alt="avatar"/>}
                    </>
                )}
            </div>
            <div className={s.body}>
                {!isSameSender && (
                    <div className={s.info}>
                        <span className={s.name}>{senderName}</span>
                    </div>
                )}
                <div className={s.messageText}>
                    <div
                        className={s.messageTextBody}
                        dangerouslySetInnerHTML={{__html: body}}
                    />

                    <div className={`${s.checkmark} ${isSameSender ? s.sameSender : ''}`}>
                        <span className={s.date}>{getFormattedDateHMM(addedAt)}</span>
                        <svg
                            className={viewed ? s.fill_blue : s.fill_gray}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            {/*eslint-disable */}
                            <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/>
                            {/*eslint-enable*/}
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
};

