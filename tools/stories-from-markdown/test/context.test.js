import test from 'ava'
import {mockRequireContext} from './utils'
import {storiesFromRequireContext, addAllStoriesFromMarkdown} from '../index'

test('storiesFromRequireContext() works as expected', t => {
  const req = mockRequireContext(['basic.md'])
  const stories = storiesFromRequireContext(req)
  t.is(stories.length, 2, 'Wrong stories count')
})

test('addAllStoriesFromMarkdown() works as expected', t => {
  const added = []
  const book = {
    add: (title, story) => {
      added.push({title, story})
    }
  }
  const req = mockRequireContext(['basic.md'])
  addAllStoriesFromMarkdown(book, req)
  t.is(added.length, 2, 'Wrong stories count')
})
