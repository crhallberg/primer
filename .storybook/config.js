import {configure, addDecorator} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import {version} from '../modules/primer/package.json'
import React from 'react'
import '../modules/primer/index.scss'

setOptions({
  name: `Primer v${version}`,
  url: 'http://primer.github.io/',
})

addDecorator(story => (
  <div className='p-4'>
    {story()}
  </div>
))

const contexts = [
  require.context('../modules', true, /stories(\/index)?\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)
