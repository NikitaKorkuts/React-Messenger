import {ProfileType} from '../../../store/profile/profile.types';
import {ContactsType, Nullable} from '../../../types/types';

export type ProfileContainerPropsType = {
    authUserId: number,
    isAuth: boolean,
    profile: ProfileType | null
    status: string
    profileUpdatingStatus: string
    getUserProfile: (id: number | null) => Promise<void>
    getUserStatus: (id: number) => Promise<void>
    updateUserStatus: (status: string) => Promise<void>
    setProfileUpdatingStatus: (status: string) => void
}

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    profileUpdatingStatus: string
    updateUserStatus: (status: string) => Promise<void>
    setProfileUpdatingStatus: (status: string) => void
}

export type ProfileJobSearchStatusType = {
    areLookingForJob: Nullable<boolean>
}

export type ProfileAboutMePropsType = {
    aboutMe: Nullable<string>
}

export type ProfileContactsPropsType = {
    contacts: Nullable<ContactsType>
}

export type ProfileProfessionalSkillsPropsType = {
    lookingForAJobDescription: Nullable<string>
}

export type ProfileInfoPropsType = {
    status: string
    profile: ProfileType
    updateStatus: (status: string) => Promise<void>
}

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export type ProfileStatusStateType = {
    editMode: boolean
    status: string
}