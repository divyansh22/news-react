import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
class NavApp extends Component {
  constructor(props){
      super(props);
  }
   render() {
       return ( <div>
<Navbar bg="dark" expand="lg" variant="dark">
 <Navbar.Brand href="#home">NEWS</Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="mr-auto">
     <Nav.Link onClick={()=>this.props.clickhandler("home")}>Home</Nav.Link>
     <Nav.Link onClick={()=>this.props.clickhandler("business")}>Business</Nav.Link>
     <Nav.Link onClick={()=>this.props.clickhandler("sports")}>Sports</Nav.Link>
     <Nav.Link onClick={()=>this.props.clickhandler("technology")}>Technology</Nav.Link>
     <Nav.Link onClick={()=>this.props.clickhandler("science")}>Science</Nav.Link>
   </Nav>
   <Form inline>
     <FormControl type="text" placeholder="Search" id="search" className="mr-sm-2" />
     <Button  variant="outline-success" onClick={()=>{this.props.clickhandler("search")}}>Search</Button>
   </Form>
 </Navbar.Collapse>
</Navbar>
       </div> );
   }
}
export default NavApp;