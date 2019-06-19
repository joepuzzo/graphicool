import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { configureReadme } from 'storybook-readme';
import { themes } from '@storybook/theming';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';

addDecorator(StoryWrapper);

const params = {
  readme: {
    /**
     * Override theme values
     *
     * All theme values https://github.com/tuchk4/storybook-readme/blob/master/packages/storybook-readme/src/styles/githubMarkdownCss.js#L436
     */
    //theme: themes.dark,

    /**
     * Highlightjs code theme
     * Import theme at _.storybook/config.js_.
     * Full list of theme https://highlightjs.org/static/demo/.
     */
    //codeTheme: 'atom-one-dark',
  },
};

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => <div style={{
    marginTop: '2rem',
    marginBottom: '2rem',
    // border: '1px dashed #e5e5e5',
  }}>{children}</div>,

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <div> {children}</div>
  ),

  /**
   * Wrapper for hedaer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  HeaderPreview: ({ children }) => (
    <div>{children}</div>
  ),

  /**
   * Wrapper for footer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  FooterPreview: ({ children }) => <div>{children}</div>,

  /**
   * Header docs in markdown format
   */
  header: '',

  /**
   * Footer docs in markdown format
   */
  footer: '',
});

storiesOf('Introduction', module)
  .addParameters(params)
  .add('Getting Started', Intro);