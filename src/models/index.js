// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FeedbackElementEnum = {
  "MULTIPLE_CHOICE": "MULTIPLE_CHOICE",
  "QUESTION_ANSWER": "QUESTION_ANSWER",
  "SCALE": "SCALE",
  "VALUE": "VALUE",
  "WORDCLOUD": "WORDCLOUD"
};

const { FeedbackElement, FeedbackTemplate, Feedback, User } = initSchema(schema);

export {
  FeedbackElement,
  FeedbackTemplate,
  Feedback,
  User,
  FeedbackElementEnum
};