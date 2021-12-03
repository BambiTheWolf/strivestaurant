import ListGroup from 'react-bootstrap/ListGroup'
import { Dish } from '../typings/index'

interface DishCommentsProps {
  selectedDish?: Dish
}
  //props is always an object
  //then a property of props can be a string, or another obj or even array, or a boolen, and a number
  //define props types
  // props.selectedDish types
const DishComments = (props: DishCommentsProps) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
