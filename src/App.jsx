import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router'
import BlogNav from './Components/Navbar/Navbar'
import { Container } from 'react-bootstrap'


function App() {
  

  return (
     <BrowserRouter>
      <Container className="col-md-8"> 
         <BlogNav/>
         <Router/>
      </Container>  
     </BrowserRouter>
    
  )
}

export default App
