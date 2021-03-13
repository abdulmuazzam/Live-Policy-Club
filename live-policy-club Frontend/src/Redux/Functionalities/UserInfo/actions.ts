import { SET_USER_VALUE, UserActionType, UserStateType } from "./types";




// User Actions

export const setUserValue = ( 
    userState: UserStateType
    ): UserActionType => {
      return {
        type: SET_USER_VALUE,
        payload: userState ,
      }
    }
  
  
