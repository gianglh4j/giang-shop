import React, { Component } from "react";
import { numbers } from "../components/game/numbers";

export const TicketsContext = React.createContext();

export class TicketsProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Tickets: [
        {
          id: 0,
          chosenNumberList: []
        },
        {
          id: 1,
          chosenNumberList: []
        },
        {
          id: 2,
          chosenNumberList: []
        },
        {
          id: 3,
          chosenNumberList: []
        }
      ]
    };
    this.findIndex = this.findIndex.bind(this);
    this.onClickNumberList = this.onClickNumberList.bind(this);

  }
  findIndex(number, List) {
    let indexOfChosenNumber = -1;
    for (let i = 0; i < List.length; i++) {
      if (List[i].id === number.id) {
        indexOfChosenNumber = i;
        return indexOfChosenNumber;
      }
    }
    return indexOfChosenNumber;
  }

  onClickNumberList(number,idTicket){
    let {Tickets} = this.state
    let { chosenNumberList } = this.state.Tickets[idTicket];
      let indexOfChosenNumber = this.findIndex(number, chosenNumberList);
      if(indexOfChosenNumber === -1 && chosenNumberList.length === 4){
        alert("Đã chọn đủ số cho ticket nay");
      }
      else if (indexOfChosenNumber === -1 && chosenNumberList.length < 4) {
        chosenNumberList.push(number);
        this.setState({
          Tickets:[...Tickets,{...Tickets[idTicket],chosenNumberList:chosenNumberList}] 
            })  
        debugger;
      }


  }
  onClickChonsenList(){

  }
  render() {
    return (
      <TicketsContext.Provider
        value={{
            Tickets: this.state.Tickets
        }}
      >
        {this.props.children}
      </TicketsContext.Provider>
    );
  }
}
