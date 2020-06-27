/**
 * @jest-environment jsdom
 */
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../client/app';
import LargePhoto from '../client/largePhoto';
import Photo from '../client/photo';

describe('App Component', () => {
  let component;

  beforeAll(() => {
    component = mount(<App />);
  });

  afterAll(() => {
    component.unmount();
  });

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });
});
