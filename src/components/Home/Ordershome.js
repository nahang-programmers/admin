import React from 'react';
import axios from 'axios';
import ButNav from './../../containers/ButNav/ButNav.js';
import TopNav from './../../containers/TopNav/index.js';
import Loading from './../Loading.js';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import Icons, { Delete } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBox from "@material-ui/icons/AddBox";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Cancel from "@material-ui/icons/Cancel";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import FilterList from "@material-ui/icons/FilterList";
import { IconButton } from 'material-ui';
import ViewColumn from "@material-ui/icons/ViewColumn";




class Ordershome extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            tables:'',
            orders: [],
            data: [],
            isLoading: true,
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.3:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/admin/orders/kind/HomeOrder",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                isLoading: false,
                orders: res['data']['orders']
            })
            console.log(this.state.orders);
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        const  columns= [

            {title: 'کد درخواست', field: 'name',},
            {title: 'نام کسب و کار', field: 'surname'},
            {title: "نوع سرویس", field: "birthYear"},
            {title: "نام و کد فردی مشتری", field: "birthCity"},
            {title: 'نام و کد فردی پیمانکار', field: 'name',},
            {title: 'مبلغ پرداخت شده', field: 'name',},
            {title: 'مبلغ کل', field: 'name',}

        ]

        const data = this.state.orders.map((items, key) => {
            switch (items['kind']) {
                case "Parking":
                    this.setState({kind: "پارکینگ"});
                    break;

                case "ParkingOrder":
                    this.setState({kind: "پارکینگ"});
                    break;

                case "Home":
                    this.setState({kind: "خانه"})  ;
                    break;

                case "HomeOrder":
                    this.setState({kind: "خانه"});
                    break;

                case "Rent":
                    this.setState({kind: "اجاره"});
                    break;

                case "RentOrder":
                    this.setState({kind: "اجاره"});
                    break;
            }

            return [[items['orderID']], [items['name']], [this.state.kind], [items['customer']['userID']], [items['contractor']['userID']],[items['remainingPrice']],[items['price']]];
        });

        const tableIcons = {
            Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            // Cancel: forwardRef((props, ref) => <Cancel {...props} ref={ref} />),
            // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
            // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
            // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
            // SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),


        };



        return(
            <div>
                <TopNav/>
                {this.state.isLoading ? <Loading/> :<MaterialTable
                    style={{
                        minHeight: "5%",
                        width: "90%",
                        fontSize: "10px",
                        margin: "7% auto",
                        direction: "rtl",
                        // alignContent: "right",
                    }}

                    icons={tableIcons}
                    title="درخواست خانه"

                    options={{
                        addRowPosition: "last",
                        search: true,
                        paging: true,
                        actionsColumnIndex: 8,
                        showTextRowsSelected: true,
                        headerStyle: {
                            flexDirection: "unset"
                        }

                    }}


                    editable={
                        {
                            onRowAdd: () => {
                            },
                            onRowUpdate: () => {
                            },
                            onRowDelete: () => {
                            },

                        }
                    }


                    columns={columns}
                    data={data}


                />
                }

                <ButNav/>
            </div>
        );
    }
}

export default Ordershome;

//     render() {
//         return (
//             <React.Fragment>
//
//                 <Table striped>
//                     <thead style={{backgroundColor:"#F8EBFE"}}>
//                     <tr>
//                         <th>کد سفارش </th>
//                         <th>نام کسب و کار</th>
//                         <th>نوع سرویس</th>
//                         <th> نام و کد فردی مشتری </th>
//                         <th>نام و کد فردی پیمانکار</th>
//                         <th> مبلغ پرداخت شده </th>
//                         <th> مبلغ کل </th>
//
//                     </tr>
//                     </thead>
//                     <tbody  style={{textAlign:"right" , height:"800"}}>
//                     <td >
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['orderID']} </tr>
//                             })
//                         }
//
//                     </td>
//
//                     <td >
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['business']['name']} </tr>
//                             })
//                         }
//
//                     </td>
//                     <td >
//
//                         {
//                             Object.keys(this.state.orders).map((key) => {switch(this.state.orders[key]['kind']){
//                                 case "Parking":
//                                     return <tr>پارکینگ</tr>
//                                     break;
//
//                                 case "ParkingOrder":
//                                     return  <tr>پارکینگ</tr>
//                                     break;
//
//                                 case "Home":
//                                     return <tr>خانه</tr>
//                                     break;
//
//                                 case "HomeOrder":
//                                     return <tr>خانه</tr>
//                                     break;
//
//                                 case "Rent":
//                                     return <tr>خودرو</tr>
//                                     break;
//
//                                 case "RentOrder":
//                                     return <tr>خودرو</tr>
//                                     break;
//                             }
//
//                             })
//                         }
//                     </td>
//
//                     <td >
//
//
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['customer']['name']}- {this.state.orders[key]['customer']['userID']} </tr>
//                             })
//                         }
//                     </td>
//                     <td >
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['contractor']['name']}-{this.state.orders[key]['contractor']['userID']} </tr>
//                             })
//                         }
//
//
//                     </td>
//                     <td>
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['remainingPrice']} </tr>
//                             })
//                         }
//
//                     </td>
//                     <td >
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['price']} </tr>
//                             })
//                         }
//
//                     </td>
//
//
//                     </tbody>
//                 </Table>
//                 <ButNav/>
//             </React.Fragment>
//         );
//     }
// }
//
// export default Ordershome;