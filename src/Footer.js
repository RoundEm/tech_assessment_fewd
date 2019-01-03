import React, { Component } from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Assemble Books</h4>
                    </div>
                    {/* TODO: make each of these into a component? */}
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul className="list-unstyled align-items-left">
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;