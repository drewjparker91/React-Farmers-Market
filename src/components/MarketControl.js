import React from 'react';
import AvailableProduce from './AvailableProduce';
import MarketSchedule from './MarketSchedule';

class MarketControl extends React.Component {

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
        buttonText = "Return To Schedule"
      } else {
        currentlyVisibleState = <MarketSchedule />
        buttonText = "See Available Produce"
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
}

export default MarketControl;