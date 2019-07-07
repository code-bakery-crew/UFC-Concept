import React from 'react'
import { shallow, mount } from 'enzyme'
import Home from './index'
import Navigation from '../../components/Navigation';
import FLetter from './components/FLetter';
import NameTag from './components/NameTag';
import OrganizationSentence from './components/OrganizationSentence';
import ShareIcon from './components/ShareIcon';

describe('Home', () => {
  const wrapper = shallow(<Home />)

  it('Should render Navigation, Two Letters, FLetter, NameTag, OrganizationSentence and ShareIcon components', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1)
    expect(wrapper.find(FLetter)).toHaveLength(1)
    expect(wrapper.find(NameTag)).toHaveLength(1)
    expect(wrapper.find(OrganizationSentence)).toHaveLength(1)
    expect(wrapper.find(ShareIcon)).toHaveLength(1)
  })
})