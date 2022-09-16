import {InferActionsType} from '../store.types';

import {authInitialState} from './auth.reducer';
import {authActions} from './auth.actions';

export type authInitialStateType = typeof authInitialState

export type AuthActionsType = InferActionsType<typeof authActions>

