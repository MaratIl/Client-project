import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import PropertyCard from "../entities/PropertyCard";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/api/property").then(({ data }) => setProperties(data));
  }, []);

  console.log(properties);
  return (
    <div>
      <Container>
        <Row>
          {properties.map((property) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                  />
                  <Card.Body>
                    <Card.Title>{property.type}</Card.Title>
                    <Card.Text>{property.descriptions}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item> Цена: {property.price} руб</ListGroup.Item>
                    <ListGroup.Item>Адрес: {property.addres}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Написать</Card.Link>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
