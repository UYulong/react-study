import useStore from '@/store';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Login = () => {
  const navigate = useNavigate() // 编程式导航
  const { loginStore } = useStore()

  // 表单校验通过后
  const onFinish = ({ username }) => {
    if (loginStore.checkLoginIsPass(username)) {
      navigate('/', { replace: true })
    }
  };


  return (
    <div className='login_wrap'>
      <Card
        style={{
          width: 490,
          height: 360,
        }}
      >
        <div className='login_form'>
          <h1 className='login_form_title'>
            Admin
          </h1>

          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default Login