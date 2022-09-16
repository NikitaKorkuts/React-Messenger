import {ProfileType} from '../../../store/profile/profile.types';

export type HeaderPropsType = {
    isAuth: boolean
    userId: number | null
    authUserProfile: ProfileType | null
}