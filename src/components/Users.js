import React from 'react';
import MaterialTable from 'material-table';
// import {users} from './Services';
import axios from "axios";


class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         data: [],
            users:[],
            isLaoding:true,
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.4:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/admin/users",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                users: res['data']['users']
            })
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
            <React.Fragment>

                <Table striped>
                    <thead style={{backgroundColor:"#F8EBFE"}}>
                    <tr>
                        <th>موبایل</th>
                        <th>نام خانوادگی</th>
                        <th>نام</th>
                        <th>ردیف</th>
                    </tr>
                    </thead>
                    <tbody  style={{textAlign:"right" , height:"800"}}>
                    <td >
                        {
                            Object.keys(this.state.users).map((key) => {
                                return <tr className="tr-users"> {this.state.users[key]['mobile']} </tr>
                            })
                        }
                    </td>

                    <td>
                    </td>

                    <td>
                        {
                            Object.keys(this.state.users).map((key) => {
                                return <tr className="tr-users"> {this.state.users[key]['name']} </tr>
                            })
                        }
                    </td>
                    <td>
                        {
                            Object.keys(this.state.users).map((key) => {
                                return <tr className="tr-users"> {this.state.users[key]['userID']} </tr>
                            })
                        }
                    </td>


                    </tbody>
                </Table>
            </React.Fragment>
        );
    }


}
export default Users;