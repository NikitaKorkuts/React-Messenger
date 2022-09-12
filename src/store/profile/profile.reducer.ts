import {ProfaileActionsType, ProfileInitialStateType, ProfileType} from './profile.types';
import {
    MESSANGER_PROFILE_SET_PROFILE_UPDATING_STATUS, MESSANGER_PROFILE_SET_USER_AVATAR,
    MESSANGER_PROFILE_SET_USER_PROFILE,
    MESSANGER_PROFILE_SET_USER_STATUS,
} from './profile.consts';

export const profileInitialState = {
    profile: null as ProfileType | null,
    profileUpdatingStatus: 'none',
    status: '' as string | null,
};

export const profileReducer = (state = profileInitialState, action: ProfaileActionsType): ProfileInitialStateType => {

    switch (action.type) {
    case MESSANGER_PROFILE_SET_USER_PROFILE:
        return {...state, profile: action.profile};
    case MESSANGER_PROFILE_SET_USER_STATUS:
        return {...state, status: action.status};
    case MESSANGER_PROFILE_SET_USER_AVATAR:
        return {
            ...state,
            profile: {...state.profile, photos: action.photos},
        };
    case MESSANGER_PROFILE_SET_PROFILE_UPDATING_STATUS:
        return {
            ...state, profileUpdatingStatus: action.profileUpdatingStatus,
        };
    default:
        return state;
    }
};

