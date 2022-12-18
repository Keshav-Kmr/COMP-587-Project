import { render, screen, fireEvent,cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

const Mocklog = () => {

    return (
    <BrowserRouter>
        <Login
            // initialValues = {[]}
            email={[]}
            />
    </BrowserRouter>
    )
}

// const mockedSetTodo = jest.fn()

describe ("Add data", () => {
    it('Email', () => {
        render(
            <Mocklog
            // initialValues = {mockedSetTodo}
            email ={[]}

                />
                );
                const para = screen.getByPlaceholderText(/Email/i);
                expect (para).toBeInTheDocument();
    
        
        })


it('should type Email', () => {
    render(
        <Mocklog
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
            <Mocklog
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