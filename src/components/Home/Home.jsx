import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from '../Nav/Nav.jsx';
import './Home.css';

const Home = () => {
    return (
        <>
        <Nav/>
        <Container fluid>
            <Row>
             <Col md={6}>
                
                    <h2>Access 2700+</h2> 
                    <h2>Online Tutorial From Top Instructor.</h2>
                    <h4>Meet university,and cultural institutions, who'll share their experience.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nobis incidunt libero illum. Vel voluptate maiores necessitatibus iure corporis esse? Esse placeat itaque quae deserunt nobis beatae velit atque quas corporis cumque eius perferendis voluptatem unde ratione minima nemo dignissimos, necessitatibus molestias nostrum commodi! Molestias voluptates dolorum ad vel pariatur eius quidem ullam, ab inventore voluptas debitis cumque distinctio iure fugiat recusandae. Molestiae, aut optio excepturi laudantium unde maxime distinctio maiores nemo. Quam ipsam placeat velit nihil maiores hic distinctio eveniet nisi, beatae reprehenderit accusantium voluptas recusandae quaerat ipsum doloribus? Reprehenderit ducimus ab, facilis officia accusantium sint unde? Aut, enim.</p>
                
              </Col>
                    <Col md={6}>
                    
                        <img id='image1' src="./images/hero-1.jpg" alt="" height={400} width={300}/>                        
                       
                    </Col>
               </Row>             
         </Container>
        </>
    );
};

export default Home;