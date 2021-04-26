import React from 'react';
import Header from "../Header";
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';

function ScriptText({title, desc, image}){
  return(
        <div className="script">
          <div className="view">
            <img src={image} alt={title} />
          </div>
          <div className="desc">
            <h3>{title}</h3>
            <div>{desc}</div>
            <div>{desc}</div>
            <div className="num">
              <span href="#" className="active">1</span>
              <span href="#">2</span>
              <span href="#">3</span>
              <span href="#">4</span>
              <span href="#">5</span>
              <span href="#">6</span>
              <span href="#">7</span>
              <span href="#">8</span>
              <span href="#">9</span>
              <span href="#">10</span>
            </div>
          </div>
        </div>
  );
}

const ScriptTextCont = [
  {
    id:"1",
    title:"animationRequestFrame",
    desc:"레이아웃은 사이트를 만드는데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    image:"img/script01.png",
  },
  {
    id:"2",
    title:"animationRequestFrame",
    desc:"레이아웃은 사이트를 만드는데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    image:"img/script02.png",

  }
]


function script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="scriptCont">
          <div className="container">
          <WrapTitle text={["Script", "javascript"]}/>
             
            <div className="script-cont">
            {ScriptTextCont.map((txt) => (
                <ScriptText 
                title={txt.title}
                desc={txt.desc}
                image={txt.image}
                key={txt.id}/>
              ))}
            </div>
          </div>
        </section>
      </Layout>
      <Footer/>
    </div>
  );
}

export default script;