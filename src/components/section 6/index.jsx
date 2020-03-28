import React from "react";
import Columns from "../columns";
import Column from "../column";
import Designer from "../../assets/design.svg";

const Section6 = () => {
  return (
    <section className="pt-15 section-padding has-background-gray-200">
      <Columns className="w-max-960 m-auto">
        <Column>
          <span className="has-text-weight-light has-text-dark is-size-3">
            Stay focused on your business.
          </span>
          <br />
          <span className="has-text-weight-light has-text-link is-size-3">
            Let us handle the design.
          </span>
          <br />
          <br />
          <p className="has-text-muted is-size-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            magni est soluta, quia officiis beatae!
          </p>
          <br />
          <br />
          <div className="d-flex is-size-5">
            <div className="pr-5">
              <h3 className="mb-0 ">100%</h3>
              <p className="mb-0 has-text-muted">Satisfaction</p>
            </div>
            <div className="border-left-gray-light"></div>
            <div className="px-5">
              <h3 className="mb-0 ">24/ 7</h3>
              <p className="mb-0 has-text-muted">Support</p>
            </div>
            <div className="border-left-gray-light"></div>

            <div className="pl-5">
              <h3 className="mb-0">100k+</h3>
              <p className="mb-0 has-text-muted">Sales</p>
            </div>
          </div>
        </Column>
        <Column>
          <img src={Designer} alt="designer" />
        </Column>
      </Columns>
    </section>
  );
};

export default Section6;
