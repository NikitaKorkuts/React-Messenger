import {BasicThunkActionType} from '../store.types';

import {dialogsServieces} from '../../services/dialogs/dialogs.servieces';
import {ProfileType} from '../profile/profile.types';
import {profileServices} from '../../services/profile/profile.services';
import {reversedMessagesWithConvertedDate} from '../../utils/messagesWithConvertedDate';

import {
    CHATTING_USER_PROFILE_RECEIVED,
    DIALOGS_RECEIVED,
    MESSAGES_RECEIVED, RESET_MESSAGES, SET_ARE_MESSAGES_FETCHING,
    SET_CURRENT_PAGE, SET_IS_MESSAGE_SENDING, SET_NEW_MESSAGES_COUNT, SET_NOT_UPDATING_MESSAGES, SET_TOTAL_PAGES_COUNT,
} from './dialogs.consts';
import {DialogsActionsType, DialogType, MessageType} from './dialogs.types';

export const dialogsActions = {
    dialogsReceived: (dialogs: DialogType[]) => ({
        type: DIALOGS_RECEIVED,
        payload: {dialogs},
    } as const),
    messagesReceived: (messages: MessageType[]) => ({
        type: MESSAGES_RECEIVED,
        payload: {messages},
    } as const),
    chattingUserProfileReceived: (profile: ProfileType) => ({
        type: CHATTING_USER_PROFILE_RECEIVED,
        payload: {profile},
    } as const),
    setCurrentPage: (page: number) => ({
        type: SET_CURRENT_PAGE,
        payload: {page},
    } as const),
    setAreMessagesFetching: (areFetching: boolean) => ({
        type: SET_ARE_MESSAGES_FETCHING,
        payload: {areFetching},
    } as const),
    setNotUpdatingMessages: (messages: MessageType[]) => ({
        type: SET_NOT_UPDATING_MESSAGES,
        payload: {messages},
    } as const),
    setTotalPagesCount: (pagesCount: number) => ({
        type: SET_TOTAL_PAGES_COUNT,
        payload: {pagesCount},
    } as const),
    setIsMessageSending: (isSending: boolean) => ({
        type: SET_IS_MESSAGE_SENDING,
        payload: {isSending},
    } as const),
    resetMessages: () => ({
        type: RESET_MESSAGES,
    } as const),
    setNewMessagesCount: (newMessagesCount: number) => ({
        type: SET_NEW_MESSAGES_COUNT,
        payload: {newMessagesCount},
    } as const),
};

export const getDialogs = (): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        const response = await dialogsServieces.getDialogs();
        dispatch(dialogsActions.dialogsReceived(response));
    };
};

export const getMessages = (
    dialogId: number,
    page = 1,
    count = 10,
): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        dispatch(dialogsActions.setAreMessagesFetching(true));
        const response = await dialogsServieces.getMessages(dialogId, page, count);
        const newResponse = reversedMessagesWithConvertedDate(response);
        dispatch(dialogsActions.setAreMessagesFetching(false));
        dispatch(dialogsActions.setIsMessageSending(false));
        if(page>1) {
            dispatch(dialogsActions.setNotUpdatingMessages(newResponse.items));
        } else {
            dispatch(dialogsActions.messagesReceived(newResponse.items));
        }
    };
};

export const getTotalPagesCount = (dialogId: number): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch, getState) => {
        const response = await dialogsServieces.getMessages(dialogId, 1, 0);
        dispatch(dialogsActions.setTotalPagesCount(Math.ceil(response.totalCount / getState().dialogs.pageCount)));
    };
};

export const getChattingUserProfile = (userId: number): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.getUserProfile(userId);
        dispatch(dialogsActions.chattingUserProfileReceived(response));
    };
};

export const sendMessage = (dialogId: number, msgBody: string): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        dispatch(dialogsActions.setIsMessageSending(true));
        await dialogsServieces.sendMessage(dialogId, msgBody);
    };
};

export const getNewMessagesCount = (): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        const response = await dialogsServieces.getNewMessagesCount();
        dispatch(dialogsActions.setNewMessagesCount(response));
    };
};