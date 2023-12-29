// Groups.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';

const Groups = () => {
  const location = useLocation();
  const data = useSelector((state) => state.data.data);
  console.log(data);

  return (
    <div>
      <h1>This is a group page</h1>
      <Row xs={1} md={2} lg={3}>
        {data.map((element, outerIndex) => (
          <Col key={outerIndex}>
            <Card>
              <Card.Body>
                {Array.isArray(element) ? (
                  element.map((item, innerIndex) => (
                    <div key={innerIndex}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        <span dangerouslySetInnerHTML={{ __html: item.htmlCode }} />
                      </Card.Text>
                      {/* Add additional details you want to display */}
                    </div>
                  ))
                ) : (
                  <div>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      <span dangerouslySetInnerHTML={{ __html: element.htmlCode }} />
                    </Card.Text>
                    {/* Add additional details you want to display */}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Groups;
