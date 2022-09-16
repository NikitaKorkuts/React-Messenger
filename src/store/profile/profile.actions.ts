import {PhotosType} from '../../types/types';
import {profileServices} from '../../services/profile/profile.services';

import {BasicThunkActionType} from '../store.types';

import {ProfileType, ProfileActionsType} from './profile.types';
import {
    SET_PROFILE_UPDATING_STATUS,
    SET_USER_AVATAR, SET_USER_PROFILE,
    SET_USER_STATUS,
} from './profile.consts';

export const profileActions = {
    setUserStatus: (status: string | null) => ({
        type: SET_USER_STATUS,
        status: status,
    } as const),
    setUserAvatar: (photos: PhotosType) => ({
        type: SET_USER_AVATAR,
        photos: photos,
    } as const),
    setProfileUpdatingStatus: (profileUpdatingStatus: string) => ({
        type: SET_PROFILE_UPDATING_STATUS,
        profileUpdatingStatus,
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: SET_USER_PROFILE,
        profile: profile,
    } as const),
};

export const getUserProfile = (userId: number | null): BasicThunkActionType<ProfileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.getUserProfile(userId);
        dispatch(profileActions.setUserProfile(response));
    };
};

export const getUserStatus = (userId: number): BasicThunkActionType<ProfileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.getUserStatus(userId);
        dispatch(profileActions.setUserStatus(response));
    };
};

export const updateUserStatus = (status: string): BasicThunkActionType<ProfileActionsType> => {
    return async (dispatch) => {
        const response = await profileServices.updateUserStatus(status);
        if (response.resultCode === 0) {
            dispatch(profileActions.setUserStatus(status));
        }
    };
};