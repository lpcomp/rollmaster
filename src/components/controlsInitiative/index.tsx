import { Button } from 'antd';
import { Content } from './styles';

type ControlsIniciativeProps = {
    showDrawer: () => void;
    turn: number;
    nextPlayer: () => void;
}

const ControlsInitiative = ({ showDrawer, turn, nextPlayer }: ControlsIniciativeProps) => {
  return (
    <Content>
        <article className='initiative-controls'>
            <Button type="primary" className='primary-button' onClick={showDrawer}>
                Mais jogadores
            </Button>
            <aside>
                <h3>{`Turno ${turn}`}</h3>
                <Button type="primary" className='primary-button' onClick={nextPlayer}>
                    Próximo jogador
                </Button>
            </aside>
        </article>
    </Content>
  );
}

export default ControlsInitiative;