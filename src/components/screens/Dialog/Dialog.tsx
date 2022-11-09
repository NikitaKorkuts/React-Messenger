import React, {FC} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Formik} from 'formik';
import * as yup from 'yup';

import {Textarea} from '../../ui/Textarea/Textarea';

import {DialogPropsType} from './dialog.types';
import {MessageItem} from './MessageItem';
import s from './dialog.module.scss';
import {SeparatingDateItem} from './SeparatingDateItem';

export const Dialog: FC<DialogPropsType> = ({
    updatingMessages,
    chattingUserProfile,
    authUserProfile,
    notUpdatingMessages,
    fetchNotUpdatingMessages,
    currentPage,
    totalPagesCount,
    sendMessage,
    compareDates,
    getFormattedDateWithFullMonth,
    getFormattedDateHMM,
}) => {
    const MessagesElements = updatingMessages.map((m, i) => {
        const nextMessage = updatingMessages[i + 1] || notUpdatingMessages[0];
        const isSameSender = nextMessage?.senderId === m.senderId;

        return (
            <div key={m.id}>
                {!compareDates(m.addedAt, nextMessage?.addedAt) && (
                    <SeparatingDateItem
                        date={getFormattedDateWithFullMonth(m.addedAt)}
                        isLast={i === updatingMessages.length-1}
                    />
                )}

                <MessageItem
                    body={m.body}
                    senderName={m.senderName}
                    key={m.id}
                    id={m.id}
                    viewed={m.viewed}
                    addedAt={m.addedAt}
                    senderId={m.senderId}
                    chattingUserProfile={chattingUserProfile}
                    authUserProfile={authUserProfile}
                    isSameSender={isSameSender}
                    getFormattedDateHMM={getFormattedDateHMM}
                />
            </div>

        );
    });

    const validationSchema = yup.object().shape({
        msgBody: yup.string()
            .required('Заполните поле'),
    });

    return (
        <div
            id="scrollableDiv"
            className={s.dialog}
        >

            <Formik
                initialValues={{msgBody: ''}}
                validateOnBlur={false}
                validateOnChange={false}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm, setSubmitting}) => {
                    sendMessage(values.msgBody);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({
                    values,
                    handleChange,
                    touched,
                    errors,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={s.sendMessage}>
                            <Textarea
                                name={'msgBody'}
                                hasError={touched.msgBody && errors.msgBody}
                                error={errors.msgBody}
                                type={'textarea'}
                                props={{
                                    onBlur: handleBlur,
                                    value: values.msgBody,
                                    onChange: handleChange,
                                    placeholder: 'Write message...',
                                }}
                            />
                            <button className={s.sendMessageBtn} type="submit">Submit</button>
                        </div>
                    </form>
                )}
            </Formik>

            {MessagesElements}

            {notUpdatingMessages.length !== 0 && <InfiniteScroll
                next={fetchNotUpdatingMessages}
                inverse={true}
                className={s.infiniteScroll}
                hasMore={currentPage !== totalPagesCount}
                loader={<h4 className={s.loaderText}>Loading...</h4>}
                dataLength={notUpdatingMessages.length}
                scrollableTarget="scrollableDiv"
            >

                {notUpdatingMessages.map((m, i) => {
                    const nextMessage = notUpdatingMessages[i + 1];
                    const isSameSender = nextMessage?.senderId === m.senderId;

                    return (
                        <div key={m.id}>
                            {!compareDates(m.addedAt, nextMessage?.addedAt) && (
                                <SeparatingDateItem
                                    date={getFormattedDateWithFullMonth(m.addedAt)}
                                    isLast={i === notUpdatingMessages.length-1}
                                />
                            )}

                            <MessageItem
                                body={m.body}
                                senderName={m.senderName}
                                id={m.id}
                                key={m.id}
                                viewed={m.viewed}
                                addedAt={m.addedAt}
                                senderId={m.senderId}
                                chattingUserProfile={chattingUserProfile}
                                authUserProfile={authUserProfile}
                                isSameSender={isSameSender}
                                getFormattedDateHMM={getFormattedDateHMM}
                            />
                        </div>
                    );
                })}
            </InfiniteScroll>}
        </div>

    );
};