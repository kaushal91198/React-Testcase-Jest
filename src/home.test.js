import Home from "./Home";
import { shallow } from "enzyme";


describe("shallow page", () => {
  test("Object Check", () => {
    let wrapper = shallow(<Home />);
    console.log(wrapper.debug(),'wrapper') // it will give you the content of your component

    // it will check that if this class name exists or not in component
    expect(wrapper.exists('.homecls')).toEqual(true)
      // test function
    // the first argument is test name used to identify the test
    // the second argument is a function that contains the expectations to test thsi is were react testing library comes into the picture
    // the third argument is timeout which is an optional argument for specifying how long to wait before aborting the test.
    // the default timeout value is 5 seconds.
  
  });
});


// watch mode is an option that we can pass to jest asking to watch files that have changed sinc the last commit and execute tests related 
// only to those changed files

// An optimization designed to make your tests run fast regardless og how many tests you have
 