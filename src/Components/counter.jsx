import react, { Component } from "react";
import "../index.css";

class Counter extends Component {
  render() {
    const { counter } = this.props;

    return (
      <div className="counter">
        <h3>
          {this.props.counter.name}:{" "}
          <span style={{ color: "orange" }}>
            {this.props.counter.price} INR
          </span>
        </h3>
        <span className="count" style={this.colorChange}>
          {this.countFormat}
        </span>
        <button onClick={() => this.props.onAdd(counter)} className="btn">
          Add
        </button>
        <button onClick={() => this.props.onDelete(counter)} className="btn">
          Delete
        </button>
        <button
          className="del"
          onClick={() => this.props.onDeleteItem(counter.id)}
        >
          Delete Item
        </button>
        <br />
      </div>
    );
  }

  get colorChange() {
    return this.props.counter.value === 0
      ? { backgroundColor: "teal" }
      : { backgroundColor: "white" };
  }

  get countFormat() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
