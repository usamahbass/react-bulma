import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Columns from "../columns";
import Column from "../column";
import Work from "../../assets/ceoworkers.svg";

const Section1 = () => {
  return (
    <section className="container section-padding ">
      <Columns>
        <Column>
          <section className="wow animated fadeInUp" data-wow-duratioon="1.5s">
            <img src={Work} alt="work" />
          </section>
        </Column>

        <Column className="m-auto ml-5">
          <section className="wow animated fadeInUp" data-wow-duration="2s">
            <h5 className="is-size-1">
              Welcome to <span className="has-text-link">Raksye.</span>
            </h5>
            <h5 className="is-size-1">Develop Anything</h5>
            <br />
            <p className="is-size-5 has-text-muted">
              Build a beautiful, modern website with flexible Bulma components
              built from scratch.
            </p>
            <br />
            <div className="d-flex space-between">
              <button className="button is-medium is-link">
                View all pages &nbsp;
                <FiArrowRight size={23} />
              </button>
              <button className="button is-medium is-link is-light">
                Documentation
              </button>
            </div>
          </section>
        </Column>
      </Columns>
    </section>
  );
};

export default Section1;
