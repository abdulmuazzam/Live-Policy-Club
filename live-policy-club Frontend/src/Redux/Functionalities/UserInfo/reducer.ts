import {  UserStateType,
    UserActionType,
    SET_USER_VALUE} from "./types"



export const UserInfoInitialState: UserStateType = {
    id: "",
    username: "",
    email: "",
    bio: "",
    rank: "",
    partyline: "",
    category: ""
};


export const UserInfoReducer = (state: UserStateType = UserInfoInitialState, action: UserActionType): UserStateType => {
    console.log(action.payload);
    
    switch(action.type){

      case SET_USER_VALUE: return action.payload




      default: {
        return state;
      }

    }


};
