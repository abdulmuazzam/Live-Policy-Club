

export const SET_PROFILE_PIC_URL_VALUE: string = "SET_PROFILE_PIC_URL_VALUE";

export interface ProfilePicState {
    isLogin: boolean
}

export interface ProfilePicPayloadType{
    type: typeof SET_PROFILE_PIC_URL_VALUE,
    payload: ProfilePicState
}

