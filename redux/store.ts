import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app/appSlice";
import { authApi } from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice";
import globalModalReducer from "./features/ui/GlobalModal/globalModalSlice";
import globalSheetReducer from "./features/ui/GlobalSheet/globalSheetSlice";
import useDetailsFormReducer from "./features/userDetailsForm/userDetailsDormSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    userDetailForm: useDetailsFormReducer,
    globalSheet: globalSheetReducer,
    globalModal: globalModalReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
