import { breadcrumsActionType, SET_BREADCRUMS_VALUE} from "./types";

export const changeBreadcrumsValue = (
  breadCrumbValue: string
): breadcrumsActionType => {
  return {
    type: SET_BREADCRUMS_VALUE,
    payload: { breadCrumbValue },
  };
};


