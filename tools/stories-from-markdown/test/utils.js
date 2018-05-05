import {join} from 'path'
import {readFile, readFileSync} from 'fs-extra'
import storiesFromMarkdown from '../index'

const cache = new Map()

function getFixturePath(name) {
  return join(__dirname, 'fixtures', name)
}

export function markdownFixture(name) {
  if (cache.has(name)) {
    return cache.get(name)
  }
  const file = getFixturePath(name)
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

export function mockRequire(fixtures) {
  return {
    context: () => mockRequireContext(fixtures)
  }
}

export function mockRequireContext(fixtures) {
  const req = file => {
    if (cache.has(file)) {
      return cache.get(file).content
    } else {
      const content = readFileSync(file, 'utf8')
      cache.set(file, {file, content})
      return content
    }
  }
  req.keys = () => fixtures.map(getFixturePath)
  return req
}
