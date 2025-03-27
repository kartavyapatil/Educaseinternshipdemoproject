import {configureStore} from '@reduxjs/toolkit';

import {setupListeners} from '@reduxjs/toolkit/query/react';
import { userslice } from '../slice/user.slice';
export const store=configureStore({
    reducer: {
        [userslice.name]: userslice.reducer,
    }
    
})
setupListeners(store.dispatch);