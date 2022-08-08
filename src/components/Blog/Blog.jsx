import React from 'react';
import Nav from '../Nav/Nav';
import './Blog.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = () => {
    return (
        
<Container fluid>
    <Nav/>
      <Row>
        <Col>
        <div>
            <img src="./images/blog.jpg" alt="" />
        </div>
        </Col>
        <Col><h2>Welcome to Blog page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam debitis, cupiditate dolorem, eaque facere adipisci laboriosam nihil aperiam temporibus obcaecati placeat perferendis odio sint pariatur quasi maxime itaque quisquam nulla sequi. Deleniti quo eligendi atque vero similique nulla eius, inventore, facere enim fugiat tenetur maiores temporibus velit sapiente placeat amet mollitia cupiditate dolorem. Dolorum modi, dignissimos placeat ipsum, optio quod veritatis, libero nulla non doloribus harum. Minima reiciendis cupiditate rerum laboriosam nam quas dolore hic, sapiente debitis odio non eveniet modi nobis eaque explicabo laborum consequuntur ab minus consectetur recusandae! Quaerat, nesciunt! Ullam eos perspiciatis ut. Atque, maiores nobis consequatur ullam labore magnam rem ratione quasi veritatis error accusamus consequuntur ad exercitationem architecto mollitia. Itaque accusantium ipsa nisi voluptas fuga aspernatur quo delectus aliquam dolor.  </p>
        </Col>
      </Row>
      
    </Container>
         
        
    );
};

export default Blog;