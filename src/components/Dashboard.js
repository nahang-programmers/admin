import React from 'react';
import axios from 'axios';
import TopNav from './../containers/TopNav/index.js';
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-table/react-table.css";
 // import "./../assets/css/1.css";
import IconButton from '@material-ui/core/IconButton';
import ButNav from './../containers/ButNav/ButNav.js';


 class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboard:[]
        }

    }

    // componentDidMount() {
    //     const token = localStorage.getItem('nahang_token');
    //     axios({
    //         method: 'get',
    //         url: "https://api.nahangapp.ir/V1.0.0/admin/dashboard",
    //         headers: {'Authorization': `Bearer ${token}`}
    //     }).then(response => {
    //         return response;
    //     }).then(res => {
    //         this.setState({
    //             dashboard: res['data']
    //         })
    //         console.log(this.state.dashboard);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    darkhastha = (props) => {
        this.props.history.push('/orders')
    }
    listusers = (props) => {
        this.props.history.push('/listusers')
    }
    transactions = (props) => {
        this.props.history.push('/transactions')
    }
    businesses = (props) => {
        this.props.history.push('/businesses')
    }
    regin = (props) => {
        this.props.history.push('/regin')
    }
    parking = (props) => {
        this.props.history.push('/parking')
    }
    cars = (props) => {
        this.props.history.push('/car')
    }
    home = (props) => {
        this.props.history.push('/home')
    }

    amlak = (props) => {
        this.props.history.push('/amlak')
    }

    niyazmandi = (props) => {
        this.props.history.push('/niyazmandi')
    }

    buycar = (props) => {
        this.props.history.push('/buycar')
    }

    mynahang = (props) => {
        this.props.history.push('/mynahang')
    }

     salebuyhome = (props) => {
        this.props.history.push('/sale/buy/home')
     }


    render() {
        return (
            <React.Fragment>
            <TopNav/>
            <div style={{ padding:"80px 0 50px",backgroundColor:"#7986cb"}}>

                <div style={{paddingRight:"6%",marginRight:"15%"}}>

                    <IconButton onClick={this.parking} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></IconButton>
                    <IconButton onClick={this.cars} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../assets/img/car.png"} style={{height:"200px", width:"130px"}}/></IconButton>
                    <IconButton onClick={this.home}  style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../assets/img/home.png"} style={{height:"200px", width:"130px"}}/></IconButton>
                    <IconButton onClick={this.amlak} style={{borderRadius:"3%", margin:"20px 40px"}}><img  src={"./../assets/img/amlak.png"} style={{height:"200px", width:"130px"}}/></IconButton>


                    <div style={{marginRight:"10%"}}>
                    <IconButton onClick={this.niyazmandi} style={{borderRadius:"3%", margin:"20px 40px"}}> <img src={"./../assets/img/niyazmandi.png"} style={{height:"200px", width:"130px"}} /></IconButton>
                    <IconButton onClick={this.buycar} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../assets/img/kharidoforoshcar.png"} style={{height:"200px", width:"130px"}}/></IconButton>
                    <IconButton onClick={this.mynahang} style={{borderRadius:"3%", margin:"20px 40px"}}><img src={"./../assets/img/mynahang.png"} style={{height:"200px", width:"130px"}}/></IconButton>

                    </div>
                </div>

                </div>


           <ButNav/>

            </React.Fragment>

        );
    }
}

export default Dashboard;



