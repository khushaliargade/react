import React from "react";
import footerLogo from "../../assets/footer.png";
export class Footer extends React.Component {
  render() {
    return (
      <div className="footer-pin">
        <img src={footerLogo} alt="" />
        <h1>Learning React</h1>
      </div>
    );
  }
}
