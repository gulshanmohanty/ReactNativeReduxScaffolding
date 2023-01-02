// createprofileaction interface start
export interface ICreateProfileAction {
  type: string;
  payload: ICreateProfileActionPayload;
}
export interface ICreateProfileActionPayload {
  payload: IProfileData;
}
export interface IProfileData {
  email?: string;
  name?: string;
  mobile?: string;
}
export interface IProfileReducerState {
  profileData?: IProfileData;
  loaders: {
    createProfile: boolean;
  };
  errors: {
    createProfile: string;
  };
}
