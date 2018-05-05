import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Blankslate', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))

stories
  .add('XXX blankslate', () => (
    <div className='blankslate'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
  .add('XXX blankslate-narrow', () => (
    <div className='blankslate blankslate-narrow'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
  .add('XXX blankslate-large', () => (
    <div className='blankslate blankslate-large'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
  .add('XXX blankslate-spacious', () => (
    <div className='blankslate blankslate-spacious'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
  .add('XXX blankslate-capped', () => (
    <div className='blankslate blankslate-capped'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
  .add('XXX blankslate-clean-background', () => (
    <div className='blankslate blankslate-clean-background'>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </div>
  ))
