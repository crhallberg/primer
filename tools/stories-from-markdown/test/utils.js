import {join} from 'path'
import {readFile} from 'fs-extra'
import storiesFromMarkdown from '../index'

const cache = new Map()

export function markdownFixture(name) {
  if (cache.has(name)) {
    return cache.get(name)
  }
  const file = join(__dirname, 'fixtures', name)
  return readFile(file, 'utf8')
    .then(content => {
      const data = {file, content}
      cache.set(name, data)
      return data
    })
}

export function withFixture(name, test) {
  return t => markdownFixture(name)
    .then(({file, content}) => {
      const stories = storiesFromMarkdown(content, file)
      return test(t, {file, content, stories})
    })
}
