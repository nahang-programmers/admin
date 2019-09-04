import React from 'react';
import axios from 'axios';
import ButNav from "../../containers/ButNav/ButNav";
import TopNav from "../../containers/TopNav";
import {Table, Button} from "reactstrap";
import Msalehome from './madarek/Msalehome';

class Salehome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            salehome:[],
            data:null,
            changePage:false,
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('nahang_token');
        const url = "http://79.175.171.198:9993/V1.0.0";
        // const url = "https://api.nahangapp.ir/V1.0.0";
        axios({
            method: 'get',
            url: url + "/shome/getall",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(response => {
            console.log(response);
            return response;
        }).then(res => {
            this.setState({
                isLoading:false,
                salehome: res['data']['home'],
                // _id: res['data']['users']['_id']
            })
            // console.log(this.state.users);
        }).catch(error => {
            console.log(error);
        })
    }

    handleClick = (data) => {
        this.setState ({
            data: data,
            changePage:true
        })
    }




    render() {
        return(
            this.state.changePage==true ? <Msalehome data={this.state.data} /> : <React.Fragment>
              <TopNav/>
              <Table className='grid-container'>
                  <thead style={{height:"40px"}} >

                  <th className='grid-item1'>نام  </th>
                  <th className='grid-item1'>نوع ملک</th>
                  <th className='grid-item1'>منطقه</th>
                  <th className='grid-item1'>تلفن</th>
                  <th className='grid-item1'>آدرس</th>
                  <th className='grid-item1'>مالک / مشاور املاک</th>
                  <th className='grid-item1'>سایر مشخصات</th>

                  </thead>

                  {Object.keys(this.state.salehome).map((key, items)=>
                      <tbody>
                      <tr className='trows' >
                      <td  className='grid-item2'> {this.state.salehome[key]['name']}</td>
                          <td  className='grid-item2'> {this.state.salehome[key]['noMelk']}</td>
                          <td  className='grid-item2'> {this.state.salehome[key]['area']}</td>
                          <td  className='grid-item2'> {this.state.salehome[key]['homeTell']}</td>
                          <td  className='grid-item2'> {this.state.salehome[key]['address']}</td>
                          <td  className='grid-item2'> {this.state.salehome[key]['address']}</td>
                          <td  className='grid-item2'> <Button onClick={this.handleClick.bind(this, this.state.salehome[key])}>مشخصات</Button></td>
                      </tr>
                      </tbody>
                  )}
                      </Table>
              <ButNav/>
          </React.Fragment>
        )
    }
}
export default Salehome;