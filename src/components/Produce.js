import React from "react";
import PropTypes from "prop-types";

function Produce(props){

  const monthStyle = {
    textAlign: 'center',
    color: 'Green'
  }
  return (
    <React.Fragment>
      <h3 style={monthStyle}>{props.month}</h3>
      <p style={monthStyle}>{props.selection}</p>
    </React.Fragment>
  )
}

Produce.propTypes = {
  month: PropTypes.arrayOf(PropTypes.string),
  selection: PropTypes.array


  
}

export default Produce