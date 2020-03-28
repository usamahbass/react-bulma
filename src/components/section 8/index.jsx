import React from "react";
import { IoMdHelp } from "react-icons/io";
import Columns from "../columns";
import Column from "../column";
import { FiArrowRight } from "react-icons/fi";

const Section8 = () => {
  return (
    <section className="pt-15 has-background-blue-dark">
      {" "}
      <Columns className="w-max-960 m-0">
        <Column>
          <div className="d-flex justify-center">
            <div className="has-badge badge-circle badge-primary mr-4">
              <IoMdHelp fontSize="1.5rem" />
            </div>
            <div className="ml-5">
              <span className="has-text-weight-light has-text-white is-size-5">
                Lorem ipsum dolor sit amet.
              </span>
              <br />
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                nulla!
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="d-flex">
            <div className="has-badge badge-circle badge-primary mr-4">
              <IoMdHelp fontSize="1.5rem" />
            </div>
            <div className="ml-5">
              <span className="has-text-weight-light has-text-white is-size-5">
                Lorem ipsum dolor sit amet.
              </span>
              <br />
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                nulla!
              </p>
            </div>
          </div>
        </Column>

        <Column>
          <div className="d-flex">
            <div className="has-badge badge-circle badge-primary mr-4">
              <IoMdHelp fontSize="1.5rem" />
            </div>
            <div className="ml-5">
              <span className="has-text-weight-light has-text-white is-size-5">
                Lorem ipsum dolor sit amet.
              </span>
              <br />
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                nulla!
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="d-flex">
            <div className="has-badge badge-circle badge-primary mr-4">
              <IoMdHelp fontSize="1.5rem" />
            </div>
            <div className="ml-5">
              <span className="has-text-weight-light has-text-white is-size-5">
                Lorem ipsum dolor sit amet.
              </span>
              <br />
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                nulla!
              </p>
            </div>
          </div>
        </Column>
      </Columns>
      <br />
      <br />
      <br />
      <div className="d-flex justify-center">
        <div className="box-center">
          <span className="has-badge badge-link badge-custom is-uppercase">
            get started
          </span>
          <br />
          <br />
          <span className="has-text-white is-size-3">
            Get Raksye and use now.
          </span>
          <br />
          <br />
          <p className="has-text-muted is-size-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id minima,
            nisi tempora eum ad laboriosam quaerat nihil saepe est maiores
            quisquam. Praesentium doloremque voluptatum ipsa.
          </p>
          <br />
          <br />
          <button className="button is-medium is-primary">
            Get Started <FiArrowRight size={30} />
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Section8;
