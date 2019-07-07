import React from 'react'
import { shallow } from 'enzyme'

import Navigation from './index'
import HomeComponent from './components/HomeComponent';
import SearchComponent from './components/SearchComponent';
import SidebarMenu from './components/SidebarMenu'

describe('Navigation', () => {
  const wrapper = shallow(<Navigation />)

  it('Should render HomeComponent and SearchComponent', () => {
    expect(wrapper.find(HomeComponent)).toHaveLength(1)
    expect(wrapper.find(SearchComponent)).toHaveLength(1)
    expect(wrapper.find(SidebarMenu)).toHaveLength(1)
  })
})