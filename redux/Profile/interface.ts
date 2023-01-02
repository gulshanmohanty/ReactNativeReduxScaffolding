// createprofileaction interface start
export interface IIncreaseNumberAction {
  type: string;
  payload: number;
}

export interface IProfileReducerState {
  numberData?: number;
  loaders: {
    createProfile: boolean;
  };
  errors: {
    createProfile: string;
  };
}
