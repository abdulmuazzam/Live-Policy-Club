import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {breadcrumsState} from "./Layout/Breadcrums/types"
import { UserStateType } from "./Functionalities/UserInfo/types";
import { UserInfoInitialState } from "./Functionalities/UserInfo/reducer";
import { ProfilePicState } from "./Functionalities/ProfilePic/types";
import { initialProfilePicState } from "./Functionalities/ProfilePic/reducer";


export interface IAppState {
  breadcrumsState: breadcrumsState;
  UserInfo: UserStateType;
  ProfilePicChange: ProfilePicState
}

const initialState: IAppState = {
  breadcrumsState: {
    breadcrumsValue: "",
  },
  UserInfo: UserInfoInitialState,
  ProfilePicChange: initialProfilePicState
  
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;


