import React from "react";
//import { Link } from "react-router-dom";
export class Bind extends React.Component {
  //class Bind extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }

  componentDidMount() {
    fetch('https://test/hello/getUsers').then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data)
        this.setState({ users: result.data })
      })

    })
  }
}
  //export default Bind;