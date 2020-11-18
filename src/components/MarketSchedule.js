import React from "react";
import Schedule from "./Schedule"

const masterMarketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {
     day: "Friday",
     location: "Dalat, Vietnam",
     hours: "24",
     booth: "øe†ƒ˜∂"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

 class MarketSchedule extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       whichDay: 'Sunday'
     };
   }

   dayChange = (event) => {
     this.setState({whichDay: event.target.value});
   }

   render(){
     let currentlyVisibleState = null;
     let index = masterMarketSchedule.findIndex(x => x.day === this.state.whichDay);
     currentlyVisibleState = <Schedule day={masterMarketSchedule[index].day} location={masterMarketSchedule[index].location} hours={masterMarketSchedule[index].hours} booth={masterMarketSchedule[index].booth}/>
     return (
       <React.Fragment>
         <select onChange={this.dayChange} name='daysOfWeek' id='days'>
           {masterMarketSchedule.map((x,i) => <option key={i} value={x.day}>{x.day}</option>)}
         </select>
         {currentlyVisibleState}
       </React.Fragment>
     )
  }

 }
 

  export default MarketSchedule;




  // function MarketSchedule(){
  //   return (
  //     <React.Fragment>
  //       {masterMarketSchedule.map((schedule, index) => 
  //         <Schedule day={schedule.day}
  //         location={schedule.location}
  //         hours={schedule.hours}
  //         key={index}/>
  //       )}
  //     </React.Fragment>
  //   );
