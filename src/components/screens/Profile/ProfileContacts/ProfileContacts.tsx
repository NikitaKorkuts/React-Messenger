import React, {FC} from 'react';

import s from '../profile.module.scss';
import {ProfileContactsPropsType} from '../profile.types';

export const ProfileContacts: FC<ProfileContactsPropsType> = ({contacts}) => {
    const contactElements = [];

    for (const key in contacts) {
        if (contacts[key]) {
            const contact = (
                <div
                    key={contacts[key]}
                    className={s.contact}>
                    <p>{`${key}: `}
                        <a href={contacts[key] as string}>{contacts[key]}</a>
                    </p>
                </div>
            );
            contactElements.push(contact);
        }
    }

    if (contactElements.length > 0) {
        return (
            <div>
                <h1>Contacts</h1>
                {contactElements}
            </div>
        );
    }
    return <></>;
};
