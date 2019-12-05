import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { VictoryLine, VictoryAxis, VictoryChart } from "victory";

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
              <Card>
                <CardHeader>
                  <h3 className="text-center">1 Year Graph</h3>
                </CardHeader>
                <VictoryChart>
                  <VictoryLine
                    data={props.monthlyChart}
                    style={
                      props.monthlyChart[0] >
                      props.monthlyChart[props.monthlyChart.length - 1]
                        ? {
                            data: { stroke: "#00b300" }
                          }
                        : {
                            data: { stroke: "#c43a31" }
                          }
                    }
                  />
                  <VictoryAxis />
                  <VictoryAxis dependentAxis orientation="left" />
                </VictoryChart>
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
