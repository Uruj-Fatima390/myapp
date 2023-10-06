import './App.css';
import { Navbar,Nav,Container,Form,Button,Dropdown } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Profile from './component/Profile';
import My_Learning from './component/My_Learning';
import My_Cart from './component/My_Cart';
import Log_out from './component/Log_out';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Explore
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/action-1">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action-2">My Learning</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action-3">My cart</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action-4">Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
          </>
          <div>
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/action-1" element={<Profile/>}/>
              <Route path="/action-2" element={<My_Learning/>}/>
              <Route path="/action-3" element={<My_Cart/>}/>
              <Route path="/action-4" element={<Log_out/>}/>
            </Routes>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
