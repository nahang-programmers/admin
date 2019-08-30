import React from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import ButNav from './../containers/ButNav/ButNav.js';
import TopNav from './../containers/TopNav/index.js';
import Loading from './Loading.js';


class Orders extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            orders: [],
            data: [],
            isLoading:true
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.4:4300/V1.0.0";
        axios({
            method: "get",
            url: api + "/admin/orders/",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            // console.log(response);
            return response;
        }).then (res => {
            this.setState({
                isLoading:false,
                orders:res['data']['orders']
            });
        // console.log(this.state.orders);
        }).catch(error => {
            console.log(error);
        });
    }


    render(){

        const data = this.state.orders.map((items, key)=> {
            switch(items['kind']) {

                case "Parking":
                    this.setState({kind:'پارکینگ'})
                    break;


                case "ParkingOrder":
                    this.setState({kind:'پارکینگ'})
                    break;

                case "Home":
                    this.setState({kind:'خانه'})
                    break;

                case "HomeOrder":
                    this.setState({kind:'خانه'})
                    break;

                case "Rent":
                    this.setState({kind:'خودرو'})
                    break;

                case "RentOrder":
                    this.setState({kind:'خودرو'})
                    break;
            }

            return [[items['orderID']],[this.state.kind], [items['orders']['price']], [items['id']], [items['remainingPrice']], [items['price']]]
        })

        const columns = ["کد درخواست","نوع سرویس","","",""];

        const options = {
            filter: false,
            filterType: 'dropdown',
            responsive: 'stacked',
        };

    return(
        <div style={{paddingTop:"70px", paddingBottom:"90px"}}>
            <TopNav/>
            {this.state.isLoading ? <Loading/> : <MUIDataTable  title={"درخواست ها"} data={data} columns={columns} option={options}  />}
            <ButNav/>
        </div>
    );
    }
}

export default Orders;

//     render () {
//         return (
//
//             <React.Fragment>
//                 <Table striped>
//                     <thead style={{backgroundColor:"#F8EBFE"}}>
//                     <tr>
//                         <th> کد سفارش </th>
//                         <th> نام کسب و کار </th>
//                         <th> نوع سرویس </th>
//                         <th> نام و کد فردی مشتری </th>
//                         <th>نام و کد فردی پیمانکار </th>
//                         <th>مبلغ پرداخت شده</th>
//                         <th>مبلغ کل </th>
//                     </tr>
//                     </thead>
//                     <tbody  style={{textAlign:"right"}}>
//                     <td>
//                         {
//                             Object.keys(this.state.orders).map((key) => {
//                                 return <tr> {this.state.orders[key]['orderID']} </tr>
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {
//                             Object.keys(this.state.orders).map((key) => {switch(this.state.orders[key]['kind']){
//                                 case "Parking":
//                                     return <tr>پارکینگ</tr>
//                                     break;
//
//
//                                 case "ParkingOrder":
//                                     return <tr>پارکینگ </tr>
//                                 break;
//
//                                 case "Home":
//                                     return <tr>خانه</tr>
//                                     break;
//
//                                 case "HomeOrder":
//                                         return <tr>خانه</tr>
//                                 break;
//
//                                 case "Rent":
//                                     return <tr>خودرو</tr>
//                                     break;
//
//                                 case "RentOrder":
//                                     return <tr>خودرو</tr>
//                                 break;
//                             }
//
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {/*{*/}
//                         {/*    Object.keys(this.state.orders).map((key) => {*/}
//                         {/*        return <tr> {this.state.orders[key]['orders']['price'] } </tr>*/}
//                         {/*    })*/}
//                         {/*}*/}
//                     </td>
//                     <td>
//                         {/*{*/}
//                         {/*    Object.keys(this.state.orders).map((key) => {*/}
//                         {/*        return <tr> {this.state.orders[key]['id']} </tr>*/}
//                         {/*    })*/}
//                         {/*}*/}
//                     </td>
//                     <td>
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
//                     <td>
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
//
// export default Orders;