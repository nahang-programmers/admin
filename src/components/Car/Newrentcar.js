import React from 'react';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import axios from 'axios';


class Newrentcar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            newrentcar:[],
        }
    }



    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        const api = "http://79.175.171.198:9993/V1.0.0";
        axios ({
            method:'get',
            url:api + "/rcar/getall",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then (response => {
            console.log(response);
            return response;
        }).then (res => {
            this.setState({
                newrentcar: res['data']['car']
            })
            // console.log(this.state.newrentcar);
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
          <React.Fragment>
              <TopNav/>
              <ButNav/>
          </React.Fragment>
        )
    }
}
export default Newrentcar;