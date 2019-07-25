import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button,Image ,Container,Row,Col} from 'react-bootstrap';

// import ReactDOM from 'react-dom';
class Post extends Component {
   constructor(props){
       super(props);
    }
   state = {
       content:this.props.content,
       author:this.props.author,
       description:this.props.description,
       img:this.props.img,
       url:this.props.url
    }
   render() {
       return ( <div style={{backgroundColor:"#E6E6FA",fontSize:18,fontSize:18}}>
           <p>DESCRIPTION:{this.state.description}</p>
           <p>AUTHOR:{this.state.author}</p>
           <Container>
           <Row>
             <Col xs={4} md={6}>
               <Image src={this.state.img} fluid/>
             </Col>
           </Row>
          </Container>
                     <a href={this.state.url}><button type="button" class="btn btn-primary">READ MORE</button></a><br/><br/><br/><br/>
       </div> );
   }
}
export default Post;