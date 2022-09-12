import {PhotosType} from '../../types/types';
import {profileServices} from '../../services/profile/profile.services';

import {BasicThunkActionType} from '../store.types';

import {ProfileType, ProfaileActionsType} from './profile.types';
import {
    MESSANGER_PROFILE_SET_PROFILE_UPDATING_STATUS,
    MESSANGER_PROFILE_SET_USER_AVATAR, MESSANGER_PROFILE_SET_USER_PROFILE,
    MESSANGER_PROFILE_SET_USER_STATUS,
} from './profile.consts';

export const profileActions = {
    setUserStatus: (status: string | null) => ({
        type: MESSANGER_PROFILE_SET_USER_STATUS,
        status: status,
    } as const),
    setUserAvatar: (photos: PhotosType) => ({
        type: MESSANGER_PROFILE_SET_USER_AVATAR,
        photos: photos,
    } as const),
    setProfileUpdatingStatus: (profileUpdatingStatus: string) => ({
        type: MESSANGER_PROFILE_SET_PROFILE_UPDATING_STATUS,
        profileUpdatingStatus,
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: MESSANGER_PROFILE_SET_USER_PROFILE,
        profile: profile,
    } as const),
};

export const getUserProfile = (userId: number | null): BasicThunkActionType<ProfaileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.getUserProfile(userId);
        dispatch(profileActions.setUserProfile(response));
    };
};

export const getUserStatus = (userId: number): BasicThunkActionType<ProfaileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.getUserStatus(userId);
        dispatch(profileActions.setUserStatus(response));
    };
};

export const updateUserStatus = (status: string): BasicThunkActionType<ProfaileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.updateUserStatus(status);
        if (response.resultCode === 0) {
            dispatch(profileActions.setUserStatus(status));
        }
    };
};