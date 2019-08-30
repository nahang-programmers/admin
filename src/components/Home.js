import React from 'react';
import  {Button} from 'reactstrap';
import TopNav from './../containers/TopNav/index.js';
import ButNav from './../containers/ButNav/ButNav.js';
import IconButton from '@material-ui/core/IconButton';

class Home extends React.Component {
    ordershome = (props) => {
        this.props.history.push('/ordershome')
    }

    businesseshome = (props) => {
        this.props.history.push('/businesseshome')
    }

    transactionshome = (props) => {
        this.props.history.push('/transactionshome')
    }

    newordersh = (props) => {
        this.props.history.push('/Newordersh/home')
    }



  render() {
      return (
          <React.Fragment>
              <TopNav/>
              <div style={{paddingTop:"5%",marginRight:"2%"}}>

                  <IconButton onClick={this.ordershome} style={{ marginTop:"5%"}}><img  style={{width:"200px"}} src={"./../assets/img/img-pages/home/darkhasth.png"}/></IconButton>
                     <IconButton onClick={this.newordersh} style={{position:"absolute", marginRight:"68%", marginTop:"5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/darkhasthrooz.png"}/></IconButton>
                  <IconButton onClick={this.businesseshome} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/kasbokarh.png"}/></IconButton>
                     <IconButton style={{position:"absolute", marginRight:"82%",marginTop:"-5%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/kasbokarhrooz.png"}/></IconButton>
                  <IconButton onClick={this.transactionshome} style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/tarakoneshh.png"}/></IconButton>
                  <IconButton  style={{position:"absolute", marginRight:"82%",marginTop:"-4%"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/tarakoneshhrooz.png"}/></IconButton>
                  <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/karbaranh.png"}/></IconButton>
                  <IconButton style={{display:"block"}}><img style={{width:"200px"}} src={"./../assets/img/img-pages/home/manateghh.png"}/></IconButton>



              </div>
              <div  style={{marginRight:"150px", marginLeft:"150px" }}>

              </div>
              <ButNav/>
          </React.Fragment>
      );
  }
}
export default Home;