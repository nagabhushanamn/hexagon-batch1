
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../src/components/Header';
import { shallow } from 'enzyme';


function setup() {
    const props = {
        addTodo: expect.createSpy()
    }
    return shallow(<Header {...props} />)
}

describe('components', () => {
    describe('Enzyme Header Test', () => {
        it('should render correctly', () => {
            const wrapper = setup();
            expect(wrapper.find('header').length).toBe(1);
        });
    })
});
