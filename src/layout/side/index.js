import {
  ContainerOutlined,
  DesktopOutlined, PieChartOutlined
} from '@ant-design/icons';
import { Menu } from "antd";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', '/', <PieChartOutlined />),
  getItem('文章编辑', '/article', <DesktopOutlined />),
  getItem('文章管理', '/manage', <ContainerOutlined />)
];

const SideBarComp = () => {
  const [pathKey, setPathKey] = useState('/')

  const navigate = useNavigate()

  const hadnleClickedMenu = (e) => {
    setPathKey(e.key)
    navigate(e.key)
  }


  return (
    <Menu
      mode="inline"
      theme="dark"
      items={items}
      selectedKeys={[pathKey]}
      onClick={hadnleClickedMenu}
    />
  )
}

export default SideBarComp