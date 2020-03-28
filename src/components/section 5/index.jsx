import React from "react";
import Card from "../card";
import Columns from "../columns";
import Column from "../column";
import Programming from "../../assets/programming.svg";

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="container section-padding">
        <div className="d-flex justify-center">
          <div className="box-center">
            <span className="has-text-weight-light is-size-3">
              We have lots of experience
            </span>
            <br />
            <br />
            <p className="has-text-muted is-size-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, corporis quibusdam. Enim iure eos, ex
              reprehenderit, quasi ad distinctio, libero explicabo culpa
              voluptate architecto quas!
            </p>
          </div>
        </div>
        <br />
        <br />

        <Card>
          <Columns>
            <Column>
              <img src={Programming} alt="Programming" />
            </Column>

            <Column className="m-auto">
              <p className="has-text-muted is-size-5 align-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus dolorem ipsa a ipsam. Mollitia doloribus id adipisci
                saepe in quasi minima veritatis obcaecati, inventore vel,
                debitis tempora eius ex totam?"
              </p>
            </Column>
          </Columns>
        </Card>
      </section>

      <div className="p-relative mt--15">
        <div className="shape shape-bottom"></div>
      </div>
    </React.Fragment>
  );
};

export default Section5;
