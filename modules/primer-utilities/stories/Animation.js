import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../../tools/stories-from-markdown'

const stories = storiesOf('Utilities / Animation', module)
addAllStoriesFromMarkdown(stories, require.context('../docs', true, /animations\.md$/))

stories
  .add('XXX hover-grow', () => (
    <div className='Box hover-grow p-4'>
      .hover-grow
    </div>
  ))
