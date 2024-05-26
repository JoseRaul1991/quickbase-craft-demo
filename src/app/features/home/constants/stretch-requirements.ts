import { Requirement } from '../models/requirement';

export const STRETCH_REQUIREMENTS: Requirement[] = [
  {
    title: 'Unit tests',
    description:
      'Add some unit tests using Jest, React testing library or similar',
  },
  {
    title: 'UI Responsive',
    description:
      'Allow the form to be responsive and work on mobile devices in addition to desktop.',
  },
  {
    title: 'Persist form data',
    description:
      'Help the user out by populating the form with the input they were working on if they accidentally close the browser.',
  },
  {
    title: 'Client-side validation for choice lenght <= 40 characters',
    description:
      'If a user enters the word that is longer than 40 characters, the characters above 40 would be highlighted in red.',
  },
  {
    title: 'Submit Button (Loading Indicator)',
    description: `Refactor the button component such that it could be used by other developers and maintain the same style and behavior.`,
  },
];
