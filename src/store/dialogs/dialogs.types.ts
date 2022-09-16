import {InferActionsType} from '../store.types';

import {dialogsInitialState} from './dialogs.reducer';

import {dialogsActions} from './dialogs.actions';

export type DialogsInitialStateType = typeof dialogsInitialState

export type DialogsActionsType = InferActionsType<typeof dialogsActions>

export type DialogType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: {
        large: string | null
        small: string | null
    }
}
