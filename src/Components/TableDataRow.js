import React, { Component } from "react";

class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.dulieu.Permission === 1) {
      return "Admin";
    } else if (this.props.dulieu.Permission === 2) {
      return "Moderator";
    } else {
      return "Người dùng";
    }
  };
  editClick = () => {
    this.props.editUser();
    this.props.changeEditUserStatus();
  };
  deleteUser = (id) => {
    this.props.deleteUser(id);
  };
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.dulieu.name}</td>
        <td>{this.props.dulieu.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div
              onClick={() => this.editClick()}
              className="btn btn-warning sua"
            >
              <i className="fa fa-edit" />
              Sửa
            </div>
            <div
              className="btn btn-danger sua"
              onClick={(id) => this.deleteUser(this.props.id)}
            >
              <i className="fa fa-delete" />
              Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
