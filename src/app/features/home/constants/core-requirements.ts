import { environment } from '~env/environment';
import { Requirement } from '../models/requirement';

export const CORE_REQUIREMENTS: Requirement[] = [
  {
    title: 'Add and Remove choices from the list of choices',
    description:
      'In the visual spec provided, the builder adds and removes choices in a textarea element. Individual items are separated by a new line. Feel free to modify this interaction to meet the requirement of being able to add and remove choices.',
  },
  {
    title: 'Rules validations & Notification',
    description:
      'Validate the following rules and notify the builder if there are any validation issues',
    children: [
      {
        title: 'Required fields',
        description: 'The Label field is required',
      },
      {
        title: 'No Duplicates allowed',
        description: 'Duplicates choices are not allowed.',
      },
      {
        title: 'Amount limit',
        description: 'There cannot be more than 50 choices total.',
      },
    ],
  },
  {
    title: 'Handle default value',
    description:
      'If the default value is not one of the choices, it should be added to the list of choices when the field is saved.',
    children: [
      {
        title: '[For Demo]',
        description:
          'You may want the form to keep its values after the form is submitted. This helps demonstrate the prior requirement (that the default value is added)',
      },
    ],
  },
  {
    title: 'Clear Button',
    description:
      'Add a button that allows the builder to clear the form and start fresh',
  },
  {
    title: 'Submit Button',
    description: `The submit button should create a json object and post it to <a target="_blank" class="inline-link" href="${environment.apiUrl}">${environment.apiUrl}</a>. It should also log the post data to the console.`,
  },
];
