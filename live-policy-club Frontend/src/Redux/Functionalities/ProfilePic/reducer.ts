import { ProfilePicPayloadType, ProfilePicState, SET_PROFILE_PIC_URL_VALUE } from "./types";

export {}

export const initialProfilePicState: ProfilePicState = {
    isLogin: false
}

export const ProfilePicReducer = (state:ProfilePicState = initialProfilePicState, action: ProfilePicPayloadType):ProfilePicState  => {

    switch(action.type){
        case SET_PROFILE_PIC_URL_VALUE: return action.payload;

        default: return state;
    }


}

