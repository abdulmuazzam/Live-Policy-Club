import {
  SET_BREADCRUMS_VALUE,
  breadcrumsState,
  breadcrumsActionType,
} from "./types";
import _ from "lodash";

const breadcrumsInitialState: breadcrumsState = {
  breadcrumsValue: "",
};

const breadcrumsReducer = (
  state: breadcrumsState = breadcrumsInitialState,
  action: breadcrumsActionType
): breadcrumsState => {
  switch (action.type) {
    case SET_BREADCRUMS_VALUE: {
      console.log(action);
      return {
        ...breadcrumsInitialState,
        breadcrumsValue: action.payload.breadCrumbValue,
      };
    }
    default: {
      return state;
    }
  }
};
export default breadcrumsReducer;

