// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};


//.storybook/preview.js

import { muiTheme } from 'storybook-addon-material-ui';

export const decorators = [
	muiTheme()
];