import "antd/dist/antd.css";
import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route, NavLink } from "react-router-dom";
import Users from "./pages/Users";
import Car from "./pages/Car";
const { Header, Content, Footer } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <NavLink to="/users">Users</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/car">Car</NavLink>
            </Menu.Item>
            <Menu.Item key="3">Settings</Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            marginTop: 64
          }}
        >
          <Route exact path="/" component={Users} />
          <Route path="/users" component={Users} />
          <Route path="/car" component={Car} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
