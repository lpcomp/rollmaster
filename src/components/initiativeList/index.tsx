import { Avatar, List, Button, InputNumber } from 'antd';
import { DeleteOutlined, HeartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Action, Player } from '../../lib/types/initiative';
import { Content } from './styles';

type InitiativeListProps = {
    players: Player[];
    removePlayer: (id: number) => void;
    controlPlayer: React.ActionDispatch<[action: Action]>
}

const InitiativeList = ({ players, removePlayer, controlPlayer }: InitiativeListProps) => {
    return (
        <Content>
            <List
                itemLayout="horizontal"
                dataSource={players}
                className='initiative-list'
                renderItem={(item) => (
                    <List.Item className='initiative-item'>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/9.x/initials/svg?seed=${item.name}`} />}
                            title={item.name}
                            description={`Iniciativa: ${item.initiative}`}
                        /> 
                        <ul className='life-panel'>
                            <li>
                                <Button 
                                    className='primary-button' 
                                    shape='circle' 
                                    type='primary' 
                                    icon={<PlusOutlined />} 
                                    key="list-increase-life" 
                                    onClick={
                                        () => 
                                        controlPlayer({ 
                                            type: "UPDATE_PLAYER_LIFE_POINTS", 
                                            payload: { id: item.id, lifePoints: item.lifePoints + 1 } 
                                        })
                                    } 
                                />
                            </li>
                            <li>
                                <InputNumber 
                                    className='life-points-input'
                                    type='number' 
                                    addonBefore={<HeartOutlined />} 
                                    value={item.lifePoints} 
                                    onChange={
                                        (value) => 
                                        controlPlayer({ 
                                            type: "UPDATE_PLAYER_LIFE_POINTS", 
                                            payload: { id: item.id, lifePoints: value ?? 0 } 
                                        })
                                    } 
                                />
                            </li>
                            <li>
                                <Button 
                                    className='primary-button' 
                                    shape='circle' 
                                    type='primary' 
                                    icon={<MinusOutlined />} 
                                    key="list-decrease-life" 
                                    onClick={
                                        () => 
                                        controlPlayer({ 
                                            type: "UPDATE_PLAYER_LIFE_POINTS", 
                                            payload: { id: item.id, lifePoints: item.lifePoints - 1 }
                                        })
                                    } 
                                />
                            </li>
                            <li>
                                <Button className='remove-player-button' type='text' shape='circle' icon={<DeleteOutlined />} key="list-remove" onClick={() => removePlayer(item.id)} />
                            </li>
                        </ul>                                               
                    </List.Item>
                )}
            />
        </Content>
    );
}

export default InitiativeList;