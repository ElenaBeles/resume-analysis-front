import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userSlice from 'reducers/userSlice';
import postsSlice from 'reducers/postsSlice';
import friendsSlice from 'reducers/friendsSlice';

const store = configureStore({
    reducer: { userSlice, postsSlice, friendsSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;