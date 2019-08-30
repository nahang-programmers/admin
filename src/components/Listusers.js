import React from 'react';
import axios from "axios";
import ButNav from './../containers/ButNav/ButNav.js';
import TopNav from './../containers/TopNav/index.js';
import Loading from './Loading.js';
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
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import FilterList from "@material-ui/icons/FilterList";
import { IconButton } from 'material-ui';
import ViewColumn from "@material-ui/icons/ViewColumn";




class Listusers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            users:[],
            _id: "",
            isLoading: false,
            table:'',
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.3:4300/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        axios({
            method: 'get',
            url: url + "/admin/users",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            // console.log(response);
            return response;
        }).then(res => {
            this.setState({
                isLoading:false,
                users: res['data']['users'],
                // _id: res['data']['users']['_id']
            })
            // console.log(this.state.users);
        }).catch(error => {
            console.log(error);
        })
    }


    test(){
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.3:4300/V1.0.0/admin/users";
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append("Authorization", `Bearer ${token}`);


        const options = {
            method: 'POST',
            body: JSON.stringify({
                name:"mari",
                wallet:284848,

            }),
            myHeaders
        };

        fetch(url, options)
            .then(res => res.json())
            .then(result => {
                    console.log(result)
                },
                (error) => {
                    console.log("AN ERROROROROROROORRO " + error.toString())
                }
            )
    }


    render() {

        const columns =
        [
            {title:"کد شخص", field: "userId"},
            {title:"نام شخص", field: "name"},
            {title:"موبایل", field: "mobile"},
            {title:"کد ملی", field: "meliCode"},
            {title:"شماره شناسنامه", field: "shenNum"},
            {title:"کیف پول", field: "wallet"},
            {title:"درآمد", field: "income"},
        ]


        const data = this.state.users.map((items, key)=> {
            return { userId : items['userID'], name : items['name'], mobile: items['mobile'], meliCode: items['meliCode'], shenNum: items['shenasnameNum'], wallet: items['wallet'], income: items['income']}
        })

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
        <div style={{paddingTop:"70px", paddingBottom:"90px"}}>
            <TopNav/>

            <button onClick={this.test}>Click</button>
            {this.state.isLoading ? <Loading/> :  <MaterialTable
                    style={{width:"80%", fontSize: "10px", margin: "7% auto", direction: "rtl", alignContent: "right", flexDirection : "inherit"}}

                    icons={tableIcons}
                    title="کاربران"
                    options={{
                        addRowPosition: "last",
                        search: true,
                        paging: true,
                        actionsColumnIndex: 9,
                        showTextRowsSelected: true,
                        headerStyle: {
                            flexDirection: "unset"
                        }

                    }}

                    editable={
                        {
                            onRowAdd: (newData) => new Promise((resolve) => {
                                console.log(newData)
                                const token = localStorage.getItem('nahang_token');
                                const url = "http://192.168.1.3:4300/V1.0.0/admin/users";
                                const myHeaders = new Headers();
                                myHeaders.append('Content-Type', 'application/json');
                                myHeaders.append("Authorization", `Bearer ${token}`);

                                const options = {
                                    method: 'POST',
                                    body:{
                                        name:"mari",
                                        wallet:284848,
                                        mobile: "09193252333"
                                    },
                                    myHeaders
                                };

                                fetch(url, options)
                                    .then(res => res.json())
                                    .then(result => {
                                         console.log(result)
                                        },
                                        (error) => {
                                            console.log("AN ERROROROROROROORRO " + error.toString())
                                        }
                                    )
                                resolve();
                            })


                            // onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                            //     const data = this.data
                            //     const index = data.indexOf(oldData);
                            //     data[index] = newData;
                            //     this.setState({
                            //         data: newData
                            //     })
                            // }),


                        }
                    }



                    columns={columns}
                    data={data}

                />
            }

            <ButNav/>
        </div>

    )}
}

export default Listusers;


//     render() {
//         return (
//             <React.Fragment>
//
//                 <Table striped>
//                     <thead style={{backgroundColor:"#F8EBFE"}}>
//                     <tr>
//                         <th>کد شخص </th>
//                         <th>نام شخص </th>
//                         <th>شماره موبایل</th>
//                         <th>کد ملی </th>
//                         <th> شماره شناسنامه </th>
//                         <th>کیف پول </th>
//                         <th>درآمد </th>
//                     </tr>
//                     </thead>
//                     <tbody  style={{textAlign:"right" , height:"800"}}>
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['userID']} </tr>
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['name']} </tr>
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['mobile']} </tr>
//                             })
//                         }
//                     </td>
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['meliCode']} </tr>
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['shenasnameNum']} </tr>
//                             })
//                         }
//                     </td>
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['wallet']} </tr>
//                             })
//                         }
//                     </td>
//
//                     <td>
//                         {
//                             Object.keys(this.state.users).map((key) => {
//                                 return <tr> {this.state.users[key]['income']} </tr>
//                             })
//                         }
//                     </td>
//
//
//                     </tbody>
//                 </Table>
//                 <ButNav/>
//             </React.Fragment>
//         );
//     }
//
//
// }
// export default Listusers;