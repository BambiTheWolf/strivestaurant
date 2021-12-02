import dishes from '../data/menu.json'
import { Container, Col, Row, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Dish } from '../typings'

const Menu = () => (
  <Container>
    {dishes.map((Dish) => (
      <Row className='justify-content-center my-3' key={Dish.id}>
        <Col xs={12} md={6} className='text-center'>
          <Link to={'/details/' + Dish.id}>
            <img src={Dish.image} alt='some pasta pic' />
          </Link>
          <h4>{Dish.name}</h4>
          <Badge variant='warning'>{Dish.price}</Badge>
          <Badge variant='danger'>{Dish.label}</Badge>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
