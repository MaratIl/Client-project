import React, { useEffect, useState } from "react";
import styles from "../shared/style/Homepage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import PropertyCard from "../entities/PropertyCard";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function HomePage({ user }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/api/property").then(({ data }) => setProperties(data));
  }, []);

  console.log(properties);
  return (
    <div>
      {properties.map((property) => {
        return (
          <>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{property.type}</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        );
      })}
    </div>
  );
}

export default HomePage;
