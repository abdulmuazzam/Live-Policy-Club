import { ProfilePicPayloadType, ProfilePicState, SET_PROFILE_PIC_URL_VALUE } from "./types"




export const changeProfilePic = (isLogin: boolean):ProfilePicPayloadType  => {

    return {
        type: SET_PROFILE_PIC_URL_VALUE,
        payload: {isLogin}
    }
    
}
