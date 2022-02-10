import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { name: "Bat", price: 500, id: 1, value: 4, limit: 10 },
      { name: "Rubber", price: 5, id: 2, value: 2, limit: 13 },
      { name: "Pencil", price: 5, id: 3, value: 1, limit: 6 },
      { name: "Bottle", price: 50, id: 4, value: 0, limit: 3 },
      { name: "Pad", price: 20, id: 5, value: 2, limit: 8 },
    ],
  };

  render() {
    return (
      <>
        <div className="navbar">Items: {this.state.counters.length}</div>
        <div className="pricebar">Total Price: {this.totalPrice} INR</div>
        <button
          onClick={this.handleReset}
          className="btn"
          style={{ margin: "0 595px" }}
        >
          Reset
        </button>
        <button
          onClick={this.handleResetCart}
          className="btn"
          style={{
            margin: "10px 560px",
            color: "teal",
            position: "relative",
            left: "14px",
          }}
        >
          Reset Cart
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            itemName={<h3> Item {counter.id}</h3>}
            onDeleteItem={this.handleDeleteItem}
            onAdd={this.handleAdd}
            onDelete={(this, this.handleDelete)}
          />
        ))}
      </>
    );
  }
  handleDeleteItem = (itemId) => {
    const Counters = this.state.counters.filter((item) => item.id !== itemId);
    this.setState((this.state.counters = Counters));
  };

  handleAdd = (item) => {
    const counters = [...this.state.counters];
    let id = counters.indexOf(item);

    if (counters[id].value < counters[id].limit) {
      counters[id] = { ...item };
      counters[id].value++;
      this.setState({ counters });
    } else
      alert(`Only ${counters[id].limit} ${counters[id].name}s in the Stocks.`);
  };

  handleDelete = (item) => {
    const counters = [...this.state.counters];
    let id = counters.indexOf(item);

    if (counters[id].value > 0) {
      counters[id] = { ...item };
      counters[id].value--;
      this.setState({ counters });
    }
  };

  handleReset = () => {
    const Counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ Counters });
  };

  get totalPrice() {
    let totalPrice = 0;
    const counters = [...this.state.counters];
    counters.forEach((item) => {
      totalPrice = totalPrice + item.price * item.value;
    });
    return totalPrice;
    console.log(totalPrice);
  }

  handleResetCart = () => this.setState({ counters: [] });
}

export default Counters;
