import React from "react";
import { shallow } from "enzyme";

import SidebarPanel from "./index";

describe("SidebarPanel", () => {
  const wrapper = shallow(
    <SidebarPanel menuOptions={[
      { value: 'first', link: '/aaa' },
      { value: 'second', link: '/bbb' }
    ]}/>
  );

  it("Should render two menu options", () => {
    expect(wrapper.find(".menuOption")).toHaveLength(2);
  });
});
