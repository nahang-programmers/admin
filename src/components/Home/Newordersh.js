import React from 'react';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import Test12 from './../testtt';
import axios from 'axios';
// import Test from "./../app/Component";
import Rorders from "./madarek/Rorders";


class Newordersh extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changePage: false,
            data: null,
            neworders : [],
            isshowing: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data){
        // console.log(data);
        this.setState({
            data: data,
            changePage: true,
        })

    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.3:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/home/getall",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                // isLoading: false,
                neworders: res['data']['home']
            })
            // console.log(this.state.neworders['0']['ostan']);
        }).catch(error => {
            console.log(error);
        })
    }



    render() {
        return (
            this.state.changePage==true ? <Rorders data={this.state.data}/> : <React.Fragment>
                <TopNav/>
                 <Table className='grid-container'>
                    <thead style={{height:"40px"}} >

                    <th className='grid-item1'>نام و نام خانوادگی </th>
                    <th className='grid-item1'>نام پدر</th>
                    <th className='grid-item1'>آدرس</th>
                    <th className='grid-item1'>سایر مشخصات</th>

                    </thead>

                    {Object.keys(this.state.neworders).map((key, items)=>
                        <tr className='trows' >

                            <td className='grid-item2' >
                                {this.state.neworders[key]['name']}
                            </td>

                            <td className='grid-item2'>
                                {this.state.neworders[key]['fatherName']}
                            </td>

                            <td className='grid-item2'>
                                {this.state.neworders[key]['address']}
                            </td>

                            <td className='grid-item2'><Button  onClick={this.handleClick.bind(this, this.state.neworders[key])}>مشخصات</Button></td>
                        </tr>
                    )}

                </Table>
                <ButNav/>
            </React.Fragment>

        )
    }
}

export default  Newordersh;