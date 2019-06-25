import React from 'react';
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import Home from "./scenes/Home";
import Techniques from "./scenes/Techniques";
import Fighter from "./scenes/Fighter";
import DailySummary from "./scenes/DailySummary";
import Videos from "./scenes/Videos";
import Error404 from "./scenes/Error404";

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />)

  it('Should render App component', () => {
    expect(wrapper.length).toBe(1)
  })

  it('Should redirect to 404 from invalid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Error404)).toHaveLength(1);
  });

  it('Initial path should render Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Error404)).toHaveLength(0);
  });

  it('/techniques path should render Techniques component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/techniques' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Techniques)).toHaveLength(1);
  });

  it('/fighters/:id path should render Fighter component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/fighters/:id' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Fighter)).toHaveLength(1);
  });

  it('/daily-summary path should render DailySummary component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/daily-summary' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(DailySummary)).toHaveLength(1);
  });

  it('/videos path should render Videos component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/videos' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Videos)).toHaveLength(1);
  });
})
