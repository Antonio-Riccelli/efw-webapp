import React from 'react'
import { mount } from 'enzyme'
import Home from '../index'

describe('Home', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Home />)
    expect(wrap.find('h1').text()).toBe('Hello Elliot for Water')
  })
})
