import React from "react";
import { shallow } from "enzyme";

import SidebarMenu from "./index";
import Home from "../../../../scenes/Home"

describe("SidebarMenu", () => {
  const wrapper = shallow(
    <SidebarMenu onMenuClosed={() => console.log("menu closed")} />
  );

  it("Should render Close icon and image", () => {
    expect(wrapper.find(".Close")).toHaveLength(1);
    expect(wrapper.find(".LogoImage")).toHaveLength(1);
  });

  it("Should render sub-pages and shop", () => {
    expect(wrapper.find(".menuOption")).toHaveLength(4)
    expect(wrapper.find(".shop")).toHaveLength(1)
  })
});
