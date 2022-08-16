import {
  ContainerOutlined,
  DesktopOutlined, PieChartOutlined
} from '@ant-design/icons';
import { Menu } from "antd";

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
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('文章编辑', '2', <DesktopOutlined />),
  getItem('文章管理', '3', <ContainerOutlined />)
];

const SideBarComp = () => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      items={items}
    />
  )
}

export default SideBarComp