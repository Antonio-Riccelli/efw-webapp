import React from 'react'
import { mount, shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Footer />)
    expect(wrap.find('h4').first().text()).toBe('Get social with us')
  })
})
