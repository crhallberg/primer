import {join} from 'path'
import {readFile} from 'fs-extra'
import {renderToStaticMarkup} from 'react-dom/server'
import React from 'react'
import storiesFromMarkdown from '../index'
import test from 'ava'

function markdownFixture(name) {
  const file = join(__dirname, 'fixtures', name)
  return readFile(file, 'utf8')
    .then(content => ({file, content}))
}

test('Parses stories from markdown', t => {
  return markdownFixture('basic.md')
    .then(({file, content}) => {
      const stories = storiesFromMarkdown(content, file)
      t.is(stories.length, 2, 'Wrong number of stories parsed')
    })
})
