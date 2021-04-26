import axios from 'axios';
import React from "react";
import PortInfo from '../basics/PortInfo';
import Header from "../Header";
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';
import Loader from '../basics/Loader';



class Portfolio extends React.Component {
  state={
    isLoading: true,
    ports : [], //포폴 내용 저장할곳
  };

  getPorts = async()=> {
    const {
      data:{
        data:{ports},
      },
    } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json"
    );
  //console.log(ports);
  //console.log(ports.data.data.ports);
  this.setState({ports, isLoading: false});
};

  componentDidMount(){
    setTimeout(()=>{
      //this.setState({isLoading: false});
      this.getPorts();
    },1500);
  }

  render(){
    const { isLoading, ports } = this.state;
    return (
      <div>
        { isLoading ? (
          <Loader />
        ) : (
          <div id="wrap">
            <Header info = "none"/>
            <Layout>
              <section id="portCont">
                <div className="container">
                  <WrapTitle text={['portfolio','site']}/>
                  <div className="port__cont">
                    {ports.map((port)=>(
                      <PortInfo
                        key={port.id}
                        link={port.link}
                        image={port.image}
                        title={port.title}
                        category={port.category}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </Layout>
            <Footer/>
          </div>
        )}
      </div>
      )
    }
  }


export default Portfolio;