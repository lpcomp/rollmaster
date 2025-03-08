import { Button } from 'antd';
import { Content } from './styles';
import { usePlayer } from '../../lib/store/player';

type ControlsIniciativeProps = {
    turn: number;
    showDrawer: () => void;
    nextPlayer: () => void;
}

const ControlsInitiative = ({ showDrawer, turn, nextPlayer }: ControlsIniciativeProps) => {
    const currentPlayerName = usePlayer((state) => state.currentPlayerName);

    return (
        <Content>
            <article className='initiative-controls'>
                <Button type="primary" className='primary-button' onClick={showDrawer}>
                    Mais jogadores
                </Button>
                <p>{`Jogador da vez: ${currentPlayerName}`}</p>
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