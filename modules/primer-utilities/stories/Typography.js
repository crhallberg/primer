import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../../tools/stories-from-markdown'

const stories = storiesOf('Utilities / Typography', module)
addAllStoriesFromMarkdown(stories, require.context('../docs', true, /typography\.md$/))

stories
  .add('XXX h1-h6', () => (
    <div>
      <h1 className='h1'>h1</h1>
      <h1 className='h2'>h2</h1>
      <h1 className='h3'>h3</h1>
      <h1 className='h4'>h4</h1>
      <h1 className='h5'>h5</h1>
      <h1 className='h6'>h6</h1>
    </div>
  ))
  .add('XXX f1-f6', () => (
    <div>
      <h1 className='f1'>f1</h1>
      <h1 className='f2'>f2</h1>
      <h1 className='f3'>f3</h1>
      <h1 className='f4'>f4</h1>
      <h1 className='f5'>f5</h1>
      <h1 className='f6'>f6</h1>
    </div>
  ))
  .add('XXX f light', () => (
    <div>
      <h1 className='f00-light'>f00-light</h1>
      <h1 className='f0-light'>f0-light</h1>
      <h1 className='f1-light'>f1-light</h1>
      <h1 className='f2-light'>f2-light</h1>
      <h1 className='f3-light'>f3-light</h1>
    </div>
  ))
  .add('XXX line-height', () =>(
    <div>
      <p className='lh-default'>
        lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default lh-default

      </p>
      <p className='lh-condensed'>
        lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed lh-condensed
      </p>
      <p className='lh-condensed-ultra'>
        lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra lh-condensed-ultra
      </p>
    </div>
  ))
  .add('XXX typographic styles', () => (
    <div>
      <h3 className='text-normal'>text-normal</h3>
      <p className='text-bold'>text-bold</p>
      <p className='text-uppercase'>text-uppercase</p>
      <p className='no-wrap'>no-wrap</p>
      <p className='ws-normal'>ws-normal</p>
      <p className='wb-break-all'>wb-break-all</p>
      <p className='no-underline'>no-underline</p>
      <p className='text-emphasized'>text-emphasized</p>
      <p className='text-small'>text-small</p>
      <p className='lead'>lead</p>
    </div>
  ))
  .add('XXX text alignment', () => (
    <div>
      <p className='text-left'>text-left</p>
      <p className='text-center'>text-center</p>
      <p className='text-right'>text-right</p>
    </div>
  ))
  .add('XXX responsive text alignment', () => (
    <div>
      <p className='text-left text-sm-center text-lg-right'>Left in a small viewport, centered in mid-sized viewports, and right aligned in larger viewports</p>
    </div>
  ))
  .add('XXX list-style-none', () => (
    <div>
      <ul className='list-style-none'>
        <li>list-style-none</li>
        <li>list-style-none</li>
        <li>list-style-none</li>
      </ul>
    </div>
  ))
  .add('XXX text shadows', () => (
    <div>
    <div className='bg-purple p-5'>
      <h3 className='text-white text-shadow-dark'>.text-shadow-dark helps white text stand out on dark or photographic backgrounds</h3>
    </div>
    <div className='bg-yellow p-5'>
      <h3 className='text-shadow-light'>.text-shadow-light creates an embossed effect for dark text</h3>
    </div>
    </div>
  ))
