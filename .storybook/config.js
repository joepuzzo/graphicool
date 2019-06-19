import { configure, addParameter, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { themes } from '@storybook/theming';

// NEW 
import { addReadme } from 'storybook-readme';

// addParameters({
//   options: {
//     //theme: themes.dark,
//   },
// });

import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

setOptions({
  name: 'Graphicool',
  url: 'git+https://github.com/joepuzzo/graphicool.git',
  showAddonPanel: false,
  addonPanelInRight: false,
});


// NEW
addDecorator(addReadme);

const loadStories = () => {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
