import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

//Containers
import StockDetailContainer from "../../containers/StockDetailContainer";

//Components
import StockDetailNews from "./StockDetailNews";

const DetailPage = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Container className="d-flex justify-content-start">
            <Row>
              <Card>
                <CardHeader>
                  <h3>
                    {props.location.symbol} - {props.location.name}
                  </h3>
                </CardHeader>
                <CardBody>
                  <StockDetailContainer symbol={props.location.symbol} />
                </CardBody>
              </Card>
            </Row>
          </Container>
        </Col>
        <Col>
          <StockDetailNews {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
