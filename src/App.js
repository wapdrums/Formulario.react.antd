import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App(){
  const [collapsed,setCollapsed] = useState(false);
  return       <Layout style={{ minHeight: '100vh' }}>
  <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Cadastro
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
        <Menu.Item key="3">Pedro</Menu.Item>
        <Menu.Item key="4">Cecilia</Menu.Item>
        <Menu.Item key="5">Abel</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Grupos">
        <Menu.Item key="6">Grupo 1</Menu.Item>
        <Menu.Item key="8">Grupo 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Arquivos
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Configurações
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }} />
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
        <Breadcrumb.Item>Novo Usuario</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      <Body />
      </div>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
</Layout>

}

export default App