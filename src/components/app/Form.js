

import React from 'react';
import {Button, Form, FormGroup, Label,Input } from 'reactstrap';
import Switches from './Switch';
import axios from "axios";
import Switchh from './Switch';


class Createform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switched: false,
             name: '',
            fnameerror:'',
            lnameerror:'',
            melicodeerror:'',
            mobileerror:'',
            karbarierror:''
        };
        this.fname=React.createRef();
        this.lname=React.createRef();
        this.melicode=React.createRef();
        this.karbari=React.createRef();
        this.mobile=React.createRef();
this.HandleChange=this.HandleChange.bind(this);
this.changee=this.changee.bind(this);
    }


    HandleChange (e) {
        const {name , value} = e.target;
        this.setState({
            [name] : value
        })

    }

   changee = (fname)=> {
       const a = this.state;
       // console.log(a);
       if (a.length < 0 || a > 100 ||a === "") {
           console.log(a);
           alert("فیلد نام کاربری باید پر باشد");
       }else {
           const pattern = new RegExp('/[a-z]/g');
           const result = pattern.test(a);
           if (result === true) {
               this.setState({
                   fname: a
               })
               console.log(this.state.a);
           } else {
               this.setState({
                   fnameerror: "نام وارد شده معتبر نمی باشد"
               })
           }
       }
       }

    // aChangee = (lname) => {
    //     const a = this.state;
    //     const pattern = new RegExp('/[a-z]/g');
    //     const result = pattern.test(a);
    //     if (result === true) {
    //         this.setState({
    //            lname: a
    //         })
    //     }else{
    //         this.setState({
    //             lnameerror: "نام خانوادگی وارد شده معتبر نمی باشد"
    //         })
    //     }
    // }
    //
    //
    // Cahangee = (melicode) => {
    //     const a = this.state;
    //     const pattern = new RegExp('/[a-z]/g');
    //     const result = pattern.test(a);
    //     if (result === true) {
    //         this.setState({
    //             melicode: a
    //         })
    //     }else{
    //         this.setState({
    //             melicodeerror: "کد ملی وارد شده معتبر نمی باشد"
    //         })
    //     }
    // }
    //
    // Chsangee = (mobile) => {
    //     const a = this.state;
    //     const pattern = new RegExp('/[a-z]/g');
    //     const result = pattern.test(a);
    //     if (result === true) {
    //         this.setState({
    //             mobile: a
    //         })
    //     }else{
    //         this.setState({
    //             mobileerror: "شماره همراه وارد شده معتبر نمی باشد"
    //         })
    //     }
    // }
    //
    // Chdangee = (karbari) => {
    //     const a = this.state;
    //     const pattern = new RegExp('/[a-z]/g');
    //     const result = pattern.test(a);
    //     if (result === true) {
    //         this.setState({
    //             karbari: a
    //         })
    //     }else{
    //         this.setState({
    //             karbarierror: "کد کاربری وارد شده معتبر نمی باشد"
    //         })
    //     }
    // }










    // componentDidMount() {
    //     const token = localStorage.getItem('nahang_token');
    //     const url = "http://192.168.1.4:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        // axios({
        //     method: 'post',
        //     url: url + "/admin/users",
        //     body: {
        //
        //     },
        //     headers: {'Authorization': `Bearer ${token}`}
        // }).then(response => {
        //     return response;
        // }).then(res => {
        //     this.setState({
        //         users: res['data']['users'],
        //         // _id: res['data']['users']['_id']
        //     })
        //     // console.log(this.state.users);
        // }).catch(error => {
        //     console.log(error);
        // })
    // }



    render() {
        return (
            <React.Fragment>
            <Form style={{height:"580px", width:"300px", backgroundColor:"white",marginRight:"200px", borderRadius:"2%"}}>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%", fontWeight: 'bold'}}>نام :</Label>
                    <Input type="text" ref={this.fname} name="firstname" id="firstname"  style={{marginRight:"5px", width:"90%", margin:"auto"}}   value={this.state.firstname}
                   onBlur={this.changee} onChange={this.HandleChange}/> <div style={{color:"red"}}>{this.state.fnameerror}</div>
                </FormGroup>
                <FormGroup>
                    <Label style={{marginTop:"20px", marginRight:"5%", fontWeight: 'bold'}}>نام خانوادگی :</Label>
                    <Input type="text" ref={this.lname} name="lastname" id="lastname"  style={{marginRight:"5px", width:"90%", margin:"auto"}} value={this.state.lastname} onChange={this.HandleChange}
                    onBlur={this.Changee}/> <div style={{color:"red"}}>{this.state.lnameerror}</div>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%", fontWeight: 'bold'}}>کد ملی :</Label>
                    <Input type="text" ref={this.melicode} name="melicode" id="melicode"  style={{marginRight:"5px", width:"90%", margin:"auto"}} value={this.state.melicode} onChange={this.HandleChange}
                    onBlur={this.Changee}/> <div style={{color:"red"}}>{this.state.melicodeerror}</div>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%", fontWeight: 'bold'}}>شماره همراه :</Label>
                    <Input type="text"  ref={this.mobile} name="mobile" id="mobile"  style={{marginRight:"5px", width:"90%", margin:"auto"}} value={this.state.mobile} onChange={this.HandleChange}
                    onBlur={this.Changee}/> <div style={{color:"red"}}>{this.state.mobileerror}</div>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%", fontWeight: 'bold'}}>کد کاربری :</Label>
                    <Input type="text"  ref={this.karbari} name="karbari" id="karbari"  style={{marginRight:"5px", width:"90%", margin:"auto"}} value={this.state.karbari} onChange={this.HandleChange}
                    onBlur={this.Changee}/><div style={{color:"red"}}>{this.state.karbarierror}</div>
                </FormGroup>
                {/*<Switches style={{marginLeft:"5px"}}/>*/}
                <Button style={{borderRadius:"5%", width:"40%", marginRight:"30%"}} onClick={this.changee}>تایید</Button>

            </Form>
            </React.Fragment>


        )
    }
}
export default Createform;


