import React from 'react';
import { Jumbotron } from 'reactstrap';
import './style.scss';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <br />
        <br />
        <br />
        <Jumbotron>
          <h1 className="display-3">Home</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
    </div>
  </div>
);

export default Home;
