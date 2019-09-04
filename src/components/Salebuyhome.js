import React from 'react';
import TopNav from './../containers/TopNav/index.js';
import ButNav from './../containers/ButNav/ButNav.js';
import IconButton from '@material-ui/core/IconButton';


class Salebuyhome extends React.Component{


    salehome = (props)=> {
        this.props.history.push('/salebuyhome/sale/home');
    }

    render(){
        return(
            <React.Fragment>
                <TopNav/>
                <div style={{ marginTop:"10%"}}>
                <IconButton style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>خرید خانه</IconButton>
                <IconButton onClick={this.salehome} style={{borderRadius:"3%", margin:"20px 40px", display:"block"}}>فروش خانه</IconButton>
                </div>
                <ButNav/>
            </React.Fragment>
        )
    }
}
export default Salebuyhome;