import { combineReducers } from "redux";
import { ProfilePicReducer } from "./Functionalities/ProfilePic/reducer";
import { UserInfoReducer } from "./Functionalities/UserInfo/reducer";
import breadcrumsReducer from "./Layout/Breadcrums/reducer";
const rootReducer = combineReducers({
  breadcrumsState: breadcrumsReducer,
  UserInfoState: UserInfoReducer,
  ProfilePicState: ProfilePicReducer
});
export default rootReducer;
