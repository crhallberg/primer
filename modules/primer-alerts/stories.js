import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Flash alerts', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))

stories
  .add('XXX/flash', () => (
    <div className='p-4'>
      <div className='flash'>
        flash
      </div>
    </div>
  ))
  .add('XXX/flash-warn', () => (
    <div className='p-4'>
      <div className='flash flash-warn'>
        flash-warn
      </div>
    </div>
  ))
  .add('XXX/flash-error', () => (
    <div className='p-4'>
      <div className='flash flash-error'>
        flash-error
      </div>
    </div>
  ))
  .add('XXX/flash-success', () => (
    <div className='p-4'>
      <div className='flash flash-success'>
        flash-success
      </div>
    </div>
  ))
  .add('XXX/flash with action button', () => (
    <div className='p-4'>
      <div className="flash">
        <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
        Flash message with action here.
      </div>
    </div>
  ))
  .add('XXX/flash-full', () => (
    <div className='p-4'>
      <div className="container-lg">
        <div className="flash flash-full">
          Full width flash message.
        </div>
      </div>
    </div>
  ))
