import {ICreateProfileAction, ICreateProfileActionPayload} from './interface';

const prefix = 'profile/';

export const profileActions = {
  CREATE_PROFILE: `${prefix}CREATE_PROFILE`,
};

export const createProfileAction = (
  profileData: ICreateProfileActionPayload,
): ICreateProfileAction => {
  console.log('actionCall');
  return {
    type: profileActions.CREATE_PROFILE,
    payload: profileData,
  };
};
