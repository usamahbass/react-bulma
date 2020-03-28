import React from "react";
import { Input } from "../input";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Card from "../card";
import Columns from "../columns";
import Column from "../column";
import Team from "../../assets/teamspirit.svg";

const Section3 = () => {
  return (
    <section className="container section-padding">
      <Columns>
        <Column>
          <section className="wow animated fadeInLeft" data-wow-duration="1.5s">
            <Card className="contact has-background-transparent">
              <div className="card-image">
                <figure>
                  <img src={Team} alt="work" />
                </figure>
              </div>
              <div className="card-content contact">
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <button
                  className="button is-primary"
                  style={{ display: "block", width: "100%" }}
                >
                  Download a sample
                </button>
              </div>
            </Card>
          </section>
        </Column>
        <Column className="m-auto wow animated slideInRight">
          <section className="wow animated fadeInRight" data-wow-duration="3s">
            <span className="has-text-weight-light is-size-3">
              The most useful resource
            </span>
            <br />
            <span className="has-text-weight-light has-text-primary is-size-3">
              ever created for developers.
            </span>
            <br /> <br />
            <p className="has-text-muted is-size-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, commodi? Quaerat itaque est eum esse consequatur
              neque repudiandae et delectus autem dolores, ullam facere sequi
              provident illum porro perferendis enim!
            </p>
            <br />
            <Column className="d-flex space-around">
              <div className="has-badge badge-circle badge-primary mr-4">
                <IoIosCheckmarkCircle fontSize="1.5rem" />
              </div>
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="has-badge badge-circle badge-primary mr-4">
                <IoIosCheckmarkCircle fontSize="1.5rem" />
              </div>
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet.
              </p>
            </Column>
            <Column className="d-flex space-around">
              <div className="has-badge badge-circle badge-primary mr-4">
                <IoIosCheckmarkCircle fontSize="1.5rem" />
              </div>
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="has-badge badge-circle badge-primary mr-4">
                <IoIosCheckmarkCircle fontSize="1.5rem" />
              </div>
              <p className="has-text-muted is-size-5">
                Lorem ipsum dolor sit amet.
              </p>
            </Column>
          </section>
        </Column>
      </Columns>
    </section>
  );
};

export default Section3;
