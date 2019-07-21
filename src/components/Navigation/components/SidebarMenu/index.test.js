import React from "react";
import { shallow } from "enzyme";

import SidebarMenu from "./index";
import Home from "../../../../scenes/Home"

describe("SidebarMenu", () => {
  const wrapper = shallow(
    <SidebarMenu onMenuClosed={() => console.log("menu closed")} />
  );

  it("Should render Two sidebar panels", () => {
    expect(wrapper.find('SidebarPanel')).toHaveLength(2);
  });
});
