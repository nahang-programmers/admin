import React from 'react';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import axios from "axios";
class Newrenthome extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            home:[],
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://79.175.171.198:9993/V1.0.0";
        axios({
            method: 'get',
            url: api + "/rhome/getall",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                // isLoading: false,
                home: res['data']['home']
            })
            // console.log(this.state.neworders['0']['ostan']);
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
export default Newrenthome;