import {ProfileActionsType, ProfileInitialStateType, ProfileType} from './profile.types';
import {
    SET_PROFILE_UPDATING_STATUS, SET_USER_AVATAR,
    SET_USER_PROFILE,
    SET_USER_STATUS,
} from './profile.consts';

export const profileInitialState = {
    profile: null as ProfileType | null,
    profileUpdatingStatus: 'none',
    status: '' as string | null,
};

export const profileReducer = (state = profileInitialState, action: ProfileActionsType): ProfileInitialStateType => {

    switch (action.type) {
    case SET_USER_PROFILE:
        return {...state, profile: action.profile};
    case SET_USER_STATUS:
        return {...state, status: action.status};
    case SET_USER_AVATAR:
        return {
            ...state,
            profile: {...state.profile, photos: action.photos},
        };
    case SET_PROFILE_UPDATING_STATUS:
        return {
            ...state, profileUpdatingStatus: action.profileUpdatingStatus,
        };
    default:
        return state;
    }
};

