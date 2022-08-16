// 头部组件
import useStore from "@/store"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Popover } from "antd"
import { useNavigate } from "react-router-dom"

import './index.scss'

const HeaderComp = () => {
  const navigate = useNavigate()
  const { loginStore } = useStore()

  // 退出登录
  const handelLogout = async () => {
    const res = await loginStore.logout()
    console.log(res);
    if (res) {
      navigate('/login')
    }
  }

  // popover 所需展示内容
  const content = (
    <div className="personal_info">
      <p>个人中心</p>
      <p onClick={handelLogout}>退出登录</p>
    </div>
  )

  return (
    <div className="header_wrap">
      {/* logo */}
      <p>Logo</p>

      {/* 个人头像 */}
      <p className="header_avatar">
        <Popover placement="bottom" content={content} title="Title">
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Popover>
      </p>
    </div>
  )
}

export default HeaderComp