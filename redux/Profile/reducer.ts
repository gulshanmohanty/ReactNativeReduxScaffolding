import {profileActions} from './action';
import {IProfileReducerState} from './interface';

export const initialState = {
  profileData: {},
  loaders: {
    createProfile: false,
  },
  errors: {
    createProfile: '',
  },
};

export const profileReducer = (
  state: IProfileReducerState = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case profileActions.CREATE_PROFILE:
      console.log(state.loaders.createProfile, 'loader state');
      return {
        ...state,
        loaders: {...state.loaders, createProfile: true},
        errors: {...state.errors, createProfile: ''},
      };
    default:
      return {...state};
  }
};
