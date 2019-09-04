import React from 'react';
import axios from "axios";
import ButNav from './../containers/ButNav/ButNav.js';
import TopNav from './../containers/TopNav/index.js';
import IconButton from '@material-ui/core/IconButton';


class Amlak extends React.Component{

    // presale = (props)=> {
    //     this.props.history.push('/presale');
    // }

    render(){
        return(
            <React.Fragment>
                <TopNav/>
                <div style={{ marginTop:"10%"}}>
                    <IconButton  style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>فروش خانه</IconButton>
                    <IconButton onClick={this.presale} style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>پیش فروش</IconButton>
                    <IconButton  style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>رهن</IconButton>
                    <IconButton  style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>رهن و اجاره</IconButton>
                </div>
                <ButNav/>
            </React.Fragment>
        )
    }
}
export default Amlak;