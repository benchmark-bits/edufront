import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/Auth/auth-reducer';

// created interface appstate for managing auth.state interface (ie.here authstate interface is used for management of state)
export interface AppState {
  authState: auth.State;
}
// created constant reducers with auth reducer.
export const reducers = {
  auth: auth.reducer
};
// featureselector is create for auth state and server side error handle
export const selectAuthState = createFeatureSelector<AppState>('auth');
