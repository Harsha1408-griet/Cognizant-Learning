import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      amount: '',
      currency: 'Euro'
    };
  }

  // Increment method that calls two functions
  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  };

  // Say Hello
  sayHello = () => {
    alert("Hello! Increment button was clicked.");
  };

  // Decrement method
  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  // Welcome message with argument
  sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event handler
  handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  };

  // Handle form input
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle submit for currency converter
  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    let result = 0;

    if (currency === 'Euro') {
      result = amount * 80;
    }

    alert(`Converting to ${currency} Amount is ${result}`);
  };

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>Click on me</button>
        <br /><br />

        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Currency:
            <select
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            >
              <option value="Euro">Euro</option>
              {/* You can add more currencies here */}
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
