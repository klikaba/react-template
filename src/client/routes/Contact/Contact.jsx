import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './style.scss';

const Contact = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Jumbotron>
          <h1 className="display-3">Contact page</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  </div>
);

export default Contact;
