import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from "../auth/reducers";
import { loaduserData, initializeDatabase } from "../auth/auth.actions";


const store = configureStore({
  reducer: {
    auth: authReducer
  }
  
});

 store.dispatch(initializeDatabase());
 store.dispatch(loaduserData());
export default store;