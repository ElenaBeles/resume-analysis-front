import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;