import React from 'react';
import axios from 'axios';

class Buycar extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            bhome:[]
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://79.175.171.198:9993/V1.0.0";
        axios({
            method: 'get',
            url: api + "/bhome/getall",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                // isLoading: false,
                bhome: res['data']['home']
            })
            // console.log(this.state.neworders['0']['ostan']);
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
            <React.Fragment>
                <div>rfrfrfrf</div>
            </React.Fragment>
        )
    }
}

export default Buycar;