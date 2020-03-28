import React from "react";
import Columns from "../columns";
import Column from "../column";
import { FiServer, FiBox, FiCode } from "react-icons/fi";

const Section2 = () => {
  return (
    <section className="container section-padding">
      <Columns className="container">
        <Column>
          <section className="wow animated fadeInUp" data-wow-duration="1s">
            <div className="card-content">
              <FiServer size={50} color="#3273dc" />
            </div>
            <div className="content">
              <h4 className="has-text-dark has-text-weight-light">
                Built for developers
              </h4>
              <p className="has-text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                et magnam ad sunt, quas eius dicta, veniam excepturi delectus
                molestiae similique, autem ducimus tempora fugiat.
              </p>
            </div>
          </section>
        </Column>
        <Column>
          <section className="wow animated fadeInUp" data-wow-duration="1.5s">
            <div className="card-content">
              <FiBox size={50} color="#3273dc" />
            </div>
            <div className="content">
              <h4 className="has-text-dark has-text-weight-light">
                Designed to be modern
              </h4>
              <p className="has-text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                et magnam ad sunt, quas eius dicta, veniam excepturi delectus
                molestiae similique, autem ducimus tempora fugiat.
              </p>
            </div>
          </section>
        </Column>
        <Column>
          <section className="wow animated fadeInUp" data-wow-duration="2s">
            <div className="card-content">
              <FiCode size={50} color="#3273dc" />
            </div>
            <div className="content">
              <h4 className="has-text-dark has-text-weight-light">
                Documentation for everything
              </h4>
              <p className="has-text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                et magnam ad sunt, quas eius dicta, veniam excepturi delectus
                molestiae similique, autem ducimus tempora fugiat.
              </p>
            </div>
          </section>
        </Column>
      </Columns>
    </section>
  );
};

export default Section2;
