import {BasicThunkActionType} from '../store.types';

import {dialogsServieces} from '../../services/dialogs/dialogs.servieces';

import {DIALOGS_RECEIVED} from './dialogs.consts';
import {DialogsActionsType, DialogType} from './dialogs.types';

export const dialogsActions = {
    dialogsReceived: (dialogs: DialogType[]) => (
        {
            type: DIALOGS_RECEIVED,
            payload: {dialogs},
        } as const),
};

export const getDialogs = (): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        const response = await dialogsServieces.getDialogs();
        dispatch(dialogsActions.dialogsReceived(response));
    };
};