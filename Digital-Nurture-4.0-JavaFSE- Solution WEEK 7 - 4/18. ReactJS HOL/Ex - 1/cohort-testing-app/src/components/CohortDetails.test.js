import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
  // Test 1: Component renders without crashing
  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={CohortData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: Props are correctly initialized
  test('should initialize the props', () => {
    const testCohort = CohortData[1];
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    
    expect(wrapper.props().cohort).toBeDefined();
    expect(wrapper.props().cohort).toEqual(testCohort);
    expect(wrapper.props().cohort.code).toBe('COH-2022-12');
  });

  // Test 3: Cohort code is displayed in an h3 tag
  test('should display cohort code in h3', () => {
    const testCohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    
    const h3Element = wrapper.find('h3');
    expect(h3Element.length).toBe(1);
    expect(h3Element.text()).toBe(testCohort.code);
  });

  // Test 4: Snapshot testing
  test('should always render same html', () => {
    const testCohort = CohortData[0];
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    
    expect(wrapper.html()).toMatchSnapshot();
  });
});