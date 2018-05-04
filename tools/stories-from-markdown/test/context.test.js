import test from 'ava'
import {mockRequireContext} from './utils'
import {requireContextHelper} from '../index'

test('requireContextHelper() works as expected', t => {
  const req = mockRequireContext(['basic.md'])
  const stories = requireContextHelper(req)
  t.is(stories.length, 2, 'Wrong stories count')
})
