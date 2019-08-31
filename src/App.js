import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Do what is meaningful not what is expedient",
      author: "Jordan B Peterson"
    };
  }

  getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({ quote: data.content, author: data.author });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1> {this.state.quote} </h1>
        <h4> {this.state.author} </h4>
        <button onClick={this.getQuote}> Another One </button>
      </div>
    );
  }
}

export default Card;
