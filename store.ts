import {createStore, combineReducers} from 'redux';
import {profileReducer} from './redux/Profile/reducer';
// import storage from 'redux-persist/lib/storage';
// import {composeWithDevTools} from 'remote-redux-devtools';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
};
const persistedProfileReducer = persistReducer(
  profilePersistConfig,
  profileReducer,
);
export const store = createStore(persistedProfileReducer);
export const persistor = persistStore(store);

const rootReducer = combineReducers({
  profile: persistedProfileReducer,
});

export default rootReducer;
export const combinedStore = createStore(rootReducer);
