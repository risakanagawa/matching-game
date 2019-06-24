import React, { Component } from "react";
import Aquarius from "../../public/logos/aquarius.svg";
import Cancer from "../../public/logos/cancer.svg";
import Carpicornn from "../../public/logos/carpicorn.svg";
import Leo from "../../public/logos/leo.svg";
import Libra from "../../public/logos/libra.svg";
import Scorpio from "../../public/logos/scorpio.svg";
import Virgo from "../../public/logos/Virgo.svg";
import Sagittarius from "../../public/logos/sagittarius.svg";

const generateCards = () => {
  return [
    {
      id: 0,
      name: "Aquarius",
      logo: Aquarius,
      isClicked: false,
      matched: false
    },
    { id: 1, name: "Cancer", logo: Cancer, isClicked: false, matched: false },
    {
      id: 2,
      name: "Carpicornn",
      logo: Carpicornn,
      isClicked: false,
      matched: false
    },
    { id: 3, name: "Leo", logo: Leo, isClicked: false, matched: false },
    { id: 4, name: "Libra", logo: Libra, isClicked: false, matched: false },
    {
      id: 5,
      name: "Scorpio",
      logo: Scorpio,
      isClicked: false,
      matched: false
    },
    { id: 6, name: "Virgo", logo: Virgo, isClicked: false, matched: false },
    {
      id: 7,
      name: "Sagittarius",
      logo: Sagittarius,
      isClicked: false,
      matched: false
    },
    {
      id: 8,
      name: "Aquarius",
      logo: Aquarius,
      isClicked: false,
      matched: false
    },
    { id: 9, name: "Cancer", logo: Cancer, isClicked: false, matched: false },
    {
      id: 10,
      name: "Carpicornn",
      logo: Carpicornn,
      isClicked: false,
      matched: false
    },
    { id: 11, name: "Leo", logo: Leo, isClicked: false, matched: false },
    { id: 12, name: "Libra", logo: Libra, isClicked: false, matched: false },
    {
      id: 13,
      name: "Scorpio",
      logo: Scorpio,
      isClicked: false,
      matched: false
    },
    { id: 14, name: "Virgo", logo: Virgo, isClicked: false, matched: false },
    {
      id: 15,
      name: "Sagittarius",
      logo: Sagittarius,
      isClicked: false,
      matched: false
    }
  ].sort(() => Math.random() - 0.5);
};

const defaultState = {
  score: 0,
  counter: 0,
  moves: 0,
  cards: generateCards()
};

export class Card extends Component {
  state = {
    ...defaultState
  };

  renderCard() {
    return this.state.cards.map(card => {
      const cardClassName = card.matched
        ? "card hide"
        : card.isClicked
        ? "card flip"
        : "card";
      return (
        <div key={card.id} className="card-background">
          <div
            className={cardClassName}
            onClick={() => this.handleClick(card.id)}
          >
            <div className="front-card">
              <img className="symbol" src={card.logo} alt={card.name} />
            </div>
            <div className="back-card" />
          </div>
        </div>
      );
    });
  }

  handleClick(idx) {
    const newCards = [...this.state.cards];
    // Find card in the array and update it.
    let selectedCardIdx = newCards.findIndex(obj => obj.id == idx);
    newCards[selectedCardIdx].isClicked = true;

    this.setState({
      counter: this.state.counter + 1,
      cards: newCards
    });

    if (this.state.counter === 1) {
      this.isMatched();
    }
  }

  isMatched() {
    //Compare two cards
    const newCards = [...this.state.cards];
    let clickedCards = newCards.filter(obj => obj.isClicked);
    let selectedCard1Id = newCards.findIndex(
      obj => obj.id == clickedCards[0].id
    );
    let selectedCard2Id = newCards.findIndex(
      obj => obj.id == clickedCards[1].id
    );
    if (clickedCards[0].name === clickedCards[1].name) {
      // Matched
      setTimeout(() => {
        newCards[selectedCard1Id].isClicked = false;
        newCards[selectedCard1Id].matched = true;
        newCards[selectedCard2Id].isClicked = false;
        newCards[selectedCard2Id].matched = true;
        this.setState({
          counter: 0,
          cards: newCards,
          score: this.state.score + 1,
          moves: this.state.moves + 1
        });
      }, 500);
    } else {
      setTimeout(() => {
        newCards[selectedCard1Id].isClicked = false;
        newCards[selectedCard2Id].isClicked = false;
        this.setState({
          counter: 0,
          moves: this.state.moves + 1,
          cards: newCards
        });
      }, 500);
    }
  }

  Init = () => {
    this.setState({
      score: 0,
      counter: 0,
      cards: generateCards()
    });
  };

  render() {
    if (this.state.score === 8) {
      return (
        <div className="finished">
          <h1>Congratulations! You won!</h1>
          <button className="try-btn" onClick={this.Init}>
            Try Again?
          </button>
        </div>
      );
    }
    return (
      <div className="card-wrapper">
        <p>{this.state.moves} Moves</p>
        <div className="card-grid">{this.renderCard()}</div>;
      </div>
    );
  }
}

export default Card;
