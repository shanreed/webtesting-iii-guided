import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency yarn add -D react-test-render
// renderer is a banana word because it is a default import
import {render, fireEvent} from '@testing-library/react';
import App, {asyncFunc} from './App';

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('speak', () => {
  // 2. write this test
  it('should pass "hello" into Speak ', () => {
    const {getByText, queryByText} = render(<App/>);
    // expect(queryByText(/hello/i)).toBeTruthy();//fail
    expect(queryByText(/hello/i)).toBeFalsy();//pass
    fireEvent.click(getByText(/speak/i));

    expect(queryByText(/hello/i)).toBeTruthy();

  });
});


//Testing Asynchronous code
// 3 ways:
//1st: Passing async function to describe
describe('asyncFunc', () => {
  it('eventually resolves to success', () => {
    let resolvedValue = null;
    const expected = 'Success';
   asyncFunc().then(res => {
     //assertion
    resolvedValue = res; // yup.
    expected(resolvedValue).toEqual(expected)
   })

  });
  //or
  it('eventually resolves to success 2', () => {
    // let resolvedValue = null;
    const expected = 'Success';
   asyncFunc().then(res => {
     //assertion
    // resolvedValue = res; // yup.
    expected(res).toEqual(expected)
   })
})});


//with asyncFunc inside App component, avoid doing

describe('asyncFunc2', () => {
  it('eventually resolves to success 3', () => {
    let resolvedValue = null;
    const expected = 'Success';
   App.asyncFunc2().then(res => {
     //assertion
    resolvedValue = res; // yup.
    expected(resolvedValue).toEqual(expected)
   })

  });
  //or
  it('eventually resolves to success 4', () => {
    // let resolvedValue = null;
    const expected = 'Success';
   App.asyncFunc2().then(res => {
     //assertion
    // resolvedValue = res; // yup.
    expected(res).toEqual(expected)
   })
})});

