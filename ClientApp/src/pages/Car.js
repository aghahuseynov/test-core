import React from "react";
import { Breadcrumb } from "antd";

class Car extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: 380
          }}
        >
          Car
        </div>
      </React.Fragment>
    );
  }
}

export default Car;
