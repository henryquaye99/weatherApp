import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});
describe("Weather App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("renders a search box", () => {
    const wrapper = shallow(<App />);
    const app = wrapper.find(".search-box");
    expect(app).toBeDefined();
  });
});

describe("Input Button", () => {
  it("inputs", () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Hello" } });
    expect(input.prop("value")).toBe("");
  });
});
