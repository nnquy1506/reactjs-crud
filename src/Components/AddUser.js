import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      Permission: "",
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });

    // Package to item
  };

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col-12">
          <form method="post">
            <div className="card border-primary mb-3 mt-2">
              <div className="card-header">Thêm mới user</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Tên user"
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="Điện thoại"
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange={(event) => this.onChange(event)}
                    name="Permission"
                    className="custom-select"
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
                    type="reset"
                    value="Thêm mới"
                    className="btn btn-block btn-primary"
                    onClick={(name, tel, Permission) =>
                      this.props.getNewUserData(
                        this.state.name,
                        this.state.tel,
                        this.state.Permission
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };
  render() {
    return <div>{this.kiemTraTrangThai()}</div>;
  }
}

export default AddUser;
