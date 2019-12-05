import React from "react";
import { Container, Row, Col } from "reactstrap";

//Containers
import StockDetailContainer from "../../containers/StockDetailContainer";

//Components
import StockDetailNews from "./StockDetailNews";

const DetailPage = props => {
  return (
    <Container>
      <Row className="justify-content-start">
        <Col className="text-align-left">
          <h3>
            {props.location.symbol} - {props.location.name}
          </h3>
        </Col>
      </Row>
      <StockDetailContainer symbol={props.location.symbol} />
      <StockDetailNews {...props} />
    </Container>
  );
};

export default DetailPage;
