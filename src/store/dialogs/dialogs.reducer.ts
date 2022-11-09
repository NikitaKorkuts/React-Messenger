import {ProfileType} from '../profile/profile.types';

import {DialogsActionsType, DialogsInitialStateType, DialogType, MessageType} from './dialogs.types';
import {
    CHATTING_USER_PROFILE_RECEIVED,
    DIALOGS_RECEIVED,
    MESSAGES_RECEIVED,
    RESET_MESSAGES,
    SET_ARE_MESSAGES_FETCHING,
    SET_CURRENT_PAGE,
    SET_IS_MESSAGE_SENDING,
    SET_NEW_MESSAGES_COUNT,
    SET_NOT_UPDATING_MESSAGES,
    SET_TOTAL_PAGES_COUNT,
} from './dialogs.consts';


export const dialogsInitialState = {
    dialogs: [] as DialogType[],
    notUpdatingMessages: [] as MessageType[], //all other messages,that not updating
    updatingMessages: [] as MessageType[], //last messages amount of pageCount, requesting from server every 2 seconds
    chattingUserProfile: {} as ProfileType,
    areMessagesFetching: false,
    isMessageSending: false,
    currentPage: 2,
    pageCount: 20,
    totalPagesCount: 0,
    newMessagesCount: 0,
};

export const dialogsReducer = (state = dialogsInitialState, action: DialogsActionsType): DialogsInitialStateType => {
    switch (action.type) {
    case DIALOGS_RECEIVED:
        return {...state, dialogs: action.payload.dialogs};
    case MESSAGES_RECEIVED:
        return {...state, updatingMessages: [...action.payload.messages]};
    case CHATTING_USER_PROFILE_RECEIVED:
        return {...state, chattingUserProfile: action.payload.profile};
    case SET_CURRENT_PAGE:
        return {...state, currentPage: action.payload.page};
    case SET_ARE_MESSAGES_FETCHING:
        return {...state, areMessagesFetching: action.payload.areFetching};
    case SET_NOT_UPDATING_MESSAGES:
        return {...state, notUpdatingMessages: [...state.notUpdatingMessages, ...action.payload.messages]};
    case SET_TOTAL_PAGES_COUNT:
        return {...state, totalPagesCount: action.payload.pagesCount};
    case SET_IS_MESSAGE_SENDING:
        return {...state, isMessageSending: action.payload.isSending};
    case RESET_MESSAGES:
        return {...state, updatingMessages: [], notUpdatingMessages: [], currentPage: 2};
    case SET_NEW_MESSAGES_COUNT:
        return {...state, newMessagesCount: action.payload.newMessagesCount};
    default:
        return state;
    }
};




