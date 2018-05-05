import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Marketing buttons', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))

stories
  .add('XXX Button colors', () => (
    <div className='p-4'>
      <button className="btn btn-orange mr-6" type="button">Button button</button>
    </div>
  ))
  .add('XXX Outline colors', () => (
    <div className='p-4'>
      <button className="btn btn-outline-orange mr-6" type="button">Button button</button>
      <a className="btn btn-outline-purple mr-6" href="#url" role="button">Link button</a>
      <button className="btn btn-outline-green mr-6" type="button">Button button</button>
    </div>
  ))
  .add('XXX Transparent button', () => (
    <div className="bg-gray-dark p-4 mt-4 mr-6">
      <button className="btn btn-transparent mr-6" type="button">Button button</button>
    </div>
  ))
