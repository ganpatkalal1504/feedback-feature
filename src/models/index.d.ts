import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum FeedbackElementEnum {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  QUESTION_ANSWER = "QUESTION_ANSWER",
  SCALE = "SCALE",
  VALUE = "VALUE",
  WORDCLOUD = "WORDCLOUD"
}

type FeedbackElementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeedbackTemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeedbackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerFeedbackElement = {
  readonly id: string;
  readonly type: FeedbackElementEnum | keyof typeof FeedbackElementEnum;
  readonly payload: string;
  readonly template: boolean;
  readonly feedbacktemplateID?: string | null;
  readonly feedbackID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeedbackElement = {
  readonly id: string;
  readonly type: FeedbackElementEnum | keyof typeof FeedbackElementEnum;
  readonly payload: string;
  readonly template: boolean;
  readonly feedbacktemplateID?: string | null;
  readonly feedbackID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FeedbackElement = LazyLoading extends LazyLoadingDisabled ? EagerFeedbackElement : LazyFeedbackElement

export declare const FeedbackElement: (new (init: ModelInit<FeedbackElement, FeedbackElementMetaData>) => FeedbackElement) & {
  copyOf(source: FeedbackElement, mutator: (draft: MutableModel<FeedbackElement, FeedbackElementMetaData>) => MutableModel<FeedbackElement, FeedbackElementMetaData> | void): FeedbackElement;
}

type EagerFeedbackTemplate = {
  readonly id: string;
  readonly title: string;
  readonly code: string;
  readonly FeedbackElements?: (FeedbackElement | null)[] | null;
  readonly userID: string;
  readonly Feedbacks?: (Feedback | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeedbackTemplate = {
  readonly id: string;
  readonly title: string;
  readonly code: string;
  readonly FeedbackElements: AsyncCollection<FeedbackElement>;
  readonly userID: string;
  readonly Feedbacks: AsyncCollection<Feedback>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FeedbackTemplate = LazyLoading extends LazyLoadingDisabled ? EagerFeedbackTemplate : LazyFeedbackTemplate

export declare const FeedbackTemplate: (new (init: ModelInit<FeedbackTemplate, FeedbackTemplateMetaData>) => FeedbackTemplate) & {
  copyOf(source: FeedbackTemplate, mutator: (draft: MutableModel<FeedbackTemplate, FeedbackTemplateMetaData>) => MutableModel<FeedbackTemplate, FeedbackTemplateMetaData> | void): FeedbackTemplate;
}

type EagerFeedback = {
  readonly id: string;
  readonly title: string;
  readonly userID: string;
  readonly FeedbackElements?: (FeedbackElement | null)[] | null;
  readonly feedbacktemplateID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeedback = {
  readonly id: string;
  readonly title: string;
  readonly userID: string;
  readonly FeedbackElements: AsyncCollection<FeedbackElement>;
  readonly feedbacktemplateID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Feedback = LazyLoading extends LazyLoadingDisabled ? EagerFeedback : LazyFeedback

export declare const Feedback: (new (init: ModelInit<Feedback, FeedbackMetaData>) => Feedback) & {
  copyOf(source: Feedback, mutator: (draft: MutableModel<Feedback, FeedbackMetaData>) => MutableModel<Feedback, FeedbackMetaData> | void): Feedback;
}

type EagerUser = {
  readonly id: string;
  readonly cognitoUserID?: string | null;
  readonly Feedbacks?: (FeedbackTemplate | null)[] | null;
  readonly FeedbackTemplates?: (FeedbackTemplate | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly cognitoUserID?: string | null;
  readonly Feedbacks: AsyncCollection<FeedbackTemplate>;
  readonly FeedbackTemplates: AsyncCollection<FeedbackTemplate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}