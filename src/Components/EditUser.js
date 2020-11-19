import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      Permission: this.props.userEditObject.Permission,
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  saveButton = () => {
    this.props.changeEditUserStatus()
    let info = {};
    info.id = this.state.id
    info.name = this.state.name
    info.tel = this.state.tel
    info.Permission = this.state.Permission
    this.props.getUserEditInfoApp(info)
  }
  render() {
    return (
      <div className="col-12">
        <form method="post">
          <div className="card text-white bg-warning mb-3 mt-2">
            <div className="card-header text-center">Sửa thông tin user</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  onChange={(event) => this.isChange(event)}
                  defaultValue={this.props.userEditObject.name}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Tên user"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(event) => this.isChange(event)}
                  defaultValue={this.props.userEditObject.tel}
                  name="tel"
                  type="text"
                  className="form-control"
                  placeholder="Điện thoại"
                />
              </div>
              <div className="form-group">
                <select
                  onChange={(event) => this.isChange(event)}
                  name="Permission"
                  className="custom-select"
                  defaultValue={this.props.userEditObject.Permission}
                  required
                >
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="button"
                  value="Lưu thông tin"
                  className="btn btn-block btn-danger"
                  onClick={() => this.saveButton()}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
