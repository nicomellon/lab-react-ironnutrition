import { Card, Col, Divider, Button } from "antd";

function FoodBox(props) {
  const { _id, name, calories, image, servings } = props.food;

  const handleClick = () => props.delete(_id);

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={handleClick} type="primary">
          {" "}
          Delete{" "}
        </Button>
      </Card>
      <Divider />
    </Col>
  );
}

export default FoodBox;
