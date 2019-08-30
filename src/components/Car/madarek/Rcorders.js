import React from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import axios from 'axios';

class Rcorders extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
        accept:false,
        }

        this.handleChange=this.handleChange.bind(this);
    }


    handleChange() {
        const token = localStorage.getItem('nahang_token');
        const url = "http://192.168.1.3:4300/V1.0.0";
        axios ({
            method:"PUT",
            url : url + '/Car/' + "5d658ab28169771db85c4def",
            headers: {'Authorization': `Bearer ${token}`},
            body: {
                accepted: true,
            }
        }).then(response => {
            // console.log(response);
            return response;
        }).then(res => {
            this.setState({
                accept:!this.state.accept,
            })
            console.log(this.state.accept);
        }).then(error => {
            console.log(error);
        })
    }




    render () {
        return (
            <React.Fragment>
                <div style={{marginTop:"40px", color:"white", marginRight:"3%"}}> مشخصات مالک : </div>
                <Table className='grid-container' style={{marginTop:"1%"}}>
                    <thead>
                    <th  className='grid-item1'>شماره شناسنامه</th>
                    <th  className='grid-item1'>محل صدور</th>
                    <th  className='grid-item1'>تاریخ تولد</th>
                    <th  className='grid-item1'>توضیحات</th>
                    </thead>
                    <tr  className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['shenasnameNum']}</td>
                        <td className='grid-item2'>{this.props.data['mahalesodor']}</td>
                        <td className='grid-item2'>{this.props.data['birthDate']}</td>
                        <td className='grid-item2'>{this.props.data['tozihat']}</td>
                    </tr>
                </Table>

                <div style={{marginTop:"40px", color:"white", marginRight:"3%"}}> مشخصات وسیله نقلیه : </div>
                <Table className='grid-container' style={{marginTop:"1%"}}>
                    <thead>
                    <th  className='grid-item1'>نوع</th>
                    <th  className='grid-item1'>سیستم</th>
                    <th  className='grid-item1'>تیپ</th>
                    <th  className='grid-item1'>مدل</th>
                    <th  className='grid-item1'>رنگ</th>
                    <th  className='grid-item1'>ظرفیت</th>
                    <th  className='grid-item1'>تعداد سیلندر</th>
                    <th  className='grid-item1'>نوع سوخت </th>



                    </thead>
                    <tr  className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['no']}</td>
                        <td className='grid-item2'>{this.props.data['system']}</td>
                        <td className='grid-item2'>{this.props.data['type']}</td>
                        <td className='grid-item2'>{this.props.data['model']}</td>
                        <td className='grid-item2'>{this.props.data['color']}</td>
                        <td className='grid-item2'>{this.props.data['zarfiat']}</td>
                        <td className='grid-item2'>{this.props.data['silandr']}</td>
                        <td className='grid-item2'>{this.props.data['noesokht']}</td>

                    </tr>

                    <thead>

                    <th  className='grid-item1'>تعداد محور </th>
                    <th  className='grid-item1'>تعداد چرخ </th>
                    <th  className='grid-item1'>شماره موتور</th>
                    <th  className='grid-item1'>شماره شاسی</th>
                    <th  className='grid-item1'>وضعیت</th>
                    <th  className='grid-item1'>بیمه شخص ثالث</th>
                    <th  className='grid-item1'>بیمه بدنه</th>
                    <th  className='grid-item1'>وضعیت فنی</th>
                    <th  className='grid-item1'>آپشن</th>

                    </thead>

                    <tr>

                        <td className='grid-item2'>{this.props.data['mehvarNum']}</td>
                        <td className='grid-item2'>{this.props.data['charkhNum']}</td>
                        <td className='grid-item2'>{this.props.data['motorNumber']}</td>
                        <td className='grid-item2'>{this.props.data['shasiNumber']}</td>
                        <td className='grid-item2'>{this.props.data['vaziat']}</td>
                        <td className='grid-item2'>{this.props.data['bimesales']}</td>
                        <td className='grid-item2'>{this.props.data['bimebadane']}</td>
                        <td className='grid-item2'>{this.props.data['technical']}</td>
                        <td className='grid-item2'>{this.props.data['options']}</td>
                    </tr>
                </Table>

                <div style={{backgroundColor:"red", width:"60%", margin:"auto", marginTop:"5%", borderRadius:"2%"}}>
                    <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                    <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                    <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                    <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                    <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                </div>

                <Button onClick={this.handleChange} style={{marginRight:"50%", marginTop:"5%"}}>تایید کلیه مشخصات</Button>
            </React.Fragment>
                )
    }
}

export default Rcorders;