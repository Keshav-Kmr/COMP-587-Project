import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MockNav = () => {

    return (
    <BrowserRouter>
        <NavBar nav = "Latest News"
        />
    </BrowserRouter>
    )
}

it('should return latest news', () => {
    render(
        <MockNav
            nav = "Latest News"
            />
            );
            const para = screen.getByText(/latest news/i);
            expect (para).toBeVisible()

    
});

it('should return latest news', () => {
    render(
        <MockNav
            nav = "Sports"
            />
            );
            const para = screen.getByTestId("t1");
            expect (para.textContent.length).toBe(61);

    
});
