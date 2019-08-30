import React from 'react';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import {Button} from 'reactstrap';
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
            url: url + "/admin/users/" + "5d582331dc844e174043b986",
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
        const url = "http://192.168.1.4:4300/V1.0.0";
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
        const url = "http://192.168.1.4:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        console.log("CHANGEDDDDDDDDDDDDDDDDDDDDDD");
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


                 {/*parkingBusiness*/}
               <Switchh style={{ marginRight:"50%", display:"block"}}
                        checked={this.state.checkedB}
                        onChange={this.handleChange("parkingBusiness")}
                        value="checkedB"
                        color="primary"
               /><span>parkingBusiness</span>


                 {/*rentBusiness*/}
                 <div style={{marginTop:"5%"}}>
                 <Switchh
                          checked={this.state.checkedB}
                          onChange={this.handleChange("rentBusiness")}
                          value="checkedB"
                          color="primary"
                 /><span>rentBusiness</span>
                 </div>


                 {/*homeBusiness*/}
                 <div style={{marginTop:"5%"}}>
                 <Switchh style={{ marginRight:"70%"}}
                          checked={this.state.checkedB}
                          onChange={this.handleChange("homeBusiness")}
                          value="checkedB"
                          color="primary"
                 /><span>homeBusiness</span>
                 </div>


                 {/*rentOrder*/}
                 <div style={{marginTop:"5%"}}>
                 <Switchh style={{ marginRight:"70%"}}
                          checked={this.state.checkedB}
                          onChange={this.handleChange("rentOrder")}
                          value="checkedB"
                          color="primary"
                 /><span>rentOrder</span>
                 </div>


                 {/*homeOrder*/}
                 <div style={{marginTop:"5%"}}>
                 <Switchh style={{ marginRight:"70%"}}
                          checked={this.state.checkedB}
                          onChange={this.handleChange("homeOrder")}
                          value="checkedB"
                          color="primary"
                 /><span>homeOrder</span>
                 </div>


             </div> : "null" }
                <ButNav/>
            </React.Fragment>
        )
    }
}

export default  Modiriyat;

