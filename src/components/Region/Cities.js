




import React from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import Loading from './../Loading.js';


class Cities extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            isLoading: true,
            cities: [],
            data: []
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api ="https://api.nahangapp.ir/V1.0.0";
        const api ="http://192.168.1.4:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/admin/cities",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            console.log(response);
            return response;
        }).then(res => {
            this.setState({
                isLoading: false,
                cities: res['data']['cities']
            })
            console.log(this.state.cities);
        }).catch(error => {
            console.log(error);
        })
    }

render() {
    const data= this.state.cities.map((items, key) => {
        return [[items['cityID']], [items['name']],[items['state']['name']]]
    });

    const columns= ["کد شهر","نام شهر","نام استان"]

    const options = {
        filter: false,
        filterType: 'dropdown',
        responsive: 'stacked',
    };
    return(
        <div style={{paddingTop:"70px", paddingBottom:"90px"}}>
            <TopNav/>
            {this.state.isLoading ? <Loading/> : <MUIDataTable  title={"مناطق / شهرها"} data={data} columns={columns} option={options}  />}
            <ButNav/>
        </div>
    );

    }
}

export default Cities;





