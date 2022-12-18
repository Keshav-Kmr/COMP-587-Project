import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import News from '../components/News';


// right  -------------
// const MockHeader = ({category}) => {
//     return(
//     <BrowserRouter>
//     <News
//         category={General}
//         />
//     </BrowserRouter>
//     )
// }

// it ('should be visible', async () => {
//     render(
//         <MockHeader
//         category={General}
//         />
//     );
//     const para = screen.getByText(/General/i);
//     expect (para).toBeVisible()
// });



// test('should render same text passed into prop', () => {
  
  
//     <BrowserRouter>
  
  
//     render(<News country= "10"/>);
//     const headingElement1 = screen.getByText(/us/i);
//     expect(headingElement1).toBeInTheDocument();
  
//     </BrowserRouter>
//   });



test('should render same text passed into prop', () => {
  
  
    <BrowserRouter>
  
  
    render(<News pageSize= "10"/>);
    const headingElement1 = screen.getByText(/"10"/i);
    expect(headingElement1).toBeInTheDocument();
  
    </BrowserRouter>
  });

  
test('should render same text passed into prop', () => {
    <BrowserRouter>
    render(<News category="sports"/>);
    const headingElement2 = screen.getByText(/sports/i);
    expect(headingElement2).toBeInTheDocument();
  
    </BrowserRouter>
  });

  
it('should render same text passed into prop', () => {
  
    <BrowserRouter>
    {/* render(<News header= "Today news"/>); */}
    const headingElement = screen.getByRole("heading" );
    expect(headingElement).toBeInTheDocument();
    </BrowserRouter>
  });

  
// test('should render same header text passed ', async () => {
  

//     render(
    
//         <MockHeader 
//         header="today news"
//         />
//         );
//     const headingElement1 = screen.getByText(/today news/i);
//     expect(headingElement1).toBeInTheDocument();
  
//   });
  

//   test('should render same text passed into prop', () => {
  
  
//     // <BrowserRouter>
 
 
//    render(<News header= "country"/>);
//    const headingElements = screen.getAllByRole("header");
//    expect(headingElements).toBe(2);
 
 
//  });


 

// news test -----

// const Mocknews = () => {

//   return (
//   <BrowserRouter>
//       <News
//           // initialValues = {[]}
//           News ={[]}
//           />
//   </BrowserRouter>
//   )
// }

// describe ("Add News", () => {
//   it('newsfetch',async () => {
//       render(
//           <Mocknews

//               />
//               );
//               const para = await screen.findByTestId("newsfetch");
//               expect (para).toBeInTheDocument();
  
      
//       })


//     });