/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFeedbackElement: OnCreateFeedbackElementSubscription;
  onUpdateFeedbackElement: OnUpdateFeedbackElementSubscription;
  onDeleteFeedbackElement: OnDeleteFeedbackElementSubscription;
  onCreateFeedbackTemplate: OnCreateFeedbackTemplateSubscription;
  onUpdateFeedbackTemplate: OnUpdateFeedbackTemplateSubscription;
  onDeleteFeedbackTemplate: OnDeleteFeedbackTemplateSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateFeedback: OnCreateFeedbackSubscription;
  onUpdateFeedback: OnUpdateFeedbackSubscription;
  onDeleteFeedback: OnDeleteFeedbackSubscription;
};

export type CreateFeedbackElementInput = {
  id?: string | null;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  _version?: number | null;
};

export enum FeedbackElementEnum {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  QUESTION_ANSWER = "QUESTION_ANSWER",
  SCALE = "SCALE",
  VALUE = "VALUE",
  WORDCLOUD = "WORDCLOUD"
}

export type ModelFeedbackElementConditionInput = {
  type?: ModelFeedbackElementEnumInput | null;
  payload?: ModelStringInput | null;
  template?: ModelBooleanInput | null;
  feedbacktemplateID?: ModelIDInput | null;
  feedbackID?: ModelIDInput | null;
  and?: Array<ModelFeedbackElementConditionInput | null> | null;
  or?: Array<ModelFeedbackElementConditionInput | null> | null;
  not?: ModelFeedbackElementConditionInput | null;
};

export type ModelFeedbackElementEnumInput = {
  eq?: FeedbackElementEnum | null;
  ne?: FeedbackElementEnum | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type FeedbackElement = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFeedbackElementInput = {
  id: string;
  type?: FeedbackElementEnum | null;
  payload?: string | null;
  template?: boolean | null;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  _version?: number | null;
};

export type DeleteFeedbackElementInput = {
  id: string;
  _version?: number | null;
};

export type CreateFeedbackTemplateInput = {
  id?: string | null;
  title: string;
  code: string;
  userID: string;
  _version?: number | null;
};

export type ModelFeedbackTemplateConditionInput = {
  title?: ModelStringInput | null;
  code?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelFeedbackTemplateConditionInput | null> | null;
  or?: Array<ModelFeedbackTemplateConditionInput | null> | null;
  not?: ModelFeedbackTemplateConditionInput | null;
};

export type FeedbackTemplate = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: ModelFeedbackElementConnection | null;
  userID: string;
  Feedbacks?: ModelFeedbackConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelFeedbackElementConnection = {
  __typename: "ModelFeedbackElementConnection";
  items: Array<FeedbackElement | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection";
  items: Array<Feedback | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Feedback = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: ModelFeedbackElementConnection | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFeedbackTemplateInput = {
  id: string;
  title?: string | null;
  code?: string | null;
  userID?: string | null;
  _version?: number | null;
};

export type DeleteFeedbackTemplateInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  cognitoUserID?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  cognitoUserID?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: ModelFeedbackTemplateConnection | null;
  FeedbackTemplates?: ModelFeedbackTemplateConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelFeedbackTemplateConnection = {
  __typename: "ModelFeedbackTemplateConnection";
  items: Array<FeedbackTemplate | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateUserInput = {
  id: string;
  cognitoUserID?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateFeedbackInput = {
  id?: string | null;
  title: string;
  userID: string;
  feedbacktemplateID: string;
  _version?: number | null;
};

export type ModelFeedbackConditionInput = {
  title?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  feedbacktemplateID?: ModelIDInput | null;
  and?: Array<ModelFeedbackConditionInput | null> | null;
  or?: Array<ModelFeedbackConditionInput | null> | null;
  not?: ModelFeedbackConditionInput | null;
};

export type UpdateFeedbackInput = {
  id: string;
  title?: string | null;
  userID?: string | null;
  feedbacktemplateID?: string | null;
  _version?: number | null;
};

export type DeleteFeedbackInput = {
  id: string;
  _version?: number | null;
};

export type ModelFeedbackElementFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelFeedbackElementEnumInput | null;
  payload?: ModelStringInput | null;
  template?: ModelBooleanInput | null;
  feedbacktemplateID?: ModelIDInput | null;
  feedbackID?: ModelIDInput | null;
  and?: Array<ModelFeedbackElementFilterInput | null> | null;
  or?: Array<ModelFeedbackElementFilterInput | null> | null;
  not?: ModelFeedbackElementFilterInput | null;
};

export type ModelFeedbackTemplateFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  code?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelFeedbackTemplateFilterInput | null> | null;
  or?: Array<ModelFeedbackTemplateFilterInput | null> | null;
  not?: ModelFeedbackTemplateFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  cognitoUserID?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  feedbacktemplateID?: ModelIDInput | null;
  and?: Array<ModelFeedbackFilterInput | null> | null;
  or?: Array<ModelFeedbackFilterInput | null> | null;
  not?: ModelFeedbackFilterInput | null;
};

export type ModelSubscriptionFeedbackElementFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  type?: ModelSubscriptionStringInput | null;
  payload?: ModelSubscriptionStringInput | null;
  template?: ModelSubscriptionBooleanInput | null;
  feedbacktemplateID?: ModelSubscriptionIDInput | null;
  feedbackID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFeedbackElementFilterInput | null> | null;
  or?: Array<ModelSubscriptionFeedbackElementFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionFeedbackTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  code?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFeedbackTemplateFilterInput | null> | null;
  or?: Array<ModelSubscriptionFeedbackTemplateFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  cognitoUserID?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionFeedbackFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  feedbacktemplateID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFeedbackFilterInput | null> | null;
  or?: Array<ModelSubscriptionFeedbackFilterInput | null> | null;
};

export type CreateFeedbackElementMutation = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFeedbackElementMutation = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFeedbackElementMutation = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFeedbackTemplateMutation = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateFeedbackTemplateMutation = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type DeleteFeedbackTemplateMutation = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetFeedbackElementQuery = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFeedbackElementsQuery = {
  __typename: "ModelFeedbackElementConnection";
  items: Array<{
    __typename: "FeedbackElement";
    id: string;
    type: FeedbackElementEnum;
    payload: string;
    template: boolean;
    feedbacktemplateID?: string | null;
    feedbackID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFeedbackElementsQuery = {
  __typename: "ModelFeedbackElementConnection";
  items: Array<{
    __typename: "FeedbackElement";
    id: string;
    type: FeedbackElementEnum;
    payload: string;
    template: boolean;
    feedbacktemplateID?: string | null;
    feedbackID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFeedbackTemplateQuery = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ListFeedbackTemplatesQuery = {
  __typename: "ModelFeedbackTemplateConnection";
  items: Array<{
    __typename: "FeedbackTemplate";
    id: string;
    title: string;
    code: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFeedbackTemplatesQuery = {
  __typename: "ModelFeedbackTemplateConnection";
  items: Array<{
    __typename: "FeedbackTemplate";
    id: string;
    title: string;
    code: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    cognitoUserID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    cognitoUserID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFeedbackQuery = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items: Array<{
    __typename: "Feedback";
    id: string;
    title: string;
    userID: string;
    feedbacktemplateID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items: Array<{
    __typename: "Feedback";
    id: string;
    title: string;
    userID: string;
    feedbacktemplateID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateFeedbackElementSubscription = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFeedbackElementSubscription = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFeedbackElementSubscription = {
  __typename: "FeedbackElement";
  id: string;
  type: FeedbackElementEnum;
  payload: string;
  template: boolean;
  feedbacktemplateID?: string | null;
  feedbackID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFeedbackTemplateSubscription = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnUpdateFeedbackTemplateSubscription = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnDeleteFeedbackTemplateSubscription = {
  __typename: "FeedbackTemplate";
  id: string;
  title: string;
  code: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  userID: string;
  Feedbacks?: {
    __typename: "ModelFeedbackConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  cognitoUserID?: string | null;
  Feedbacks?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  FeedbackTemplates?: {
    __typename: "ModelFeedbackTemplateConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  title: string;
  userID: string;
  FeedbackElements?: {
    __typename: "ModelFeedbackElementConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  feedbacktemplateID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFeedbackElement(
    input: CreateFeedbackElementInput,
    condition?: ModelFeedbackElementConditionInput
  ): Promise<CreateFeedbackElementMutation> {
    const statement = `mutation CreateFeedbackElement($input: CreateFeedbackElementInput!, $condition: ModelFeedbackElementConditionInput) {
        createFeedbackElement(input: $input, condition: $condition) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackElementMutation>response.data.createFeedbackElement;
  }
  async UpdateFeedbackElement(
    input: UpdateFeedbackElementInput,
    condition?: ModelFeedbackElementConditionInput
  ): Promise<UpdateFeedbackElementMutation> {
    const statement = `mutation UpdateFeedbackElement($input: UpdateFeedbackElementInput!, $condition: ModelFeedbackElementConditionInput) {
        updateFeedbackElement(input: $input, condition: $condition) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackElementMutation>response.data.updateFeedbackElement;
  }
  async DeleteFeedbackElement(
    input: DeleteFeedbackElementInput,
    condition?: ModelFeedbackElementConditionInput
  ): Promise<DeleteFeedbackElementMutation> {
    const statement = `mutation DeleteFeedbackElement($input: DeleteFeedbackElementInput!, $condition: ModelFeedbackElementConditionInput) {
        deleteFeedbackElement(input: $input, condition: $condition) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackElementMutation>response.data.deleteFeedbackElement;
  }
  async CreateFeedbackTemplate(
    input: CreateFeedbackTemplateInput,
    condition?: ModelFeedbackTemplateConditionInput
  ): Promise<CreateFeedbackTemplateMutation> {
    const statement = `mutation CreateFeedbackTemplate($input: CreateFeedbackTemplateInput!, $condition: ModelFeedbackTemplateConditionInput) {
        createFeedbackTemplate(input: $input, condition: $condition) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackTemplateMutation>response.data.createFeedbackTemplate;
  }
  async UpdateFeedbackTemplate(
    input: UpdateFeedbackTemplateInput,
    condition?: ModelFeedbackTemplateConditionInput
  ): Promise<UpdateFeedbackTemplateMutation> {
    const statement = `mutation UpdateFeedbackTemplate($input: UpdateFeedbackTemplateInput!, $condition: ModelFeedbackTemplateConditionInput) {
        updateFeedbackTemplate(input: $input, condition: $condition) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackTemplateMutation>response.data.updateFeedbackTemplate;
  }
  async DeleteFeedbackTemplate(
    input: DeleteFeedbackTemplateInput,
    condition?: ModelFeedbackTemplateConditionInput
  ): Promise<DeleteFeedbackTemplateMutation> {
    const statement = `mutation DeleteFeedbackTemplate($input: DeleteFeedbackTemplateInput!, $condition: ModelFeedbackTemplateConditionInput) {
        deleteFeedbackTemplate(input: $input, condition: $condition) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackTemplateMutation>response.data.deleteFeedbackTemplate;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateFeedback(
    input: CreateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<CreateFeedbackMutation> {
    const statement = `mutation CreateFeedback($input: CreateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        createFeedback(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackMutation>response.data.createFeedback;
  }
  async UpdateFeedback(
    input: UpdateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<UpdateFeedbackMutation> {
    const statement = `mutation UpdateFeedback($input: UpdateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        updateFeedback(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackMutation>response.data.updateFeedback;
  }
  async DeleteFeedback(
    input: DeleteFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<DeleteFeedbackMutation> {
    const statement = `mutation DeleteFeedback($input: DeleteFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        deleteFeedback(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackMutation>response.data.deleteFeedback;
  }
  async GetFeedbackElement(id: string): Promise<GetFeedbackElementQuery> {
    const statement = `query GetFeedbackElement($id: ID!) {
        getFeedbackElement(id: $id) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackElementQuery>response.data.getFeedbackElement;
  }
  async ListFeedbackElements(
    filter?: ModelFeedbackElementFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbackElementsQuery> {
    const statement = `query ListFeedbackElements($filter: ModelFeedbackElementFilterInput, $limit: Int, $nextToken: String) {
        listFeedbackElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            payload
            template
            feedbacktemplateID
            feedbackID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbackElementsQuery>response.data.listFeedbackElements;
  }
  async SyncFeedbackElements(
    filter?: ModelFeedbackElementFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFeedbackElementsQuery> {
    const statement = `query SyncFeedbackElements($filter: ModelFeedbackElementFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFeedbackElements(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            type
            payload
            template
            feedbacktemplateID
            feedbackID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFeedbackElementsQuery>response.data.syncFeedbackElements;
  }
  async GetFeedbackTemplate(id: string): Promise<GetFeedbackTemplateQuery> {
    const statement = `query GetFeedbackTemplate($id: ID!) {
        getFeedbackTemplate(id: $id) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackTemplateQuery>response.data.getFeedbackTemplate;
  }
  async ListFeedbackTemplates(
    filter?: ModelFeedbackTemplateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbackTemplatesQuery> {
    const statement = `query ListFeedbackTemplates($filter: ModelFeedbackTemplateFilterInput, $limit: Int, $nextToken: String) {
        listFeedbackTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            code
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbackTemplatesQuery>response.data.listFeedbackTemplates;
  }
  async SyncFeedbackTemplates(
    filter?: ModelFeedbackTemplateFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFeedbackTemplatesQuery> {
    const statement = `query SyncFeedbackTemplates($filter: ModelFeedbackTemplateFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFeedbackTemplates(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            code
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFeedbackTemplatesQuery>response.data.syncFeedbackTemplates;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            cognitoUserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            cognitoUserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async GetFeedback(id: string): Promise<GetFeedbackQuery> {
    const statement = `query GetFeedback($id: ID!) {
        getFeedback(id: $id) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackQuery>response.data.getFeedback;
  }
  async ListFeedbacks(
    filter?: ModelFeedbackFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbacksQuery> {
    const statement = `query ListFeedbacks($filter: ModelFeedbackFilterInput, $limit: Int, $nextToken: String) {
        listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            userID
            feedbacktemplateID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbacksQuery>response.data.listFeedbacks;
  }
  async SyncFeedbacks(
    filter?: ModelFeedbackFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFeedbacksQuery> {
    const statement = `query SyncFeedbacks($filter: ModelFeedbackFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            userID
            feedbacktemplateID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFeedbacksQuery>response.data.syncFeedbacks;
  }
  OnCreateFeedbackElementListener(
    filter?: ModelSubscriptionFeedbackElementFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateFeedbackElement">
    >
  > {
    const statement = `subscription OnCreateFeedbackElement($filter: ModelSubscriptionFeedbackElementFilterInput) {
        onCreateFeedbackElement(filter: $filter) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateFeedbackElement">
      >
    >;
  }

  OnUpdateFeedbackElementListener(
    filter?: ModelSubscriptionFeedbackElementFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateFeedbackElement">
    >
  > {
    const statement = `subscription OnUpdateFeedbackElement($filter: ModelSubscriptionFeedbackElementFilterInput) {
        onUpdateFeedbackElement(filter: $filter) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateFeedbackElement">
      >
    >;
  }

  OnDeleteFeedbackElementListener(
    filter?: ModelSubscriptionFeedbackElementFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteFeedbackElement">
    >
  > {
    const statement = `subscription OnDeleteFeedbackElement($filter: ModelSubscriptionFeedbackElementFilterInput) {
        onDeleteFeedbackElement(filter: $filter) {
          __typename
          id
          type
          payload
          template
          feedbacktemplateID
          feedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteFeedbackElement">
      >
    >;
  }

  OnCreateFeedbackTemplateListener(
    filter?: ModelSubscriptionFeedbackTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateFeedbackTemplate">
    >
  > {
    const statement = `subscription OnCreateFeedbackTemplate($filter: ModelSubscriptionFeedbackTemplateFilterInput, $owner: String) {
        onCreateFeedbackTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateFeedbackTemplate">
      >
    >;
  }

  OnUpdateFeedbackTemplateListener(
    filter?: ModelSubscriptionFeedbackTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateFeedbackTemplate">
    >
  > {
    const statement = `subscription OnUpdateFeedbackTemplate($filter: ModelSubscriptionFeedbackTemplateFilterInput, $owner: String) {
        onUpdateFeedbackTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateFeedbackTemplate">
      >
    >;
  }

  OnDeleteFeedbackTemplateListener(
    filter?: ModelSubscriptionFeedbackTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteFeedbackTemplate">
    >
  > {
    const statement = `subscription OnDeleteFeedbackTemplate($filter: ModelSubscriptionFeedbackTemplateFilterInput, $owner: String) {
        onDeleteFeedbackTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          title
          code
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          userID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteFeedbackTemplate">
      >
    >;
  }

  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          cognitoUserID
          Feedbacks {
            __typename
            nextToken
            startedAt
          }
          FeedbackTemplates {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateFeedbackListener(
    filter?: ModelSubscriptionFeedbackFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFeedback">>
  > {
    const statement = `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
        onCreateFeedback(filter: $filter) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFeedback">>
    >;
  }

  OnUpdateFeedbackListener(
    filter?: ModelSubscriptionFeedbackFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFeedback">>
  > {
    const statement = `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
        onUpdateFeedback(filter: $filter) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFeedback">>
    >;
  }

  OnDeleteFeedbackListener(
    filter?: ModelSubscriptionFeedbackFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFeedback">>
  > {
    const statement = `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
        onDeleteFeedback(filter: $filter) {
          __typename
          id
          title
          userID
          FeedbackElements {
            __typename
            nextToken
            startedAt
          }
          feedbacktemplateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFeedback">>
    >;
  }
}
