import React, { Component } from "react";
import ReactDOM from "react-dom";
import IntlMessages from "Util/IntlMessages";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import ButNav from './../ButNav/ButNav';





import { connect } from "react-redux";
import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems
} from "Redux/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.addEvents = this.addEvents.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleProps = this.handleProps.bind(this);
    this.getContainer = this.getContainer.bind(this);
    this.getMenuClassesForResize = this.getMenuClassesForResize.bind(this);
    this.setSelectedLiActive = this.setSelectedLiActive.bind(this);

    this.state = {
      selectedParentMenu: "",
      viewingParentMenu: "",
    };
  }



  openRegin=(props)=>{
      this.props.history.push('/states')
  }

  handleWindowResize(event) {
    if (event && !event.isTrusted) {
      return;
    }
    const { containerClassnames } = this.props;
    let nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.props.setContainerClassnames(0, nextClasses.join(" "),this.props.selectedMenuHasSubItems);
  }

  handleDocumentClick(e) {
    const container = this.getContainer();
    let isMenuClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains("menu-button") ||
        e.target.classList.contains("menu-button-mobile"))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      (e.target.parentElement.classList.contains("menu-button") ||
        e.target.parentElement.classList.contains("menu-button-mobile"))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.parentElement &&
      e.target.parentElement.parentElement.classList &&
      (e.target.parentElement.parentElement.classList.contains("menu-button") ||
        e.target.parentElement.parentElement.classList.contains(
          "menu-button-mobile"
        ))
    ) {
      isMenuClick = true;
    }
    if (
      (container.contains(e.target) || container === e.target) ||
      isMenuClick
    ) {
      return;
    }
    this.toggle(e);
    this.setState({
      viewingParentMenu: ""
    })
  }

  getMenuClassesForResize(classes) {
    const { menuHiddenBreakpoint, subHiddenBreakpoint } = this.props;
    let nextClasses = classes.split(" ").filter(x => x != "");
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push("menu-mobile");
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter(x => x != "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        !nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses.push("menu-sub-hidden");
      }
    } else {
      nextClasses = nextClasses.filter(x => x != "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses = nextClasses.filter(x => x != "menu-sub-hidden");
      }
    }
    return nextClasses;
  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  toggle() {
    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(" ").filter(x => x != "")
      : "";

    if (currentClasses.includes("menu-sub-hidden") && menuClickCount == 3) {
      this.props.setContainerClassnames(2, containerClassnames,this.props.selectedMenuHasSubItems);
    } else if (
      currentClasses.includes("menu-hidden") ||
      currentClasses.includes("menu-mobile")
    ) {
      this.props.setContainerClassnames(0, containerClassnames,this.props.selectedMenuHasSubItems);
    }
  }

  handleProps() {
    this.addEvents();
  }

  addEvents() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  removeEvents() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }
  setSelectedLiActive() {
    const oldli = document.querySelector(".sub-menu  li.active");
    if (oldli != null) {
      oldli.classList.remove("active");
    }

    /* set selected parent menu */
    const selectedlink = document.querySelector(".sub-menu  a.active");
    if (selectedlink != null) {
      selectedlink.parentElement.classList.add("active");
      this.setState({
        selectedParentMenu: selectedlink.parentElement.parentElement.getAttribute(
          "data-parent"
        )
      });
    } else {
      var selectedParentNoSubItem = document.querySelector(".main-menu  li a.active");
      if (selectedParentNoSubItem != null) {
        this.setState({
          selectedParentMenu: selectedParentNoSubItem.getAttribute(
            "data-flag"
          )
        });
      } else if (this.state.selectedParentMenu == "") {
        this.setState({
          selectedParentMenu: "dashboards"
        });
      }

    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive();
      this.toggle();
      window.scrollTo(0, 0);
    }
    this.handleProps();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive();
  }

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener("resize", this.handleWindowResize);
  }

  changeDefaultMenuType(e, containerClassnames) {
    e.preventDefault();
    let nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.props.setContainerClassnames(0, nextClasses.join(" "),this.props.selectedMenuHasSubItems);
  }

  openSubMenu(e, selectedParent) {
    e.preventDefault();
    this.props.changeSelectedMenuHasSubItems(true)


    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(" ").filter(x => x != "")
      : "";

    if (!currentClasses.includes("menu-mobile")) {
      if (
        currentClasses.includes("menu-sub-hidden") &&
        (menuClickCount == 2 || menuClickCount == 0)
      ) {
        this.props.setContainerClassnames(3, containerClassnames,true);
      } else if (
        currentClasses.includes("menu-hidden") &&
        (menuClickCount == 1 || menuClickCount == 3)
      ) {
        this.props.setContainerClassnames(2, containerClassnames,true);
      } else if (
        currentClasses.includes("menu-default") &&
        !currentClasses.includes("menu-sub-hidden") &&
        (menuClickCount == 1 || menuClickCount == 3)
      ) {
        this.props.setContainerClassnames(0, containerClassnames,true);
      }
    } else {
      this.props.addContainerClassname(
        "sub-show-temporary",
        containerClassnames
      );
    }
    this.setState({
      viewingParentMenu: selectedParent
    });
  }

  changeSelectedParentHasNoSubmenu(e, menu) {
    this.setState({
      viewingParentMenu: menu
    })
    this.props.changeSelectedMenuHasSubItems(false)
    this.toggle();
  }

  render() {
    return (
      <div className="sidebar">
        <div className="main-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">

                  {/*If menu item has no sub items.*/}
                  {/*Note: If you want use hasn't sub menu item  : Set the menu default type to menu-sub-hidden*/}

                <NavItem
                  // className={classnames({
                  //   active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                  // })}
                >
                  <NavLink
                    to="/dashboard"
                    onClick={e => this.changeSelectedParentHasNoSubmenu(e, "dashboards")}
                  >
                    <i className="iconsminds-shop-4" />{" "}
                    <IntlMessages id="menu.dashboards" />
                  </NavLink>
                </NavItem>


                <NavItem
                    // className={classnames({
                    //   active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                    // })}
                >
                  <NavLink
                      to="/orders"
                      onClick={e => this.changeSelectedParentHasNoSubmenu(e, "dashboards")}
                  >
                    <i className="iconsminds-shop-4" />{" "}
                    <IntlMessages id="سفارشات" />
                  </NavLink>
                </NavItem>



                <NavItem
                    // className={classnames({
                    //   active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                    // })}
                >
                  <NavLink
                      to="/listusers"
                      onClick={e => this.changeSelectedParentHasNoSubmenu(e, "dashboards")}
                  >
                    <i className="iconsminds-shop-4" />{" "}
                    <IntlMessages id="کاربران" />
                  </NavLink>
                </NavItem>



                  <NavItem
                      // className={classnames({
                      //     active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                      // })}
                  >
                      <NavLink
                          to="/businesses"
                          onClick={e => this.changeSelectedParentHasNoSubmenu(e, "businesses")}
                      >
                          <i className="iconsminds-shop-4" />{" "}
                          <IntlMessages id="کسب و کارها" />
                      </NavLink>
                  </NavItem>




                <NavItem
                    // className={classnames({
                    //   active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                    // })}
                >
                  <NavLink
                      to="/transactions"
                      onClick={e => this.changeSelectedParentHasNoSubmenu(e, "dashboards")}
                  >
                    <i className="iconsminds-shop-4" />{" "}
                    <IntlMessages id="تراکنش ها" />
                  </NavLink>
                </NavItem>




                  <NavItem
                      // className={classnames({
                      //   active: ((this.state.selectedParentMenu == "applications" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "applications")
                      // })}
                  >
                      <NavLink
                          to="/app/dashboards/default"
                          // onClick={e => this.openSubMenu(e, "Regin")}
                      // onClick={this.openRegin(this.props)}

                      >
                          <i className="iconsminds-air-balloon-1" />{" "}
                          <IntlMessages id="مناطق" />
                      </NavLink>
                  </NavItem>


                <NavItem
                  // className={classnames({
                  //   active: ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                  // })}
                >
                  <NavLink
                    to="/app/dashboards/default"
                    onClick={e => this.openSubMenu(e, "dashboards")}
                  >
                    <i className="iconsminds-shop-4" />{" "}
                    <IntlMessages id="پارکینگ" />
                  </NavLink>
                </NavItem>


                <NavItem
                  // className={classnames({
                  //   active: ((this.state.selectedParentMenu == "pages" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "pages")
                  // })}
                >
                  <NavLink
                    to="/app/dashboards/default"
                    onClick={e => this.openSubMenu(e, "Sidee")}
                  >
                    <i className="iconsminds-digital-drawing" />{" "}
                    <IntlMessages id="خودرو" />
                  </NavLink>
                </NavItem>


                <NavItem
                  // className={classnames({
                  //   active: ((this.state.selectedParentMenu == "applications" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "applications")
                  // })}
                >
                  <NavLink
                    to="/app/applications"
                    onClick={e => this.openSubMenu(e, "applications")}
                  >
                    <i className="iconsminds-air-balloon-1" />{" "}
                    <IntlMessages id="اجاره خانه مبله" />
                  </NavLink>
                </NavItem>
                {/*<NavItem*/}
                {/*  className={classnames({*/}
                {/*    active: ((this.state.selectedParentMenu == "ui" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "ui")*/}
                {/*  })}*/}
                {/*>*/}
                {/*  <NavLink*/}
                {/*    to="/app/ui"*/}
                {/*    onClick={e => this.openSubMenu(e, "ui")}*/}
                {/*  >*/}
                {/*    <i className="iconsminds-pantone" />{" "}*/}
                {/*    <IntlMessages id="menu.ui" />*/}
                {/*  </NavLink>*/}
                {/*</NavItem>*/}
                {/*<NavItem*/}
                {/*  className={classnames({*/}
                {/*    active: ((this.state.selectedParentMenu == "menu" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "menu")*/}
                {/*  })}*/}
                {/*>*/}
                {/*  <NavLink*/}
                {/*    to="/app/menu"*/}
                {/*    onClick={e => this.openSubMenu(e, "menu")}*/}
                {/*  >*/}
                {/*    <i className="iconsminds-three-arrow-fork" />{" "}*/}
                {/*    <IntlMessages id="menu.menu" />*/}
                {/*  </NavLink>*/}
                {/*</NavItem>*/}
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>

        <div className="sub-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >

              <Nav
                className={classnames({
                  "d-block": ((this.state.selectedParentMenu == "dashboards" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "dashboards")
                })}
                data-parent="dashboards"
              >
                <NavItem>
                  <NavLink to="/app/dashboards/default">
                    <i className="simple-icon-briefcase" />{" "}
                    <IntlMessages id="menu.default" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/dashboards/analytics">
                    <i className="simple-icon-pie-chart" />{" "}
                    <IntlMessages id="menu.analytics" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/dashboards/ecommerce">
                    <i className="simple-icon-basket-loaded" />{" "}
                    <IntlMessages id="menu.ecommerce" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/dashboards/content">
                    <i className="simple-icon-doc" />{" "}
                    <IntlMessages id="menu.content" />
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav
                className={classnames({
                  "d-block": ((this.state.selectedParentMenu == "pages" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "pages")
                })}
                data-parent="pages"
              >
                <NavItem>
                  <NavLink to="/app/pages/data-list">
                    <i className="simple-icon-credit-card" />{" "}
                    <IntlMessages id="menu.data-list" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/pages/thumb-list">
                    <i className="simple-icon-list" />{" "}
                    <IntlMessages id="menu.thumb-list" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/pages/image-list">
                    <i className="simple-icon-grid" />{" "}
                    <IntlMessages id="menu.image-list" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/pages/details">
                    <i className="simple-icon-book-open" />{" "}
                    <IntlMessages id="menu.details" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/pages/search">
                    <i className="simple-icon-magnifier" />{" "}
                    <IntlMessages id="menu.search" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/app/pages/mailing">
                    <i className="simple-icon-envelope-open" />{" "}
                    <IntlMessages id="menu.mailing" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/app/pages/invoice">
                    <i className="simple-icon-bag" />{" "}
                    <IntlMessages id="menu.invoice" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <a href="/login" target="_blank">
                    <i className="simple-icon-user-following" />{" "}
                    <IntlMessages id="menu.login" />
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/register" target="_blank">
                    <i className="simple-icon-user-follow" />{" "}
                    <IntlMessages id="menu.register" />
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/forgot-password" target="_blank">
                    <i className="simple-icon-user-unfollow" />{" "}
                    <IntlMessages id="menu.forgot-password" />
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/error" target="_blank">
                    <i className="simple-icon-exclamation" />{" "}
                    <IntlMessages id="menu.error" />
                  </a>
                </NavItem>
              </Nav>
              <Nav
                className={classnames({
                  "d-block": ((this.state.selectedParentMenu == "applications" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "applications")
                })}
                data-parent="applications"
              >
                <NavItem>
                  <NavLink to="/app/applications/todo">
                    <i className="simple-icon-check" />{" "}
                    <IntlMessages id="menu.todo" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/applications/survey">
                    <i className="simple-icon-calculator" />{" "}
                    <IntlMessages id="menu.survey" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/applications/chat">
                    <i className="simple-icon-bubbles" />{" "}
                    <IntlMessages id="menu.chat" />
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav
                className={classnames({
                  "d-block": ((this.state.selectedParentMenu == "ui" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "ui")
                })}
                data-parent="ui"
              >
                <NavItem>
                  <NavLink to="/app/ui/alerts">
                    <i className="simple-icon-bell" />{" "}
                    <IntlMessages id="menu.alerts" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/badges">
                    <i className="simple-icon-badge" />{" "}
                    <IntlMessages id="menu.badges" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/buttons">
                    <i className="simple-icon-control-play" />{" "}
                    <IntlMessages id="menu.buttons" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/cards">
                    <i className="simple-icon-layers" />{" "}
                    <IntlMessages id="menu.cards" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/carousel">
                    <i className="simple-icon-picture" />{" "}
                    <IntlMessages id="menu.carousel" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/charts">
                    <i className="simple-icon-chart" />{" "}
                    <IntlMessages id="menu.charts" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/collapse">
                    <i className="simple-icon-arrow-up" />{" "}
                    <IntlMessages id="menu.collapse" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/dropdowns">
                    <i className="simple-icon-arrow-down" />{" "}
                    <IntlMessages id="menu.dropdowns" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/editors">
                    <i className="simple-icon-book-open" />{" "}
                    <IntlMessages id="menu.editors" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/form-layouts">
                    <i className="simple-icon-notebook" />{" "}
                    <IntlMessages id="menu.form-layouts" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/form-components">
                    <i className="simple-icon-puzzle" />{" "}
                    <IntlMessages id="menu.form-components" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/form-validations">
                    <i className="simple-icon-check" />{" "}
                    <IntlMessages id="menu.form-validations" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/icons">
                    <i className="simple-icon-star" />{" "}
                    <IntlMessages id="menu.icons" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/input-groups">
                    <i className="simple-icon-note" />{" "}
                    <IntlMessages id="menu.input-groups" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/jumbotron">
                    <i className="simple-icon-screen-desktop" />{" "}
                    <IntlMessages id="menu.jumbotron" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/maps">
                    <i className="simple-icon-map" />{" "}
                    <IntlMessages id="menu.maps" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/modal">
                    <i className="simple-icon-docs" />{" "}
                    <IntlMessages id="menu.modal" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/navigation">
                    <i className="simple-icon-cursor" />{" "}
                    <IntlMessages id="menu.navigation" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/popover-tooltip">
                    <i className="simple-icon-pin" />{" "}
                    <IntlMessages id="menu.popover-tooltip" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/sortable">
                    <i className="simple-icon-shuffle" />{" "}
                    <IntlMessages id="menu.sortable" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/ui/tables">
                    <i className="simple-icon-grid" />{" "}
                    <IntlMessages id="menu.tables" />
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav
                className={classnames({
                  "d-block": ((this.state.selectedParentMenu == "menu" && this.state.viewingParentMenu == "") || this.state.viewingParentMenu == "menu")
                })}
                data-parent="menu"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    onClick={e => this.changeDefaultMenuType(e, "menu-default")}
                  >
                    <i className="simple-icon-control-pause" />{" "}
                    <IntlMessages id="menu.default" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    onClick={e =>
                      this.changeDefaultMenuType(e, "menu-sub-hidden")
                    }
                  >
                    <i className="simple-icon-arrow-left" />{" "}
                    <IntlMessages id="menu.subhidden" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="#"
                    onClick={e => this.changeDefaultMenuType(e, "menu-hidden")}
                  >
                    <i className="simple-icon-control-start" />{" "}
                    <IntlMessages id="menu.hidden" />
                  </NavLink>
                </NavItem>
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ menu }) => {
  const { containerClassnames, subHiddenBreakpoint, menuHiddenBreakpoint, menuClickCount,selectedMenuHasSubItems } = menu;
  return { containerClassnames, subHiddenBreakpoint, menuHiddenBreakpoint, menuClickCount,selectedMenuHasSubItems };
};
export default withRouter(
  connect(
    mapStateToProps,
    { setContainerClassnames, addContainerClassname, changeDefaultClassnames,changeSelectedMenuHasSubItems }
  ) (ButNav)
);
