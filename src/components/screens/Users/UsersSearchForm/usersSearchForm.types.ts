import {FilterType} from '../../../../store/users/users.types';

export type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

export type UsersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
    filter: FilterType
}