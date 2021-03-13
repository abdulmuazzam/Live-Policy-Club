export interface breadcrumsState {
  breadcrumsValue: string;
}

export interface actionPaylodType {
  breadCrumbValue: string;
}

export const SET_BREADCRUMS_VALUE: string = "SET_BREADCRUMS_VALUE";

export interface breadcrumsActionType {
  type: typeof SET_BREADCRUMS_VALUE;
  payload: actionPaylodType;
}



