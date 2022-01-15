import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Login from "./Projects/Quiz-Demo/components/Login";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'


cleanup()
test('should rednder the login',()=>{
    render(<Login></Login>);
    const value = screen.getByText("Login");
    expect(value).toBeInTheDocument()
    

    
 
})

describe("",()=>{
    test("test on rendering  input HomePage by sending dummyprop ", () => {
        render(
         
            <Login
              userName={"varun"}
              selectedLang={"english"}
            ></Login>
        
        );
    
        expect(screen.getByDisplayValue("varun")).toBeInTheDocument();
        expect(screen.getByDisplayValue("english")).toBeInTheDocument();

        const tree = renderer
      .create(
        
          <Login
           userName={"varun"}
           selectedLang={"english"}
          ></Login>
        
      )
      .toJSON();
    console.log("::", tree);
    expect(tree).toMatchSnapshot();
})
});


