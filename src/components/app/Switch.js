
import React, { Component } from "react";
import Switch from "react-switch";




// import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import axios from "axios";
//
// export default function Switches() {
//     const [state,setState] = React.useState({
//         checkedA: false,
//         checkedB: false,
//         _id:'',
//     });
//
//     const handleChange = (parkingBusiness) => {
//         const token = localStorage.getItem('nahang_token');
//         const url = "http://192.168.1.4:4300/V1.0.0";
//         // const url = "https://api.nahangapp.ir/V1.0.0";
//         console.log("changedddddddddddddddddddddd")
//         axios({
//             method: "put",
//             url: url + "/admin/users/" + "5d582331dc844e174043b986",
//             body: {
//                 "permissions": {
//                     parkingBusiness : state.checkedA
//                 }
//             },
//             headers: {'Authorization': `Bearer ${token}`}
//         }).then(response => {
//             return response;
//         }).catch(error => {
//             console.log(error);
//         })
//     }
//
//     return (
//
//         <div style={{backgroundColor:"white"}}>
//
//             {/* parking */}
//             <Switch
//                 checked={state.checked}
//                 onChange={handleChange("parkingBusiness")}
//                 value="checkedB"
//                 color="primary"
//                 inputProps={{ 'aria-label': 'primary checkbox' }}
//                 style={{marginRight:"50%"}}
//             /> <p>parkingBusiness</p>
//
//
//             {/* home */}
//             <Switch
//                 checked={state.checked}
//                 onChange={handleChange("homeOrder")}
//                 value="checkedB"
//                 color="primary"
//                 inputProps={{ 'aria-label': 'primary checkbox' }}
//                 style={{marginRight:"50%"}}
//             />            <p>homeOrder</p>
//
//
//
//
//             {/* car */}
//
//             <Switch
//                 checked={state.checked}
//                 onChange={handleChange("rentOrder")}
//                 value="checkedB"
//                 color="primary"
//                 inputProps={{ 'aria-label': 'primary checkbox' }}
//                 style={{marginRight:"50%"}}
//             /> <p>rentOrder</p>
//
//         </div>
//
//     );
// }



class Switchh extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        );
    }
}

export default  Switchh;