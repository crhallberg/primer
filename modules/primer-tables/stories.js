import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Tables', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))
