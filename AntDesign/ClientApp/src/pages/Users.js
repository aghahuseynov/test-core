import React from "react";
import { Table, Divider, Tag, Breadcrumb, Modal } from "antd";
import axios from "axios";

class Users extends React.Component {
  state = {
    user: null
  };

  ConfirimModal = () => {
    Modal.confirm({
      title: "Onayla",
      content: "Kayit silinecektir ...",
      okText: "Onayla",
      cancelText: "Iptal et",
      onOk: () => alert("nasildi")
    });
  };

  columns = [
    {
      title: "Ad",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Soyad",
      dataIndex: "surname",
      key: "surname"
    },
    {
      title: "Yaş",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a onClick={() => this.ConfirimModal()}>Sil</a>
        </span>
      )
    }
  ];

  componentDidMount() {
    axios
      .get("api/SampleData/GetAllUser")
      .then(q => {
        let temp = [];
        q.data.map(u => {
          temp.push({
            key: u.number,
            name: u.name,
            surname: u.surname,
            age: u.age
          });
        });
        // console.log(temp);

        this.setState({
          user: temp
        });
      })
      .catch(e => console.log("error :", e));
  }

  render() {
    if (!this.state.user) return null;
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
          <Table dataSource={this.state.user} columns={this.columns} />
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
