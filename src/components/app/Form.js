

import React from 'react';
import {Button, Form, FormGroup, Label,Input } from 'reactstrap';
import Switches from './Switch';
import axios from "axios";
import Switchh from './Switch';


class Createform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.4:4300/V1.0.0";
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
    }



    render() {
        return (
            <React.Fragment>
            <Form style={{height:"580px", width:"300px", backgroundColor:"white",marginRight:"200px", borderRadius:"2%"}}>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%"}}>نام :</Label>
                    <Input type="text" name="name" id="name"  style={{marginRight:"5px", width:"90%", margin:"auto"}}/>
                </FormGroup>
                <FormGroup>
                    <Label style={{marginTop:"20px", marginRight:"5%"}}>نام خانوادگی :</Label>
                    <Input type="text" name="name" id="name"  style={{marginRight:"5px", width:"90%", margin:"auto"}}/>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%"}}>کد ملی :</Label>
                    <Input type="text" name="name" id="name"  style={{marginRight:"5px", width:"90%", margin:"auto"}}/>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%"}}>شماره همراه :</Label>
                    <Input type="text" name="name" id="name"  style={{marginRight:"5px", width:"90%", margin:"auto"}}/>
                </FormGroup>
                <FormGroup>
                    <Label  style={{marginTop:"20px", marginRight:"5%"}}>کد کاربری :</Label>
                    <Input type="text" name="name" id="name"  style={{marginRight:"5px", width:"90%", margin:"auto"}}/>
                </FormGroup>
                {/*<Switches style={{marginLeft:"5px"}}/>*/}
                <Button style={{borderRadius:"10%"}}>تایید</Button>

            </Form>
            </React.Fragment>
        )
    }
}
export default Createform;


