import React, { Component } from "react";

import Ticket from "../game/Ticket";
import { NumberProvider } from "../../context/NumberContext";
import { NumberContext } from "../../context/NumberContext";
import Lottery from "../game/Lottery";

class Game extends Component {
  render() {
    return (
        <NumberProvider>
        <div className ="pickTicket">
          <div className="titleTicket">Ticket</div>
          <Ticket />
        </div>
        <NumberContext.Consumer>
          {({ chosenNumberList }) => {
            return <Lottery chosenNumberList={chosenNumberList} />;
          }}
        </NumberContext.Consumer>
      </NumberProvider>
    );
  }
}

export default Game;
