/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
  let currentMessage;
    const messages = {
      plrOne: 'Spelare ett',
      plrTwo: 'Spelare två',
      plrOneWin: 'Wiho spelare ett vinner!',
      plrTwoWin: 'Wiho spelare två vinner!',
      nobodyWins: 'Ni är lika dålga, ingen av er vinner!'
    };

    if(props.showMessage.winner === 1 || props.showMessage.winner === 2){
      props.showMessage.winner === 1 ? currentMessage = messages.plrOneWin : currentMessage = messages.plrTwoWin;
    }
    else if(!props.showMessage.board.includes(0)){
        currentMessage = messages.nobodyWins;
    }
    else{
      if(props.showMessage.state === 'plr1'){
        currentMessage = messages.plrOne;
      }else{
        currentMessage = messages.plrTwo;
      }
    }

  return (
    <h3>
        {currentMessage}
    </h3>
  );
}
