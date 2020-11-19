import "./App.css";
import AddUser from "./Components/AddUser";
import Header from "./Components/Header";
import Search from "./Components/Search";
import TableData from "./Components/TableData";
import React, { Component } from "react";
import DataUser from "./Data/Data.json";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      dataSearch: "",
      editUserStatus: false,
      userEditObject: {},
    };
  }

  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser))
    } else {
      let temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp,
      });
    }
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };
  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });
  };

  deleteUser = (id) => {
    let tempData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: tempData });
    localStorage.setItem('userData',JSON.stringify(tempData))
  };

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  };
  getNewUserData = (name, tel, Permission) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    });
    localStorage.setItem('userData',JSON.stringify(items))
  };

  getTextSearch = (dl) => {
    this.setState({
      dataSearch: dl,
    });
  };
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };
  render() {
    let ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.toLowerCase().indexOf(this.state.dataSearch) !== -1) {
        ketqua.push(item);
      }
    });
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                getTextSearch={(dl) => this.getTextSearch(dl)}
              />
              <TableData
                deleteUser={(id) => this.deleteUser(id)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUser={(user) => this.editUser(user)}
                dataUser={ketqua}
              />
              <AddUser
                getNewUserData={(name, tel, Permission) =>
                  this.getNewUserData(name, tel, Permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
