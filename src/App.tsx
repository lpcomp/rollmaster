import Header from './components/header';
import Footer from './components/footer';
import InitiativeList from './components/initiativeList';
import InitiativeMenu from './components/initiativeMenu';
import ControlsInitiative from './components/controlsInitiative';

import { Layout } from 'antd';
import { useState, useReducer } from 'react';
import { usePlayer } from './lib/store/player';
import { Player, Action } from './lib/types/initiative';

type PlayersState = {
  players: Player[];
  firstPlayerId: number | null;
};

type TurnState = {
  turn: number;
  firstPlayerId: number | null;
};

// const initialPlayersState = [
//   {
//     id: 2323,
//     name: 'Manu',
//     initiative: 23
//   },
//   {
//     id: 545435,
//     name: 'Luiz',
//     initiative: 15
//   }
// ];

function App() {
  const onePlayer = 1;
  const { Content } = Layout;
  const [open, setOpen] = useState(false);
  const updatePlayerName = usePlayer((state) => state.updatePlayerName);

  const orderByIniciative = (players: Player[]): Player[] => {
    return players.sort((a, b) => b.initiative - a.initiative);
  }  

  const playersReducer = (state: PlayersState, action: Action): PlayersState => {
    switch (action.type) {
      case "ADD_PLAYER": {          
        const newPlayer: Player = {
          id: action.payload.id,
          name: action.payload.name,
          initiative: Number(action.payload.initiative),
        };

        const updatedPlayers = orderByIniciative([...state.players, newPlayer]);
        updatePlayerName(updatedPlayers[0].name);

        return {
          players: updatedPlayers,
          firstPlayerId: updatedPlayers[0]?.id ?? null
      };
      }

      case "REMOVE_PLAYER": {
        const updatedPlayers = state.players.filter(player => player.id !== action.payload);
        const firstPlayer = orderByIniciative(updatedPlayers)[0];

        return {
          players: updatedPlayers,
          firstPlayerId: firstPlayer?.id ?? null
        };
      }

      case "NEXT_TURN": {
        if (state.players.length <= onePlayer) return state;

        const newPlayers = [...state.players.slice(onePlayer), state.players[0]];
        return {
          ...state,
          players: newPlayers          
        };
      }
  
      default:
        return state;
    }
  }

  const formReducer = (state: { id: number; name: string; initiative: number }, action: Action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };

      case "UPDATE_INITIATIVE":
        return { ...state, initiative: action.payload };

      case "RESET_FORM":
        return { id: 0, name: "", initiative: 0 };

      default:
        return state;
    }
  };

  const turnReducer = (state: TurnState, action: Action): TurnState => {
    switch (action.type) {
      case "SET_FIRST_PLAYER":
        return { ...state, firstPlayerId: action.payload };
  
      case "INCREMENT_TURN":
        return { ...state, turn: state.turn + 1 };
  
      case "RESET_TURN":
        return { turn: 1, firstPlayerId: null };
  
      default:
        return state;
    }
  };

  const [player, dispatchPlayer] = useReducer(playersReducer, { players: [], firstPlayerId: null });
  const [form, dispatchForm] = useReducer(formReducer, {  id: 0, name: "", initiative: 0 });
  const [turnState, dispatchTurn] = useReducer(turnReducer, { turn: 1, firstPlayerId: null });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const addNew = () => {
    const newPlayerId = Date.now();
    const newPlayer = { id: newPlayerId, name: form.name, initiative: form.initiative };
    dispatchPlayer({ type: "ADD_PLAYER", payload: newPlayer });
    dispatchForm({ type: "RESET_FORM" });
  }

  const removePlayer = (id: number) => {
    dispatchPlayer({ type: "REMOVE_PLAYER", payload: id });
  }

  const nextPlayer = () => {
    dispatchPlayer({ type: 'NEXT_TURN' });
    updatePlayerName(player.players[onePlayer].name);
    if (player.players.length > 0 && player.players[onePlayer]?.id === player.firstPlayerId) {      
      dispatchTurn({ type: "INCREMENT_TURN" });
    }
  }

  return (
    <>
      <Layout className='content-initiative'>
        <Header />
        <Content>
          <ControlsInitiative turn={turnState.turn} showDrawer={showDrawer} nextPlayer={nextPlayer} />
          <InitiativeList players={player.players} removePlayer={removePlayer} />          
        </Content>
        <Footer />
      </Layout>
      
      <InitiativeMenu openMenu={open} closeMenu={onClose} name={form.name} initiative={form.initiative} dispatchForm={dispatchForm} addNew={addNew} />      
    </>
  )
}

export default App
