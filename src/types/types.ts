export type Nullable<T> = T | null | undefined

export type RouterType = {
    router: {
        params: {
            id: number
        }
    }
}

export type ContactsType = {
    [key: string]: string | null;
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}

