import {renderToStaticMarkup} from 'react-dom/server'
import React from 'react'
import storiesFromMarkdown from '../index'
import test from 'ava'
import {withFixture} from './utils.js'

function basicTest(test) {
  return withFixture('basic.md', (t, {stories}) => test(t, stories))
}

test('Parses stories from markdown', basicTest((t, stories) => {
  t.is(stories.length, 2, 'Wrong number of stories parsed')
}))

test('Inherits titles from previous heading', basicTest((t, stories) => {
  t.is(stories[0].title, 'Block 1')
  t.is(stories[1].title, 'Block 2')
}))

test('Produces React stories with the correct output', basicTest((t, stories) => {
  t.is(typeof stories[0].story, 'function', 'stories[0].story is not a function')
  t.is(renderToStaticMarkup(stories[0].story()), 'This is just text.')
  t.is(renderToStaticMarkup(stories[1].story()), 'This one has <b>bold</b>.')
}))

test('De-dupes story titles', withFixture('dedupe.md', (t, {stories}) => {
  t.is(stories.length, 3, 'Wrong story count')
  t.is(stories[0].title, 'Foo', 'First story title is wrong')
  t.is(stories[1].title, 'Foo (2)', 'Second story title is wrong')
  t.is(stories[2].title, 'Foo bar', 'Third story title is wrong')
}))
