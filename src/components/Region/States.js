
import React from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import Loading from './../Loading.js';




class States extends React.Component {
    constructor(props) {
         super(props)
         this.state={
             isLoading: true,
             states:[],
             data:[

             ]
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.4:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/admin/states",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            // console.log(response);
            return response;
        }).then(res => {
            this.setState({
                isLoading: false,
                states: res['data']['states']
            })
            // console.log(this.state.states);
        }).catch(error => {
            console.log(error);
        })
    }



    render() {

        const data = this.state.states.map((items, key) => {
            return [[items['name']], [items['stateID']]];
        });

        const columns = ["نام استان", "کد استان"]

        const options = {
            filter: false,
            filterType: 'dropdown',
            responsive: 'stacked',
        };

        return(
            <div style={{paddingTop:"70px", paddingBottom:"90px"}}>
                <TopNav/>
                {this.state.isLoading ? <Loading/> : <MUIDataTable  title={"مناطق / استان ها"} data={data} columns={columns} option={options}  />}
            <ButNav/>
            </div>
        );
    }
}

export default States;









// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import MaterialTable from 'material-table'
// import axios from 'axios';
//
// class States extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             states: [],
//             data: [],
//
//         }
//     }
//
//     componentDidMount() {
//         const token = localStorage.getItem('nahang_token');
//         axios({
//             method: 'get',
//             url: "https://api.nahangapp.ir/V1.0.0/admin/states",
//             headers: {'Authorization': `Bearer ${token}`}
//         }).then(response => {
//             console.log(response);
//             return response;
//         }).then(res => {
//             this.setState({
//                 states: res['data']['states']
//             })
//             console.log(this.state.states);
//         }).catch(error => {
//             console.log(error);
//         })
//     }
//
//
//     render() {
//         return (
//             <div style={{ maxWidth: '100%' }}>
//                 <MaterialTable
//                     columns={[
//                         { title: 'کد استان' , field: 'code' },
//                         { title: 'نام استان', field: 'name' },
//                         // { title: 'سال تولد', field: 'birthYear', type: 'numeric' },
//                         // { title: 'سال تولد', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
//                     ]}
//
//                        data= {
//                             code.keys(this.state.states).map((key) => {
//                                 return <tr> {this.state.states[key]['stateID']} </tr>
//
//                             })
//                         }
//
//                     title="Demo Title"
//                     options={{search: false}}
//                     components={{
//
//                         Pagination: props => (
//                             <div>
//                                 <h3> Pagingation</h3>
//                             </div>
//                         ),
//
//                         Toolbar: props => (
//                             <div>
//                                 <div style={{padding: '0px 10px'}}>
//                                     <h2>Toolbar</h2>
//                                 </div>
//                             </div>
//                         ),
//                     }}
//                 />
//             </div>
//         )
//     }
// }
//
// export default States;






// import React from 'react';
// import axios from 'axios';
// import {Table} from "reactstrap";
//
// class States extends React.Component {
//
//     constructor(props) {
// //         super(props)
// //         this.state={
// //             states: [],
// //         }
// //     }
// //
// //
// //     componentDidMount() {
// //         const token = localStorage.getItem('nahang_token');
// //         axios({
// //             method: 'get',
// //             url: "https://api.nahangapp.ir/V1.0.0/admin/states",
// //             headers: {'Authorization': `Bearer ${token}`}
// //         }).then(response => {
// //             return response;
// //         }).then(res => {
// //             this.setState({
// //                 states: res['data']['states']
// //             })
// //             console.log(this.state.states);
// //         }).catch(error => {
// //             console.log(error);
// //         })
// //     }
//
//     render() {
//         return (
//             <React.Fragment>
//
//                 <Table striped>
//                     <thead style={{backgroundColor:"#F8EBFE"}}>
//                     <tr>
//                         <th>کد استان</th>
//                         <th>نام استان</th>
//
//                     </tr>
//                     </thead>
//                     <tbody  style={{textAlign:"right" , height:"800"}}>
//                     <td >
//                         {
//                             Object.keys(this.state.states).map((key) => {
//                                 return <tr> {this.state.states[key]['stateID']} </tr>
//                             })
//                         }
//
//                     </td>
//
//                     <td >
//                         {
//                             Object.keys(this.state.states).map((key) => {
//                                 return <tr> {this.state.states[key]['name']} </tr>
//                             })
//                         }
//
//                     </td>
//
//
//
//                     </tbody>
//                 </Table>
//             </React.Fragment>
//         );
//     }
// }
//
// export default States;