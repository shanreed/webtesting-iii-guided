import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency yarn add -D react-test-render
// renderer is a banana word because it is a default import
import {render, fireEvent} from '@testing-library/react';
import Speak from './speak';

describe('<Speak/>', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Speak />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //Implementation details --> 
  //what props.speak is doing
  //if props.speak is invoked

  //What we want to test -->
  //When the button is clicked...what happens
  //mock function
  it('display a message when "speak" button is clicked', () => {
    const speak = jest.fn(); // jest has a mock function (does not do anything)
    let messageMock = '';
    //{getByText} comes from component
    const {getByText} = render(<Speak speak = {speak} message = {messageMock}/>)
//    const component = render(<Speak speak = {mock}/>)
//    //component has methods check out the console log in the test results 
//    console.log(component);

//action
// const button = getByText(/speak/i)
// fireEvent.click(getByText(/speak/i))
//console.log(button);
        //or
const button = getByText("SPEAK")
//fireEvent is object with a lot of methods, any kind of event handler in react has a corresponding method on fireEvent
fireEvent.click(button)


//assert
//implenmentation detail
expect(speak).toHaveBeenCalled();
  });
});