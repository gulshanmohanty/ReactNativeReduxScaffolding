import {IIncreaseNumberAction} from './interface';

const prefix = 'profile/';

export const profileActions = {
  INCREASE_NUMBER: `${prefix}INCREASE_NUMBER`,
};

export const increaseNumberAction = (
  numberData: number,
): IIncreaseNumberAction => {
  return {
    type: profileActions.INCREASE_NUMBER,
    payload: numberData,
  };
};
