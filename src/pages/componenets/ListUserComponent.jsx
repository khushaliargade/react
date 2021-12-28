import React, { Component } from "react";
class ListUserComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  render() {
    return (
      <div>
        <h2 className="">UserList</h2>

        <div className="row">
          <table className="">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Users.map((Users) => (
                <tr key={Users.id}>
                  <td>{Users.firstname}</td>
                  <td>{Users.lastname}</td>
                  <td>{Users.email}</td>
                  <td>{Users.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListUserComponents