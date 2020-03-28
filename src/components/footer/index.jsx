import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest
} from "react-icons/fa";
import Columns from "../columns";
import Column from "../column";

const Footer = props => {
  return (
    <footer className="has-background-gray-200">
      <br />
      <br />
      <Columns className="w-max-960 m-auto">
        <Column>
          <div>
            <h6 className="has-text-link is-size-4">Raksye.</h6>
            <span className="has-text-gray-200">A better way to build.</span>
            <br />
            {props.children}

            <br />
            <div className="flex f-row has-text-gray-200">
              <FaInstagram className="mr-3" size="25" />
              <FaFacebook className="mr-3" size="25" />
              <FaTwitter className="mr-3" size="25" />
              <FaPinterest className="mr-3" size="25" />
            </div>
          </div>
        </Column>

        <div className="d-flex">
          <Column>
            <h6 className="has-text-dark is-uppercase mb-3">Product</h6>
            <div className="d-flex f-column has-text-gray-200">
              <span className="mb-3 change-color-hoverable">Page Builder</span>
              <span className="mb-3 change-color-hoverable">UI Kit</span>
              <span className="mb-3 change-color-hoverable">Styleguide</span>
              <span className="mb-3 change-color-hoverable">Documentation</span>
              <span className="mb-3 change-color-hoverable">Changelog</span>
            </div>
          </Column>

          <Column>
            <h6 className="has-text-dark is-uppercase mb-3">Service</h6>
            <div className="d-flex f-column has-text-gray-200">
              <span className="mb-3 change-color-hoverable">Documentation</span>
              <span className="mb-3 change-color-hoverable">Changelog</span>
              <span className="mb-3 change-color-hoverable">Pagebuilder</span>
              <span className="mb-3 change-color-hoverable">UI Kit</span>
            </div>
          </Column>

          <Column>
            <h6 className="has-text-dark is-uppercase mb-3">Connect</h6>
            <div className="d-flex f-column has-text-gray-200">
              <span className="mb-3 change-color-hoverable">Page Builder</span>
              <span className="mb-3 change-color-hoverable">UI Kit</span>
              <span className="mb-3 change-color-hoverable">Styleguide</span>
              <span className="mb-3 change-color-hoverable">Documentation</span>
              <span className="mb-3 change-color-hoverable">Changelog</span>
              <span className="mb-3 change-color-hoverable">UI Kit</span>
              <span className="mb-3 change-color-hoverable">Styleguide</span>
            </div>
          </Column>

          <Column>
            <h6 className="has-text-dark is-uppercase mb-3">Legal</h6>
            <div className="d-flex f-column has-text-gray-200">
              <span className="mb-3 change-color-hoverable">Documentation</span>
              <span className="mb-3 change-color-hoverable">Changelog</span>
              <span className="mb-3 change-color-hoverable">Pagebuilder</span>
            </div>
          </Column>
        </div>
      </Columns>
    </footer>
  );
};

export default Footer;
