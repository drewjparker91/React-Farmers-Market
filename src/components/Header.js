import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import MarketSchedule from './MarketSchedule'
import AvailableProduce from './AvailableProduce'

class Header extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        produceVisibleOnPage: false
      };
  }
  handleClick = () => {
    this.setState(prevState => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage
    }));
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.produceVisibleOnPage) {
      currentlyVisibleState = <AvailableProduce />
    } else {
      currentlyVisibleState = <MarketSchedule />
    }
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Avery's Organic</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#marketSchedule">Schedule</Nav.Link>
          <Nav.Link href="#availableProduce">Available Produce</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      // <React.Fragment>
      //   {currentlyVisibleState}
      //   <button onClick={this.handleClick}>{buttonText}</button>
      // </React.Fragment>
    );
  }
}










// function Header() {
//   return (
        
//       <Navbar sticky="top" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Avery's Organic</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#marketSchedule">Schedule</Nav.Link>
//           <Nav.Link href="#availableProduce">Available Produce</Nav.Link>
//         </Nav>
//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-light">Search</Button>
//         </Form>
//       </Navbar>
      
     
   


//   );
// }

export default Header;