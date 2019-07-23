import React from "react";
import NumberList from "./NumberList";
import ChosenNumberList from './ChosenNumberList';

class Ticket extends React.Component {
  render() {
    return (
      <div className="ticket">
        <NumberList />
        <ChosenNumberList/>
      </div>
    );
  }
}
export default Ticket;
