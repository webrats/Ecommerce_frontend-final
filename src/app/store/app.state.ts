import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.seletors";
import { SharedState } from "./shared/shared.state";
import {AuthState} from "../auth/state/auth.state"
import { AUTH_STATE_NAME } from "../auth/state/auth.selectors";
import { authReducer } from "../auth/state/auth.reducer";
import { CART_STATE_NAME } from "../cart/state/cart.selectors";
import { CartState } from "../cart/state/cart.state";
import { cartReducer } from "../cart/state/cart.reducer";



export interface AppState  {
    [SHARED_STATE_NAME] :SharedState,
    [AUTH_STATE_NAME] :AuthState ,
    [CART_STATE_NAME] :CartState
}

export const appReducer = {
 [SHARED_STATE_NAME] :sharedReducer,
 [AUTH_STATE_NAME]: authReducer,
 [CART_STATE_NAME] :cartReducer
}