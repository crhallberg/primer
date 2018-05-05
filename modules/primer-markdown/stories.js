import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Markdown', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))

stories
  .add('XXX code', () => (
    <div className="markdown-body">
      <p>
        This is inline <code>code block</code>. This <code>code block has a &lt;br&gt;<br/> in it</code>. <code>When a code block has a long sentence in it, it should wrap the page to a new line</code>. Some people like to see the world burn and put <code>reallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstrings</code> in the code blocks.
      </p>
    </div>
  ))
  .add('XXX pre', () => (
    <div className="markdown-body">
      <pre>
        <code>Really long pre blocks should scroll horizontally when the words are longer than the parent container</code>
      </pre>
    </div>
  ))
