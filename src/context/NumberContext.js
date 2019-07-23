import React, { Component } from "react";
import { numbers } from "../components/game/numbers";

export const NumberContext = React.createContext();

export class NumberProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: numbers,
      chosenNumberList: []
    };

    this.changeStateNumber = this.changeStateNumber.bind(this);
    this.removeNumberFromChosenList = this.removeNumberFromChosenList.bind(this);
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
  changeStateNumber(number) {
    return e => {
      const isChoose = number.isChoose;
      const { numbers } = this.state;
      let { chosenNumberList } = this.state;
      const indexOfNumbers = numbers.indexOf(number);

      let indexOfChosenNumber = this.findIndex(number, chosenNumberList);
      if(indexOfChosenNumber === -1 && chosenNumberList.length === 4){
        alert("Đã chọn đủ số");
      }
      else if (indexOfChosenNumber === -1 && chosenNumberList.length < 4) {
        chosenNumberList.push({ ...number, isChoose: true });
        this.setState({
                numbers:[...numbers.slice(0,indexOfNumbers),
                    {...number, isChoose:!isChoose},
                ...numbers.slice(indexOfNumbers+1)
                ],
                chosenNumberList: chosenNumberList
            })
        
      } else if (indexOfChosenNumber !== -1) {
        chosenNumberList.splice(indexOfChosenNumber, 1);
        this.setState({
          numbers: [
            ...numbers.slice(0, indexOfNumbers),
            { ...number, isChoose: !isChoose },
            ...numbers.slice(indexOfNumbers + 1)
          ],
          chosenNumberList: chosenNumberList
        });
      }
    };
  }
  removeNumberFromChosenList(number){
    return e => {
    const isChoose = number.isChoose;
    let { chosenNumberList } = this.state;
    const { numbers } = this.state;
    let indexOfNumbers = this.findIndex(number, numbers);
    let indexOfChosenNumber = this.findIndex(number,chosenNumberList);
    chosenNumberList.splice(indexOfChosenNumber, 1);
        this.setState({
          numbers: [
            ...numbers.slice(0, indexOfNumbers),
            { ...number, isChoose: !isChoose },
            ...numbers.slice(indexOfNumbers + 1)
          ],
          chosenNumberList: chosenNumberList
        });
      }
  }
  render() {
    return (
      <NumberContext.Provider
        value={{
          numbers: this.state.numbers,
          changeStateNumber: this.changeStateNumber,
          chosenNumberList: this.state.chosenNumberList,
          removeNumberFromChosenList: this.removeNumberFromChosenList
        }}
      >
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
