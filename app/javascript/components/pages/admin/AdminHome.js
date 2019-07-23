import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faMapMarkedAlt,
  faListUl,
  faIdCard,
  faHome,
  faSadCry
} from "@fortawesome/free-solid-svg-icons";

import OpenTabs from "./OpenTabs";
import BarProfile from "./BarProfile";
import CreateBarProfile from "./CreateBarProfile";
import Menu from "./Menu";
import "./admin.css";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      openTabs: [],
      current_admin_profile: {},
      item: {},
      newTabHistory: {
        name: "",
        price: "",
        tab_id: ""
      }
    };
  }

  //fetch will get current admin profiles
  componentDidMount() {
    this.getData();
  }

  // gets current admin profile, the menu for current admin and any open tabs at the admin
  getData = () => {
    this.getAdminProfile();
    this.getMenu();
    this.getOpenTabs();
  };

  getAdminProfile = () => {
    const { current_admin_id } = this.props;
    fetch(`/admin_profiles/${current_admin_id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(current_admin_profile => {
        this.setState({ current_admin_profile });
      });
  };

  //creates new profile if profile has not been created
  handleNewProfile = admin_profile_params => {
    console.log(admin_profile_params);
    fetch("/admin_profiles", {
      body: JSON.stringify(admin_profile_params),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then(response => response.json());
  };

  //updates profile with info from profile.js
  handleUpdateProfile = admin_profile_params => {
    const { current_admin_id } = this.props;
    fetch(`/admin_profiles/${current_admin_id}`, {
      body: JSON.stringify(admin_profile_params),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    })
      .then(response => response.json())
      .then(current_admin_profile => this.setState({ current_admin_profile }));
  };

  //fetch gets menu
  getMenu = () => {
    return fetch("/menus", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(menu => {
        this.setState({ menu });
      });
  };

  //gets specific menu item for CustomerTab.js
  getMenuItem = itemId => {
    fetch(`/menus/${itemId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(item => {
        this.setState({ item });
      });
  };

  //gets tab where admin_id=current_admin_id
  getOpenTabs = () => {
    fetch("/admin_open_tabs", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(openTabs => {
        this.setState({ openTabs });
      });
  };

  //adds item to menu
  handleAddItem = newItem => {
    const menu_params = {
      name: newItem.name,
      price: parseFloat(newItem.price)
    };
    console.log(menu_params);
    fetch("/menus.json", {
      body: JSON.stringify(menu_params),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(menu => {
        this.setState({ menu });
      });
  };

  //deletes item from menu
  handleDeleteItem = itemID => {
    fetch(`/menus/${itemID}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(menu => {
        this.setState({ menu });
      });
  };

  //closes out a customer (turns open:true to open:false)
  handleCloseTab = tabId => {
    fetch(`/tabs/${tabId}`, {
      body: JSON.stringify({ open: false }),
      headers: { "Content-Type": "application/json" },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(openTabs => {
        this.setState({ openTabs });
      });
  };

  //adds item to order (TabHistories)
  handleAddOrder = (currentTabTotal, tabId) => {
    const { name, price } = this.state.item;
    const newItem = { name: name, price: parseFloat(price), tab_id: tabId };
    fetch("/tab_histories", {
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(openTabs => {
        this.setState({ openTabs });
      });
  };

  // deletes item from order
  handleDeleteOrder = tabHistoryId => {
    fetch(`/tab_histories/${tabHistoryId}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(openTabs => {
        this.setState({ openTabs });
      });
  };

  render() {
    const {
      admin_logged_in,
      admin_sign_in_route,
      admin_sign_out_route,
      current_admin_id
    } = this.props;
    const {
      customers,
      menu,
      current_admin_profile,
      openTabs,
      item
    } = this.state;

    return (
      <React.Fragment>
        <Container>
          <Router>
            <div>
              {admin_logged_in && (
                <Nav>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <NavItem className="admin_open_tabs">
                          <NavLink id="openTabs" href="/admin_home/open_tabs">
                            Open Tabs
                            <br />
                            <FontAwesomeIcon icon={faBeer} size="6x" />
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm">
                        <NavItem className="admin_Menu">
                          <NavLink id="adminMenu" href="/admin_home/menu">
                            Menu
                            <br />
                            <FontAwesomeIcon icon={faListUl} size="6x" />
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm">
                        <NavItem className="admin_Profile">
                          <NavLink id="adminProfile" href="/admin_home/profile">
                            Profile
                            <br />
                            <FontAwesomeIcon icon={faIdCard} size="6x" />
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm">
                        <NavItem className="admin_Signout">
                          <NavLink
                            id="adminSignOut"
                            href={admin_sign_out_route}
                          >
                            Sign Out
                            <br />
                            <FontAwesomeIcon icon={faSadCry} size="6x" />
                          </NavLink>
                        </NavItem>
                      </div>
                    </div>
                  </div>
                </Nav>
              )}

              <Route
                path="/admin_home/open_tabs"
                exact
                render={props => (
                  <OpenTabs
                    {...props}
                    customers={customers}
                    handleCloseTab={this.handleCloseTab}
                    handleAddOrder={this.handleAddOrder}
                    handleDeleteOrder={this.handleDeleteOrder}
                    menu={menu}
                    openTabs={openTabs}
                    getMenu={this.getMenu}
                    getOpenTabs={this.getOpenTabs}
                    getMenuItem={this.getMenuItem}
                  />
                )}
              />
              <Route
                path="/admin_home/menu"
                exact
                render={props => (
                  <Menu
                    menu={menu}
                    handleAddItem={this.handleAddItem}
                    handleDeleteItem={this.handleDeleteItem}
                    getMenu={this.getMenu}
                    current_admin_id={current_admin_id}
                  />
                )}
              />
              <Route
                path="/admin_home/profile"
                exact
                render={props =>
                  current_admin_profile === null ? (
                    <CreateBarProfile
                      handleNewProfile={this.handleNewProfile}
                    />
                  ) : (
                    <BarProfile
                      current_admin_profile={current_admin_profile}
                      handleUpdateProfile={this.handleUpdateProfile}
                    />
                  )
                }
              />
            </div>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default AdminHome;
