import React from 'react';
import Header from "../Header";
import Layout from '../Layout';

function Contact() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="contactCont">
          <div className="contact-cont">
            <div>YOU ARE</div>
            <div>ALREADY</div>
            <div>DOING WELL.</div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Contact;