import React from 'react';
import App from './App';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('has a user button', () => {
   expect(shallow(<App />).find('Button.userButton').exists()).toBe(true)
})

it('has an admin button', () => {
   expect(shallow(<App />).find('Button.adminButton').exists()).toBe(true)
})

// it('has an admin button')

