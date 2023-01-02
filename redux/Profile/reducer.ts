import {profileActions} from './action';
import {IProfileReducerState} from './interface';

export const initialState = {
  numberData: 0,
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
    case profileActions.INCREASE_NUMBER:
      // console.log(
      //   state.loaders.createProfile,
      //   'loader state',
      //   action.payload,
      //   '---',
      //   state,
      // );
      return {
        ...state,
        numberData: action.payload,
        loaders: {
          ...state.loaders,
          createProfile: !state.loaders.createProfile,
        },
        errors: {...state.errors, createProfile: ''},
      };
    default:
      return {...state};
  }
};
