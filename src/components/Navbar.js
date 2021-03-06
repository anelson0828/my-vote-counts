import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/" onKeyDown={() => {}}>
                Home
              </Link>
              <Link
                className="navbar-item"
                to="/voter-checklist"
                onKeyDown={() => {}}
              >
                Voter Checklist
              </Link>
              {/* <Link className="navbar-item" to="/policies">
                Policies
              </Link> */}
              {/* <Link className="navbar-item" to="/contact" onKeyDown={() => {}}>
                Contact
              </Link>
              <Link
                className="navbar-item"
                to="/contact/examples"
                onKeyDown={() => {}}
              >
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={() => {}}
                role="button"
              ></a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
