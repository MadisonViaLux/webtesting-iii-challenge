// Test away
import React from "react";
import { render } from "react-testing-library";
import Dashboard from './Dashboard'


describe('Dashboard', () => {
    it('renders correctly', () => {
        const wrapper = render.create(<Dashboard />);
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})