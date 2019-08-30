import React from 'react';
import axios from 'axios';



export default class Transacfuc extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           transactions: [],
       }
   }
      componentDidMount(){
           const token = localStorage.getItem('nahang_token');
           axios({
               method: 'get',
               url: "https://api.nahangapp.ir/V1.0.0/admin/transactions",
               headers: {'Authorization': `Bearer ${token}`}
           }).then(response => {
               return response;
           }).then(res => {
               this.setState({
                   transactions: res['data']['transactions']
               })
               // console.log(this.state.transactions);
           }).catch(error => {
               console.log(error);
           })
       }
       render(){
           // console.log(this.state.transactions);

       return(
         <div>
             <ul>
                 {this.state.transactions.map(function(key) {
                     return(
                         <React.Fragment>

                            <p>{key.transactionID}</p>
                            <p>{key.due}</p>
                             <p>{key.state}</p>
                             <p>{key.who.name}</p>
                             <p>{key.who.userID}</p>
                             <p>{key.amount}</p>

                         </React.Fragment>
                     )
                 })}
             </ul>
         </div>
       )
       }
};