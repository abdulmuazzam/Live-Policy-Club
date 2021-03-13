export {}


// User Types 

export const SET_USER_VALUE: string = "SET_USER_VALUE";




export interface UserStateType {
    id: string;
    username: string;
    email: string;
    bio: string;
    rank: string;
    partyline: string;
    category: string
}


export interface UserActionType {
  type: typeof SET_USER_VALUE;
  payload: UserStateType;
}