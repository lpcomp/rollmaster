import { Avatar, List, Layout, Drawer, Button, Input } from 'antd';
import { useState, useReducer } from 'react';
import icon from './assets/images/icon.png';
const { Header, Content, Footer } = Layout;
import { DeleteOutlined } from '@ant-design/icons';

type Player = {
  id: number;
  name: string;
  initiative: number;
};

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

type Action =
  | { type: "ADD_PLAYER"; payload: { id: number, name: string, initiative: number } }
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "UPDATE_INITIATIVE"; payload: number }
  | { type: "REMOVE_PLAYER"; payload: number }
  | { type: "NEXT_TURN" }
  | { type: "RESET_FORM" }
  | { type: "SET_FIRST_PLAYER", payload: number }
  | { type: "INCREMENT_TURN" }
  | { type: "RESET_TURN" }


function App() {
  const onePlayer = 1;
  const [open, setOpen] = useState(false);

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
    if (player.players.length > 0 && player.players[1]?.id === player.firstPlayerId) {
      dispatchTurn({ type: "INCREMENT_TURN" });
    }
  }

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} />
          <h3>RollMaster</h3>
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <article className='initiative-controls'>
            <Button type="primary" onClick={showDrawer}>
              Mais jogadores
            </Button>
            <aside>
              <h3 style={{ color: 'white' }}>{`Turno ${turnState.turn}`}</h3>
              <Button type="primary" onClick={nextPlayer}>
                Próximo jogador
              </Button>
            </aside>
          </article>
          <List
            itemLayout="horizontal"
            dataSource={player.players}
            className='initiative-list'
            renderItem={(item, index) => (
              <List.Item className='initiative-item' actions={[
                <Button className='remove-player-button' type='text' shape='circle' icon={<DeleteOutlined />} key="list-remove" onClick={() => removePlayer(item.id)} />
              ]}>
                <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={item.name}
                  description={`Iniciativa: ${item.initiative}`}
                />
              </List.Item>
            )}
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          
        </Footer>
      </Layout>
      
      <Drawer
        title="Basic Drawer"
        placement='right'
        onClose={onClose}
        open={open}
        key='Drawer'
      >
        <Input 
          placeholder="Nome do jogador ou inimigo"
          value={form.name}
          onChange={(e) => dispatchForm({ type: "UPDATE_NAME", payload: e.target.value })}
        />
        <Input
          placeholder="Iniciativa do jogador ou inimigo" 
          type='number' 
          value={form.initiative}
          onChange={(e) => dispatchForm({ type: "UPDATE_INITIATIVE", payload: Number(e.target.value) })}  
        />        
        <Button type="primary" onClick={() => addNew()}>
          Adicionar
        </Button>
      </Drawer>
    </>
  )
}

export default App
