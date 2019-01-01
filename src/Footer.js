import React, { Component } from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';


class Footer extends Component {
  render() {
    return (
        <footer classNam="page-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 align-items-center">
                        <h4>Assemble Books</h4>
                    </div>
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Link 1</a>
                            </li>
                            <li>
                                <a href="/">Link 2</a>
                            </li>
                            <li>
                                <a href="/">Link 3</a>
                            </li>
                            <li>
                                <a href="/">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Link 1</a>
                            </li>
                            <li>
                                <a href="/">Link 2</a>
                            </li>
                            <li>
                                <a href="/">Link 3</a>
                            </li>
                            <li>
                                <a href="/">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Link 1</a>
                            </li>
                            <li>
                                <a href="/">Link 2</a>
                            </li>
                            <li>
                                <a href="/">Link 3</a>
                            </li>
                            <li>
                                <a href="/">Link 4</a>
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