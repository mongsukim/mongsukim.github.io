import React from "react";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";

// function ReferDetail(props) {
//   console.log(props);
//   return <span>props</span>;
// }

class ReferDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(this.props);
    if (location.state === undefined) {
      history.push("/reference");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id="wrap" className="light">
          <Header info="none" />
          <Layout>
            <section id="referCont">
              <div className="container">
                <div className="refer-cont">
                  <h2>{location.state.title}</h2>
                  <p>{location.state.desc}</p>
                  <p>{location.state.category}</p>
                  <p>{location.state.property}</p>
                  <p>{location.state.version}</p>
                </div>
              </div>
            </section>
          </Layout>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReferDetail;