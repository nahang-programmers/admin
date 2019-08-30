import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Loading extends Component {


    render() {
        return (
            <div style={{position:'fixed',top:'50%',left:'50%'}}>
                <Spinner size={50} spinnerColor={"#9c27b0"} spinnerWidth={2} visible={true} />
            </div>
        );
    }
}