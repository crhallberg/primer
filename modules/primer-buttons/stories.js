import React from 'react'
import {storiesOf} from '@storybook/react'
import {addAllStoriesFromMarkdown} from '../../tools/stories-from-markdown'

const stories = storiesOf('Button', module)
addAllStoriesFromMarkdown(stories, require.context('.', true, /\.md$/))

stories
  .add('XXX btn', () => (
    <button className='btn'>Button</button>
  ))
  .add('XXX btn-primary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-primary'>Button</button>
      <button className='btn btn-primary hover'>hover</button>
      <button className='btn btn-primary focus'>focus</button>
      <button className='btn btn-primary selected'>selected</button>
      <button className='btn btn-primary disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-secondary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-secondary'>Button</button>
      <button className='btn btn-secondary hover'>hover</button>
      <button className='btn btn-secondary focus'>focus</button>
      <button className='btn btn-secondary selected'>selected</button>
      <button className='btn btn-secondary disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-danger', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-danger'>Button</button>
      <button className='btn btn-danger hover'>hover</button>
      <button className='btn btn-danger focus'>focus</button>
      <button className='btn btn-danger selected'>selected</button>
      <button className='btn btn-danger disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-outline', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-outline'>Button</button>
      <button className='btn btn-outline hover'>hover</button>
      <button className='btn btn-outline focus'>focus</button>
      <button className='btn btn-outline selected'>selected</button>
      <button className='btn btn-outline disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-blue', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-blue'>Button</button>
      <button className='btn btn-blue hover'>hover</button>
      <button className='btn btn-blue focus'>focus</button>
      <button className='btn btn-blue selected'>selected</button>
      <button className='btn btn-blue disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-purple', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-purple'>Button</button>
      <button className='btn btn-purple hover'>hover</button>
      <button className='btn btn-purple focus'>focus</button>
      <button className='btn btn-purple selected'>selected</button>
      <button className='btn btn-purple disabled'>disabled</button>
    </div>
  ))
  .add('XXX btn-large', () => (
    <div className='f3 p-4'>
      <a className="btn btn-large btn-purple mr-6" href="#url" role="button">Large link button</a>
      <button className="btn btn-large btn-outline-blue" type="button">Large button button</button>
    </div>
  ))
  .add('XXX btn-link', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn-link'>Button</button>
    </div>
  ))
