import React from "react"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: ""
    }
  }

  componentDidMount() {
    this.getQuote()
    console.log("Get quote called in mount method")
  }
  getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data))
        this.setState({ quote: data.content, author: data.author })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div id="container">
        <div id="quote-box">
          <div id="text"> {this.state.quote} </div>
          <div id="author"> -{this.state.author} </div>
          <div id="buttons">
            <button id="new-quote" onClick={this.getQuote}>
              Another One
            </button>
            <a
              href={"https://twitter.com/intent/tweet?text=" + this.state.quote}
              id="tweet-quote"
              title="Tweet this quote"
            >
              <img
                alt="Tweet this quote"
                src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter-m.png"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
