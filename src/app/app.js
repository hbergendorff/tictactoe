import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles within an element with a `board` CSS class.
*/

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      game: newGame()
    }
  }

  move(plrValue, index){
    if(plrValue === 1 || plrValue === 2)
        return;
    if(this.state.game.winner)
      return;

    const newState = makeMove(this.state.game, index);
      this.setState(this.state.game = newState)
  }

  startNew(){
    this.setState(this.state.game = newGame())
  }

  render(){
    return (
      <div>
        <h2>Tre i rad</h2>
        <div><Message showMessage ={this.state.game}/></div>
        <div className='board'>
            {this.state.game.board.map( (valueTile, index)=> (
                <Tile value={valueTile}
                      key={index}
                      plrMove={ () => this.move(valueTile, index)}
                />
            ))}
        </div>
        <button onClick={() => this.startNew()}>Nytt Spel</button>
      </div>
    );
  }
}
