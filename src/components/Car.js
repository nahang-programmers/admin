import React from 'react';
import {Button} from  'reactstrap';
import TopNav from './../containers/TopNav/index.js';
import Orderscar from "./Car/Orderscar";
import Brandscar from "./Car/Brandscar";
import ButNav from './../containers/ButNav/ButNav.js';
import IconButton from '@material-ui/core/IconButton';


class Car extends React.Component {


    orderscar = (props) => {
        this.props.history.push('/orderscar')
    }

    businessescar = (props) => {
        this.props.history.push('/businessescar')
    }
   transactionscar = (props) => {
        this.props.history.push('/transactionscar')
   }
   brandscar = (props) => {
        this.props.history.push('/brandscar')
   }
   modelscar = (props) => {
        this.props.history.push('/modelscar')
   }
   neworderscar = (props) => {
        this.props.history.push('/Newordersc/car')
   }


    render () {
        return (
            <React.Fragment>
            <TopNav/>
                <div style={{paddingTop:"3%",marginRight:"2%" }}>

                    <IconButton onClick={this.orderscar} style={{ marginTop:"5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/darkhastc.png"}/></IconButton>
                       <IconButton onClick={this.neworderscar} style={{position:"absolute", marginRight:"68%", marginTop:"5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/darkhastcrooz.png"}/></IconButton>
                    <IconButton onClick={this.businessescar} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/kasbokarc.png"}/></IconButton>
                       <IconButton  style={{position:"absolute", marginRight:"82%",marginTop:"-5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/kasbokarcrooz.png"}/></IconButton>
                    <IconButton onClick={this.transactionscar} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/tarakoneshc.png"}/></IconButton>
                        <IconButton style={{position:"absolute", marginRight:"82%",marginTop:"-5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/tarakoneshcrooz.png"}/></IconButton>
                    <IconButton onClick={this.brandscar} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/brandcar.png"}/></IconButton>
                    <IconButton onClick={this.modelscar} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/modelcar.png"}/></IconButton>
                    <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/karbaranc.png"}/></IconButton>
                    <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/car/manateghc.png"}/></IconButton>





                </div>
                <div  style={{marginRight:"150px", marginLeft:"150px" }}>
                    {/*<Button>درخواست های جدید</Button>*/}
                    {/*<Button>کسب و کار جدید</Button>*/}
                    {/*<Button>تراکنش های جدید</Button>*/}
                </div>
                <ButNav/>
            </React.Fragment>
        );
    }
}

export default Car;