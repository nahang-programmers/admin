import React from 'react';
import TopNav from "./../../containers/TopNav";
import ButNav from "./../../containers/ButNav/ButNav";

class Newrentparking extends React.Component{
    render() {
        return (
           <React.Fragment>
               <TopNav/>
               <ButNav/>
           </React.Fragment>
        )
    }
}

export default Newrentparking;