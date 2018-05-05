import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Navigation', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))
