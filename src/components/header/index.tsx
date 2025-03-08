import React from 'react';
import { Layout } from 'antd';
import icon from '../../assets/images/icon.png';
const { Header: HeaderAntD } = Layout;

import { ContentHeader } from './styles';

const Header: React.FC = () => {
  return (
    <ContentHeader>
        <HeaderAntD>
            <img src={icon} />
            <h3>RollMaster</h3>
        </HeaderAntD>
    </ContentHeader>
  );
}

export default Header;