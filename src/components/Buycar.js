import React from 'react';
import TopNav from './../containers/TopNav/index.js';
import ButNav from './../containers/ButNav/ButNav.js';

class Buycar extends React.Component {
    render(){
        return(
            <React.Fragment>
            <TopNav/>

            <ButNav/>
            </React.Fragment>
        );
    }
}

export default Buycar;