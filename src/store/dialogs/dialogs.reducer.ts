import {DialogsActionsType, DialogType, DialogsInitialStateType} from './dialogs.types';
import {MESSANGER_DIALOGS_DIALOGS_RECEIVED} from './dialogs.consts';

export const dialogsInitialState = {
    dialogs: [] as DialogType[],
};

export const dialogsReducer = (state = dialogsInitialState, action: DialogsActionsType): DialogsInitialStateType => {
    switch (action.type) {
    case MESSANGER_DIALOGS_DIALOGS_RECEIVED:
        return {...state, dialogs: action.payload.dialogs};
    default:
        return state;
    }
};




