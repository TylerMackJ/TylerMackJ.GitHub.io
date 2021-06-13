
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  
  page: {
    title: {
      base: 'TylerMackJ.GitHub.io'        // --> the base title of your doc pages
    }
  },

  dest: {
    html: 'dist',
    assets: 'dist',
  },

  misc: {
    github: {
      user: 'tylermackj',
      repo: 'TylerMackJ.GitHub.io',
      action: 'Star',
      count: false,
      large: false,
      standardIcon: true,
    },
  },
  
});
