import { Drawer, Button, Input } from 'antd';
import { Action } from '../../lib/types/initiative';

type InitiativeMenuProps = {
    closeMenu: () => void;
    openMenu: boolean;
    name: string;
    initiative: number;
    lifePoints: number;
    dispatchForm: (action: Action) => void;
    addNew: () => void;
}

const InitiativeMenu = ({ closeMenu, openMenu, name, initiative, lifePoints, dispatchForm, addNew }: InitiativeMenuProps) => {
  return (
    <Drawer
        title="Adicione um jogador"
        placement='right'
        onClose={closeMenu}
        open={openMenu}
        key='Drawer'
        className='add-player-drawer'        
    >
        <Input
            title='Nome do jogador ou inimigo'
            placeholder="Nome do jogador ou inimigo"
            alt='Nome do jogador ou inimigo'
            value={name}
            onChange={(e) => dispatchForm({ type: "UPDATE_NAME", payload: e.target.value })}
        />
        <Input
            title='Iniciativa do jogador ou inimigo'
            placeholder="Iniciativa do jogador ou inimigo" 
            alt='Iniciativa do jogador ou inimigo'
            type='number' 
            value={initiative}
            onChange={(e) => dispatchForm({ type: "UPDATE_INITIATIVE", payload: Number(e.target.value) })}  
        />
        <Input
            title='Pontos de vida do jogador ou inimigo'
            placeholder="Pontos de vida do jogador ou inimigo" 
            alt='Pontos de vida do jogador ou inimigo'
            type='number' 
            value={lifePoints}
            onChange={(e) => dispatchForm({ type: "UPDATE_LIFE_POINTS", payload: Number(e.target.value) })}
        /> 
        <Button type="primary" className='primary-button' onClick={() => addNew()}>
            Adicionar
        </Button>
    </Drawer>
  );
}

export default InitiativeMenu;