import React from "react";
import { shallow } from "enzyme";
import Techniques from "./index";
import Navigation from "../../components/Navigation";
import Description from "./components/Description";
import Stepper from "./components/Stepper";

describe("Techniques", () => {
  const wrapper = shallow(<Techniques />);

  it("Should render Navigation, description and stepper", () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Stepper)).toHaveLength(1);
  });

  it("Should render first technique", () => {
    expect(wrapper.find("Stepper").prop("current")).toEqual(0);
  });

  it("Should pass two techniques", () => {
    expect(wrapper.find("Stepper").prop("techniques").length).toEqual(2);
  });
});
