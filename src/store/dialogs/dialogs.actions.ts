import {BasicThunkActionType} from '../store.types';

import {dialogsServieces} from '../../services/dialogs/dialogs.servieces';

import {MESSANGER_DIALOGS_DIALOGS_RECEIVED} from './dialogs.consts';
import {DialogsActionsType, DialogType} from './dialogs.types';

export const dialogsActions = {
    dialogsReceived: (dialogs: DialogType[]) => (
        {
            type: MESSANGER_DIALOGS_DIALOGS_RECEIVED,
            payload: {dialogs},
        } as const),
};

export const getDialogs = (): BasicThunkActionType<DialogsActionsType> => {
    return async (dispatch) => {
        const response = await dialogsServieces.getDialogs();
        dispatch(dialogsActions.dialogsReceived(response));
    };
};