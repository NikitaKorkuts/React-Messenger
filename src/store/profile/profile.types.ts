import {ContactsType, PhotosType} from '../../types/types';

export type ProfileType = {
    userId?: number | null
    lookingForAJob?: boolean | null
    lookingForAJobDescription?: string | null
    fullName?: string | null
    contacts?: ContactsType | null
    photos?: PhotosType,
    aboutMe?: string | null
}