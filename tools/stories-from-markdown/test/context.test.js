import test from 'ava'
import {mockRequire, mockRequireContext} from './utils'
import {storiesFromRequireContext, addAllStoriesFromMarkdown} from '../index'

test('storiesFromRequireContext() works as expected', t => {
  const context = mockRequireContext(['basic.md'])
  const stories = storiesFromRequireContext(context)
  t.is(stories.length, 2, 'Wrong stories count')
})

test('addAllStoriesFromMarkdown() works as expected', t => {
  const added = []
  const book = {
    add: (title, story) => {
      added.push({title, story})
    }
  }
  const context = mockRequireContext(['basic.md'])
  addAllStoriesFromMarkdown(book, context)
  t.is(added.length, 2, 'Wrong stories count')
})
