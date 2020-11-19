import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj:{}
    };
  }

  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.ketNoi()}
        >
          Đóng
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.ketNoi()}
        >
          Thêm mới
        </div>
      );
    }
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value,
    });
    this.props.getTextSearch(this.state.tempValue);
  };
  
  isShow = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
        getUserEditInfoApp={(info) => this.props.getUserEditInfoApp(info)}
        userEditObject = {this.props.userEditObject}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
        />
      );
    }
  };
  render() {
    return (
      <div className="col-12 text-left">
        <div className="row">{this.isShow()}</div>
        <div className="form-group">
          <div className="btn-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên cần tìm kiếm"
              onChange={(event) => this.onChange(event)}
            />
            <div
              className="btn btn-info"
              onClick={(dl) => this.props.getTextSearch(this.state.tempValue)}
            >
              Tìm
            </div>
          </div>
          <div className="btn-group1">{this.hienThiNut()}</div>
        </div>

        <hr></hr>
      </div>
    );
  }
}

export default Search;
