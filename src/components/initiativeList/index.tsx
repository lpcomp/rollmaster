import { Avatar, List, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Player } from '../../lib/types/initiative';
import { Content } from './styles';

type InitiativeListProps = {
    players: Player[];
    removePlayer: (id: number) => void;
}

const InitiativeList = ({ players, removePlayer }: InitiativeListProps) => {
  return (
    <Content>
        <List
            itemLayout="horizontal"
            dataSource={players}
            className='initiative-list'
            renderItem={(item) => (
            <List.Item className='initiative-item' actions={[
                <Button className='remove-player-button' type='text' shape='circle' icon={<DeleteOutlined />} key="list-remove" onClick={() => removePlayer(item.id)} />
            ]}>
                <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/9.x/initials/svg?seed=${item.name}`} />}
                title={item.name}
                description={`Iniciativa: ${item.initiative}`}
                />
            </List.Item>
            )}
        />
    </Content>
  );
}

export default InitiativeList;