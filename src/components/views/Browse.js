import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Loading from "components/animations/loading";
import "styles/browse.scss";
import "styles/browseMobile.scss";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "browse",
      animComplete: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.disableAnimation();
    }, 3000);
  }
  componentWillUnmount() {}

  disableAnimation = () => {
    this.setState({ animComplete: true });
  };

  animation = () => {
    const { animComplete } = this.state;
    if (!animComplete) {
      return (
        <Fragment>
          <Loading />
        </Fragment>
      );
    } else {
      <Fragment />;
    }
  };

  browse = () => {
    const { animComplete } = this.state;
    if (animComplete) {
      return (
        <Fragment>
          <div className="browse-container">
            <div id="container">
              <div className="side-nav-container">
                <div className="side-nav-top"> </div>
                <div className="side-nav-middle"> </div>
                <div className="side-nav-bottom"> </div>
              </div>
              <div className="main-browse-container">
                <div />
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Fragment> </Fragment>;
    }
  };

  render() {
    return (
      <Fragment>
        {this.browse()}
        {this.animation()}
      </Fragment>
    );
  }
}

export default Browse;
