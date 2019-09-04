import React from 'react';
import TopNav from './../containers/TopNav/index.js';
import ButNav from './../containers/ButNav/ButNav.js';
import IconButton from '@material-ui/core/IconButton';

class Parking extends React.Component {
    businessesparking =(props) => {
        this.props.history.push('/businessesparking')
    }

    ordersparking = (props) => {
        this.props.history.push('/ordersparking')
    }

    transactionsparking = (props) => {
        this.props.history.push('/transactionsparking')
    }

    newordersp = (props) => {
        this.props.history.push('/Newordersp/parking')
    }
    rentparking = (props) => {
        this.props.history.push('/New/rentparking/parking')
    }


    render () {
        return (
            <React.Fragment>
                <div style={{paddingTop:"5%",marginRight:"2%" }}>
                    <TopNav/>
                    <div >

                    <IconButton onClick={this.ordersparking} style={{ marginTop:"5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/darkhastp.png"}/></IconButton>
                        <IconButton onClick={this.newordersp} style={{position:"absolute", marginRight:"68%", marginTop:"5%"}}><img style={{width:"200px" }} src={"./../assets/img/img-pages/parking/darkhastprooz.png"}/></IconButton>
                    <IconButton onClick={this.businessesparking} style={{display:"block"}} > <img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/kasbokarp.png"}/> </IconButton>
                        <IconButton style={{position:"absolute", marginRight:"82%",marginTop:"-4%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/kasbokarprooz.png"}/></IconButton>
                    <IconButton onClick={this.transactionsparking} style={{display:"block"}}><img style={{width:"200px"}}  src={"./../assets/img/img-pages/parking/tarakoneshp.png"} /></IconButton>
                        <IconButton style={{position:"absolute", marginRight:"82%",marginTop:"-3%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/tarakoneshprooz.png"}/></IconButton>
                    <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/karbaranp.png"} /></IconButton>
                        <IconButton onClick={this.rentparking} style={{position:"absolute", marginRight:"82%",marginTop:"-3%"}}> اجاره دهندگان پارکینگ</IconButton>
                    <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/parking/manateghp.png"} /></IconButton>

                    </div>
                </div>
                <ButNav/>
            </React.Fragment>
        );
    }
}

export default Parking;