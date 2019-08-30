import React from 'react';
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
import Tes12 from "./Tes12";
// import Search from 'antd/lib/input/Search';

class Test12 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            table: '',
    
        }
    }


    render() {
        const  columns= [

            {title: 'نام', field: 'name',},
            {title: 'نام خانوادگی', field: 'surname'},
            {title: "تاریخ تولد", field: "birthYear"},
            {title: "محل تولد", field: "birthCity"}

        ]


        const data=   [
            {name: 'هادی', surname: 'رادمان', birthYear: "۱۳۷۵", birthCity: "تهران"},
            {
                name: 'هادی',
                surname: 'رادمان',
                birthYear:  "۱۳۷۵",
                birthCity: "تهران",
            },
        ]

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

          
            // <div>
            //     <Tes12 />
            // </div>

        
                <MaterialTable
                    style={{width:"80%", fontSize: "10px", margin: "7% auto", direction: "rtl", alignContent: "right", flexDirection : "inherit"}}
            
                    icons={tableIcons}
                    title="کاربران"

                    options={{ 
                        addRowPosition: "last",
                        search: true,
                        paging: true,
                        actionsColumnIndex: 4,
                        showTextRowsSelected: true,
                        headerStyle: {
                            flexDirection: "unset"
                        }
                        
                     }}


                     editable={
                         {
                             onRowAdd: () => {},
                             onRowUpdate: () => {},
                             onRowDelete: () => {}, 
                            
                        }
                     }

                    columns={columns}
                    data={data}
                    

                />
        );
    }

}
export default  Test12;


