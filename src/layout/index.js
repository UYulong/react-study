import { Layout } from "antd"
import HeaderComp from './header/index'
import './index.scss'
import MainComp from "./main"
import SideBarComp from "./side"
const { Header, Sider, Content } = Layout

const Layouts = () => {
  return (
    <div className="layout_wrap">
      <Layout>
        <Header>
          <HeaderComp />
        </Header>
        <Layout>
          <Sider>
            <SideBarComp />
          </Sider>
          <Content>
            <MainComp />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Layouts