import React, {useState} from 'react';
import {Layout, Breadcrumb } from 'antd';
import "antd/dist/antd.css";

import SiderMenu from './common/SiderMenu.js';

const { Header, Content, Footer } = Layout;

const App = () => {

  const [currMenuNo, setCurrMenuNo] = useState(0);

  const selMenuEvent = (val) => {
    console.log(val);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu currMenuNo={currMenuNo} selMenuEvent={selMenuEvent} />
        <Layout className="site-layout">
          <Header style={{background: '#fff', paddingLeft: 24 }}>
            <h1>웅캬캬캬</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: '#fff', padding: 24, minHeight: 360 }}>
              뭘 좀 해볼까...
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>안녕</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
