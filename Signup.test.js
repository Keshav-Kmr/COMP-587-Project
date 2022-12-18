import { render, screen,  fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup';

const Mocksig = () => {

    return (
    <BrowserRouter>
        <Signup
            // initialValues = {[]}
            email={[]}
            userName={[]}
            password={[]}
            />
    </BrowserRouter>
    )
}



describe ("Add data", () => {
    it('Email', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            email ={[]}

                />
                );
                const para = screen.getByPlaceholderText(/Email/i);
                expect (para).toBeInTheDocument();
    
        
        })


it('should type Email', () => {
    render(
        <Mocksig
        // initialValues = {mockedSetTodo}
        email ={[]}

            />
            );
            const para = screen.getByPlaceholderText(/Email/i);
            fireEvent.change(para,{ target: { value: "king@yahoo.com"}})
            expect (para.value).toBe("king@yahoo.com");

    
    });


    it('should type Email', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            email ={[]}
    
                />
                );
                const para = screen.getByPlaceholderText(/Email/i);
                const buttonElement = screen.getByRole("button",{ name: /submit/i} );
                fireEvent.change(para,{ target: { value: "king@yahoo.com"}})
                fireEvent.click(buttonElement)
                expect (para.value).toBe("king@yahoo.com");
    
        
        });


    });


    // testing username -----

    
describe ("Add username data", () => {
    it('Username', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            userName ={[]}

                />
                );
                const para = screen.getByPlaceholderText(/userName/i);
                expect (para).toBeInTheDocument();
    
        
        })


it('should type userName', () => {
    render(
        <Mocksig
        // initialValues = {mockedSetTodo}
        userName ={[]}

            />
            );
            const para = screen.getByPlaceholderText(/userName/i);
            fireEvent.change(para,{ target: { value: "king@yahoo.com"}})
            expect (para.value).toBe("king@yahoo.com");

    
    });


    it('should type userName', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            userName ={[]}
    
                />
                );
                const para = screen.getByPlaceholderText(/userName/i);
                const buttonElement = screen.getByRole("button",{ name: /submit/i} );
                fireEvent.change(para,{ target: { value: "king@yahoo.com"}})
                fireEvent.click(buttonElement)
                expect (para.value).toBe("king@yahoo.com");
    
        
        });


    });


// testing password -----


describe ("Add password ", () => {
    it('Password', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            password ={[]}

                />
                );
                const para = screen.getByPlaceholderText(/password/i);
                expect (para).toBeInTheDocument();
    
        
        })


it('should type password', () => {
    render(
        <Mocksig
        // initialValues = {mockedSetTodo}
        password ={[]}

            />
            );
            const para = screen.getByPlaceholderText(/password/i);
            fireEvent.change(para,{ target: { value: "123456"}})
            expect (para.value).toBe("123456");

    
    });


    it('should type password', () => {
        render(
            <Mocksig
            // initialValues = {mockedSetTodo}
            password  ={[]}
    
                />
                );
                const para = screen.getByPlaceholderText(/password/i);
                const buttonElement = screen.getByRole("button",{ name: /submit/i} );
                fireEvent.change(para,{ target: { value: "123456"}})
                fireEvent.click(buttonElement)
                expect (para.value).toBe("123456");
    
        
        });

        

    });