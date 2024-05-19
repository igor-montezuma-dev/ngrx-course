import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer, createReducer, on } from "@ngrx/store";
import { AuthenticationActions } from "../acation-types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

//export const reducers: ActionReducerMap<AuthState> = {};

export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];

export const authReducer = createReducer(
  initialAuthState,
  on(AuthenticationActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
);
