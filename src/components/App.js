import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App(){
  return (
    <React.Fragment>
      <Header />
      <MarketControl />
      
    </React.Fragment>
  );
}

export default App;



  // {/* <hr/>
  //     <img src = "https://northernvirginiamag.com/wp-content/uploads/2009/06/farmers-markets.jpg"></img> */}
  //     {/* <Row>
  //       <Col> */}
  //         {/* <AvailableProduce /> */}
  //       {/* </Col>
  //       <Col xs={6}> */}
  //       <MarketSchedule />
  //       {/* </Col>
  //       <Col> */}
    
  //       {/* </Col>
  //     </Row> */}