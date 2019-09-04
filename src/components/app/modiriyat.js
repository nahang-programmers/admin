import React from 'react';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import {Button, Table} from 'reactstrap';
import Createform from './Form';
import axios from "axios";
// import Switch from '@material-ui/core/Switch';
import Switchh from './Switch';


class Modiriyat extends  React.Component {
    constructor(props) {
        super(props)
           this.state ={
                checkedA: false,
                checkedB: false,
                id:'',
                a:'',
                _id:'',
                users:[],
          renderform:false
        }
        this.handleClick=this.handleClick.bind(this);
    }



     handleChange(parkingBusiness){
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.4:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
        axios({
            method: "put",
            url: url + "/admin/users/" + "5d338d07870058174c76eee8",
            body: {
                "permissions": {
                    parkingBusiness : this.state.checkedA
                }
            },
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }



    handleChange(rentBusiness){
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.4:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
        axios({
            method: "put",
            url: url + "/admin/users/" + "5d582331dc844e174043b986",
            body: {
                "permissions": {
                    rentBusiness : this.state.checkedA
                }
            },
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }


    handleChange(homeBusiness){
        const token = localStorage.getItem('nahang_token');
        const url = "http://79.175.171.198:9993/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
        axios({
            method: "put",
            url: url + "/admin/users/" + "5d582331dc844e174043b986",
            body: {
                "permissions": {
                    homeBusiness : this.state.checkedA
                }
            },
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }



    handleChange(rentOrder){
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.4:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
        axios({
            method: "put",
            url: url + "/admin/users/" + "5d582331dc844e174043b986",
            body: {
                "permissions": {
                    rentOrder : this.state.checkedA
                }
            },
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }



    handleChange(homeOrder){
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.3:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        // console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
        axios({
            method: "put",
            url: url + "/admin/users/" + "5d582331dc844e174043b986",
            body: {
                "permissions": {
                    homeOrder : this.state.checkedA
                }
            },
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }

    handleClick = (props) =>{
        // console.log("clicked");
        this.setState({
            renderform: !this.state.renderform
        })
    }



    render() {
        return (
            <React.Fragment>
                <TopNav/>
                <Button onClick={this.handleClick} style={{marginTop:"5%"}}>ایجاد کاربر</Button>
                {this.state.renderform ? <Createform style={{position:"relative"}}/> : "null"}
                {this.state.renderform ? <div style={{ width:"20%", backgroundColor:"white", position:"absolute", marginRight:"31.3%",marginTop:"-36.3%",  height:"73.4%",borderRadius:"2%"}}>
                    {/*<span style={{display:"block", marginRight:"5%", marginTop:"5%", fontSize:"20px"}}> تعیین دسترسی </span>*/}
                 {/*parkingBusiness*/}
                      <Table>
                          <thead>
                          <tr>
                              <th >تعیین سطح دسترسی</th>
                          </tr>
                          </thead>
                          <tr>
                              <td>
                                  کسب و کار پارکینگ
                              </td>
                              <td>
                                  <Switchh style={{ marginRight:"60px", display:"block"}}
                                           checked={this.state.checkedB}
                                           onChange={this.handleChange("parkingBusiness")}
                                           value="checkedB"
                                           color="primary"
                                           marginRight="100px"
                                  />
                              </td>
                          </tr>
                          <tr>
                            <td>کسب و کار خودرو</td>
                              <td>
                                  <Switchh
                                      checked={this.state.checkedB}
                                      onChange={this.handleChange("rentBusiness")}
                                      value="checkedB"
                                      color="primary"
                                  />
                              </td>
                          </tr>
                           <tr>
                               <td>کسب و کار خانه</td>
                               <td>
                                   <Switchh style={{ marginRight:"70%"}}
                                            checked={this.state.checkedB}
                                            onChange={this.handleChange("homeBusiness")}
                                            value="checkedB"
                                            color="primary"
                                   />
                               </td>
                           </tr>
                          <tr>
                              <td>درخواست خودرو</td>
                              <td>
                                  <Switchh style={{ marginRight:"7%"}}
                                           checked={this.state.checkedB}
                                           onChange={this.handleChange("rentOrder")}
                                           value="checkedB"
                                           color="primary"
                                  />
                              </td>
                          </tr>
                          <tr>
                              <td>درخواست خانه</td>
                              <td>
                                  <Switchh style={{ marginRight:"70%"}}
                                           checked={this.state.checkedB}
                                           onChange={this.handleChange("homeOrder")}
                                           value="checkedB"
                                           color="primary"
                                  />
                              </td>
                          </tr>
                      </Table>

             </div> : "null" }
                <ButNav/>
            </React.Fragment>
        )
    }
}

export default  Modiriyat;

