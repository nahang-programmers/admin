import React from 'react';
import axios from "axios";
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
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import FilterList from "@material-ui/icons/FilterList";
import { IconButton } from 'material-ui';
import ViewColumn from "@material-ui/icons/ViewColumn";




class Modelscar extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            models: [],
            data: [],
            isLoading: true,
            table: '',
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        // const api = "https://api.nahangapp.ir/V1.0.0";
        const api = "http://192.168.1.3:4300/V1.0.0";
        axios({
            method: 'get',
            url: api + "/admin/models",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response;
        }).then(res => {
            this.setState({
                isLoading: false,
                models: res['data']['models']
            })
            console.log(this.state.models);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        const data =this.state.models.map((items, key)=> {
            // return {items['address'], items['address']}
        });
        // const columns = ["نام برند خودرو","نام مدل خودرو","کد مدل خودرو"];
        const columns = [
            {title:"کد مدل خودرو", field:""},
            {title:"نام مدل خودرو", field:""},
            {title:"نام برند خودرو", field:""}
        ]

        const options = {
            filter: false,
            filterType: 'dropdown',
            responsive: 'stacked',
        };
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


    return (
        <div style={{paddingTop:"70px", paddingBottom:"90px"}}>
            <TopNav/>
            {this.state.isLoading ? <Loading/> : <MaterialTable
                style={{
                    width: "80%",
                    fontSize: "10px",
                    margin: "7% auto",
                    direction: "rtl",
                    alignContent: "right",
                    flexDirection: "inherit"
                }}

                icons={tableIcons}
                title="مدل خودرو"

                options={{
                    addRowPosition: "last",
                    search: true,
                    paging: true,
                    actionsColumnIndex: 7,
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

export  default  Modelscar;

//     render() {
//         return (
//             <React.Fragment>
//
//                 <Table striped>
//                     <thead style={{backgroundColor:"#F8EBFE"}}>
//                     <tr>
//                         <th>نام برند خودرو</th>
//                         <th>نام مدل خودرو</th>
//                         <th>کد مدل خودرو</th>
//
//                     </tr>
//                     </thead>
//                     <tbody  style={{textAlign:"right" , height:"800"}}>
//                     <td >
//
//
//                         {/*{*/}
//                         {/*    Object.keys(this.state.brands).map((key) => {*/}
//                         {/*        return <tr> {this.state.brands[key]['address']} </tr>*/}
//                         {/*    })*/}
//                         {/*}*/}
//
//                     </td>
//                     <td >
//
//
//                         {/*{*/}
//                         {/*    Object.keys(this.state.brands).map((key) => {*/}
//                         {/*        return <tr> {this.state.brands[key]['address']} </tr>*/}
//                         {/*    })*/}
//                         {/*}*/}
//
//                     </td>
//                     <td>
//
//                     </td>
//                     </tbody>
//                 </Table>
//                 <ButNav/>
//             </React.Fragment>
//         );
//     }
// }
//
// export default Modelscar;