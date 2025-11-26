import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function LandlordPage() {
  const [properties, setProperties] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    addres: "",
    descriptions: "",
  });

  useEffect(() => {
    axios
      .get("/api/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.error("Ошибка загрузки объявлений:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const res = await axios.put(`/api/properties/${editingId}`, formData);
        setProperties((prev) =>
          prev.map((p) => (p.id === editingId ? res.data : p))
        );
        setEditingId(null);
      } else {
        const res = await axios.post("/api/properties", formData);
        setProperties((prev) => [...prev, res.data]);
      }

      setFormData({
        type: "",
        price: "",
        addres: "",
        descriptions: "",
      });
    } catch (err) {
      console.error("Ошибка сохранения объявления:", err);
    }
  };

  const handleEdit = (property) => {
    setEditingId(property.id);
    setFormData({
      type: property.type || "",
      price: property.price || "",
      addres: property.addres || "",
      descriptions: property.descriptions || "",
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/properties/${id}`);
      setProperties((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Ошибка удаления объявления:", err);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Мои объявления</h2>

      <Row>
        <Col md={6}>
          <h4 className="mb-3">
            {editingId
              ? "Редактирование объявления"
              : "Добавить новое объявление"}
          </h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label>Тип жилья</Form.Label>
              <Form.Control
                type="text"
                name="type"
                placeholder="Квартира, дом, студия и т.п."
                value={formData.type}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Цена</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Укажите цену"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descriptions"
                placeholder="Опишите объект недвижимости"
                value={formData.descriptions}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Адрес (точка на карте)</Form.Label>
              <Form.Control
                type="text"
                name="addres"
                placeholder="Укажите адрес или координаты"
                value={formData.addres}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              {editingId ? "Сохранить изменения" : "Добавить объявление"}
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h4 className="mb-3">Список моих объявлений</h4>
          {properties.length === 0 ? (
            <p>У вас пока нет объявлений.</p>
          ) : (
            properties.map((el) => (
              <Card key={el.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{el.type}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Цена: {el.price} ₽
                  </Card.Subtitle>
                  <Card.Text>{el.descriptions}</Card.Text>
                  <Card.Text>
                    <strong>Адрес:</strong> {el.addres}
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(el)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(el.id)}
                  >
                    Удалить
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default LandlordPage;
