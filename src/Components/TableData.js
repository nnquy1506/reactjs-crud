import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  mappingDataUser = () =>
    this.props.dataUser.map((value, key) => (
      <TableDataRow
        deleteUser={(id) => this.props.deleteUser(id)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editUser={(user) => this.props.editUser(value)}
        key={key}
        index={key}
        dulieu={value}
        id={value.id}
      />
    ));
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
