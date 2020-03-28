import React from "react";
import Columns from "../columns";
import Column from "../column";
import Dashboard from "../../assets/dashboard.svg";
import { FiRefreshCcw, FiCode } from "react-icons/fi";

const Section4 = () => {
  return (
    <section className="container section-padding">
      <Columns>
        <Column>
          <section className="wow animated fadeInLeft" data-wow-duration="1s">
            <span className="has-text-weight-light is-size-3">
              We have lots of experience
            </span>
            <br />
            <span className="has-text-weight-light has-text-link is-size-3">
              building Bulma themes.
            </span>
            <br /> <br />
            <p className="has-text-muted is-size-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, perferendis.
            </p>
            <br />
            <div className="d-flex">
              <div className="icons">
                <FiRefreshCcw size={40} color="#3273DC" />
              </div>
              <div className="ml-5">
                <span className="has-text-dark is-size-5">
                  Bulma users since the beginning{" "}
                </span>
                <p className="has-text-muted is-size-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque, delectus.
                </p>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="icons">
                <FiCode size={40} color="#3273DC" />
              </div>
              <div className="ml-5">
                <span className="has-text-dark is-size-5">
                  Deep understanding of Bulma
                </span>
                <p className="has-text-muted is-size-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  dignissimos.
                </p>
              </div>
            </div>
          </section>
        </Column>
        <Column>
          <section className="wow animated fadeInRight" data-wow-duration="3s">
            <img src={Dashboard} alt="dashboard" />
          </section>
        </Column>
      </Columns>
    </section>
  );
};

export default Section4;
