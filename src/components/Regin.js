import React from 'react';
 import {Button} from 'reactstrap';
import TopNav from './../containers/TopNav/index.js';
import ButNav from './../containers/ButNav/ButNav.js';

class Regin extends  React.Component{
    cities = (props) => {
        this.props.history.push('/cities')
    }

    states = (props) => {
        this.props.history.push('/states')
    }

    render() {
        return (
            <React.Fragment>
                <TopNav/>
                <div style={{padding:"80px 0 50px",marginRight:"150px", marginLeft:"150px" }}>
                <Button onClick={this.cities}>شهرها</Button>
                <Button onClick={this.states}>استان ها</Button>
                </div>


                <ButNav/>
            </React.Fragment>
        );
    }
}
export default Regin;