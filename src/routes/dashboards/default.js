import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { injectIntl} from 'react-intl';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Progress,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  CustomInput,
  CardHeader,
  Table
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import { CalendarToolbar } from "Components/Calendar/CalendarToolbar";
import { PolarShadow, LineShadow, SmallLineChart } from "Components/Charts";
import {
  visitChartConfig,
  conversionChartConfig,
  lineChartConfig,
  polarChartConfig,
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "Constants/chartConfig";
import ButNav from "./../../containers/ButNav/ButNav.js";
import TopNav from "./../../containers/TopNav/index.js";
import Listusers from "./../../components/Listusers";
import IconButton from '@material-ui/core/IconButton';

// import {users} from './../../components/Services';




import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactTable from "react-table";
import CircularProgressbar from "react-circular-progressbar";
import { Chart } from "react-chartjs-2";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";


import "chartjs-plugin-datalabels";
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-table/react-table.css";

import ticketsData from "Data/tickets.json";

import axios from 'axios';



Chart.defaults.global.plugins.datalabels.display = false;


const tickets = ticketsData.data;


BigCalendar.momentLocalizer(moment);

class DefaultDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);

        this.state = {
            data: [],
            selectedOptions: [],
            selectedOptionsType: [],
            arr: {
                ok: ''
            },
        };
    }



    handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChangeType = selectedOptionsType => {
    this.setState({ selectedOptionsType });
  };

  listusers=(props) => {
    this.props.history.push('/listusers')
  }
  darkhast=(props) => {
    this.props.history.push('/listorders')
  }
  business=(props) => {
    this.props.history.push('/businesses')
  }
  Transactions=(props) => {
    this.props.history.push('/transactions')
  }


  render() {
    const {messages} = this.props.intl;
      return (
      <Fragment>
          <TopNav/>
          
          <Row>
          
          <IconButton onClick={this.listusers} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../../assets/img/users.png"} style={{height:"200px", width:"130px"}}/></IconButton>
          <IconButton onClick={this.darkhast} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../../assets/img/darkhast.png"} style={{height:"200px", width:"130px"}}/></IconButton>
          <IconButton onClick={this.business} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../../assets/img/business.png"} style={{height:"200px", width:"130px"}}/></IconButton>
          <IconButton onClick={this.Transactions} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../../assets/img/transactions.png"} style={{height:"200px", width:"130px"}}/></IconButton>
          
    
          </Row>
         
         
        <Row>
          <Colxx lg="12" xl="6" className="div-bazdid">
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={false}
              >
              </ReactSiemaCarousel>
            </div>
          </Colxx>
        </Row>



          <Row>
              <Colxx sm="12" md="6" className="mb-4">
                  <Card className="dashboard-filled-line-chart">
                      <CardBody>
                          <div className="float-left float-none-xs">
                              <div className="d-inline-block">
                                  <h5 className="d-inline">
                                      <IntlMessages id="dashboards.website-visits" />
                                  </h5>
                                  <span className="text-muted text-small d-block">

                      <IntlMessages id="dashboards.unique-visitors" />
                    </span>
                              </div>
                          </div>

                          <div className="btn-group float-right float-none-xs mt-2">
                              <UncontrolledDropdown>
                                  <DropdownToggle
                                      caret
                                      color="primary"
                                      className="btn-xs"
                                      outline
                                  >
                                      <IntlMessages id="dashboards.this-week" />
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                      <DropdownItem>
                                          <IntlMessages id="dashboards.last-week" />
                                      </DropdownItem>
                                      <DropdownItem>
                                          <IntlMessages id="dashboards.this-month" />
                                      </DropdownItem>
                                  </DropdownMenu>
                              </UncontrolledDropdown>
                          </div>
                      </CardBody>

                      <div className="chart card-body pt-0">
                          <LineShadow {...visitChartConfig} />
                      </div>
                  </Card>
              </Colxx>
          </Row>



        <Row>
          
          <Colxx lg="4" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.tickets" />
                </CardTitle>
                <div className="dashboard-list-with-user">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {tickets.map((ticket, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-row mb-3 pb-3 border-bottom"
                        >
                          <NavLink to="/app/pages/details">
                            <img
                              src={ticket.thumb}
                              alt={ticket.label}
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>

                          <div className="pl-3 pr-2">
                            <NavLink to="/app/pages/details">
                              <p className="font-weight-medium mb-0 ">
                                {ticket.label}
                              </p>
                              <p className="text-muted mb-0 text-small">
                                {ticket.date}
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
<ButNav/>

      </Fragment>
    );
  }
}
export default injectIntl(DefaultDashboard);
