import {createStore, combineReducers} from 'redux';
import {profileReducer} from './redux/Profile/reducer';
// import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'remote-redux-devtools';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from 'redux-persist';

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  profile: persistReducer(profilePersistConfig, profileReducer),
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools);
};
export default configureStore;
