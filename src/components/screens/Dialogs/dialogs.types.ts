import {DialogType} from '../../../store/dialogs/dialogs.types';

export type DialogsPropsType = {
    dialogs: DialogType[]
}

export type DialogItemPropsType = {
    dialog: DialogType
    key: number
}

export type DialogsContainerPropsType = {
    dialogs: DialogType[]
    getDialogs: () => Promise<void>
}