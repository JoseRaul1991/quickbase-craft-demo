import { MAX_CHOICES } from '../constants/multiselect';

export const maxChoicesIfDefaultValueProvided = (
  defaultValue: string,
  choices: string[]
) => {
  const isDefaultValueInChoices =
    defaultValue && choices.includes(defaultValue);
  if (!isDefaultValueInChoices && defaultValue) {
    return MAX_CHOICES - 1;
  }

  return MAX_CHOICES;
};
