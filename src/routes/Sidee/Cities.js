import React from 'react';
import axios from 'axios';
import {Table} from "reactstrap";

class Cities extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            cities: [],
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        axios({
            method: 'get',
            url: "https://api.nahangapp.ir/V1.0.0/admin/cities",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                cities: res['data']['cities']
            })
            // console.log(this.state.cities);
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
                        <th>کد شهر</th>
                        <th>نام شهر</th>
                        <th> نام استان</th>
                    </tr>
                    </thead>
                    <tbody  style={{textAlign:"right" , height:"800"}}>
                    <td >
                        {
                            Object.keys(this.state.cities).map((key) => {
                                return <tr> {this.state.cities[key]['cityID']} </tr>
                            })
                        }
                    </td>

                    <td >
                        {
                            Object.keys(this.state.cities).map((key) => {
                                return <tr> {this.state.cities[key]['name']} </tr>
                            })
                        }
                    </td>

                    <td >
                        {
                            Object.keys(this.state.cities).map((key) => {
                                return <tr> {this.state.cities[key]['state']['name']} </tr>
                            })
                        }
                    </td>


                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default Cities;