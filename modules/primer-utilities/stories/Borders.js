import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../../tools/stories-from-markdown'

const stories = storiesOf('Utilities / Borders', module)
addAllStoriesFromMarkdown(stories, require.context('../docs', true, /borders\.md$/))

stories
  .add('XXX circle', () => (
    <div className='border circle p-3' style={{width: '100px', height: '100px'}}>
      .circle
    </div>
  ))
