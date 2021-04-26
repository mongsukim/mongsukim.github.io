import axios from "axios";
import React from "react";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";
import Loader from "../basics/Loader";
import ReferInfo from "../basics/ReferInfo";

class Reference extends React.Component {
  state = {
    isLoding: true,
    refers: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get("https://webstoryboy.github.io/dothome1/refer.json");
    this.setState({ htmlRefer, isLoding: false });
    //console.log(refers);
  };

  componentDidMount() {
    setTimeout(() => {
      //this.setState({ isLoding: false });
      this.getRefer();
    }, 1000);
  }

  render() {
    const { isLoding, htmlRefer } = this.state;
    return (
      <div>
        {isLoding ? (
          <Loader color="light" />
        ) : (
          <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={["Reference", "site"]} />
                  <div className="refer-cont">
                    <div className="refer-table">
                      <ul>
                        {htmlRefer.map((refer) => (
                          <ReferInfo
                            key={refer.id}
                            id={refer.id}
                            title={refer.title}
                            desc={refer.desc}
                            category={refer.category}
                            property={refer.property}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Reference;