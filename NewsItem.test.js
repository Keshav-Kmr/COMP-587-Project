import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsItem from '../components/NewsItem';



const Mocknews = () => {

    return (
    <BrowserRouter>
        <NewsItem
            // initialValues = {[]}
            NewsItem ={[]}
            />
    </BrowserRouter>
    )
  }
  
  describe ("Add News", () => {

    beforeEach(() => {
        console.log ("Running before each test.");
    })

    beforeAll(() => {
        console.log("Running before all.")
    })


    it('newsfetch',async () => {
        render(
            <Mocknews
  
                />
                );
                const para = await screen.findByTestId("newsfetch");
                expect (para).toBeInTheDocument();
    
        
        })
  
// finds news articals lenght-- 

        it('newsfetch lenght ',async () => {
            render(
                <Mocknews
      
                    />
                    );
                    const para = await screen.findByTestId(/newsfetch/i);
                    expect (para.length).toBe(undefined);
        
            
            });

            
        it('newsfetch lenght ',async () => {
            render(
                <Mocknews
      
                    />
                    );
                    const para = await screen.findByTestId(/newsfetch/i);
                    expect (para.length).not.toBe(2);
        
            
            })
  
      });