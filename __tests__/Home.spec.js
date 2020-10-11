import React from "react";
import { configure, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import toJson from 'enzyme-to-json';
// import renderer from "react-test-renderer";

import Home from "../client/components/Home";

configure({ adapter: new Adapter() });

describe("Home", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Home />);
  });

  it('insert first test here', () => {
    //we are using methods from enzyme library so look at the docs
    expect(2 + 2).toEqual(4);
  });
});
