import React from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import axios from 'axios';


export default class Rorders extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            accept : false
        }
        this.handleChange= this.handleChange.bind(this);
    }

        handleChange () {
            const token = localStorage.getItem('nahang_token');
            const url = "http://79.175.171.198:9993/V1.0.0";
            axios ({
                method: 'PUT',
                url : url + '/Home/update' + "5d656b773af97f117c986279",
                headers: {'Authorization': `Bearer ${token}`},
                body: {
                    accepted: true,
                }
            }).then (response => {
                console.log(response);
                return response;
            }).then(res => {
                this.setState({
                    accept: !this.state.accept,
                })
                console.log(this.state.accept);
            }).catch(error => {
                console.log(error);
            })
        }

    render(){

        return(
        <React.Fragment>
            <div style={{marginTop:"40px", color:"white", marginRight:"3%"}}> مشخصات مالک : </div>
            <Table className='grid-container' style={{marginTop:"1%"}}>
                <thead>
                <th  className='grid-item1'>شماره شناسنامه</th>
                <th  className='grid-item1'>کد ملی </th>
                <th  className='grid-item1'>محل صدور</th>
                <th  className='grid-item1'>تاریخ تولد</th>
                <th  className='grid-item1'>توضیحات</th>
                </thead>
                <tr  className='tdmadarek'>
                    <td className='grid-item2'>{this.props.data['shenasnameNum']}</td>
                    <td className='grid-item2'>{this.props.data['codeMeli']}</td>
                    <td className='grid-item2'>{this.props.data['mahalesodor']}</td>
                    <td className='grid-item2'>{this.props.data['birthDate']}</td>
                    <td className='grid-item2'>{this.props.data['tozihat']}</td>
                </tr>
            </Table>

            <div style={{marginTop:"40px", color:"white", marginRight:"3%"}}> مشخصات ملک : </div>
            <Table className='grid-container' style={{marginTop:"1%"}}>
                <thead>
                <th  className='grid-item1'>استان</th>
                <th  className='grid-item1'>شهرستان</th>
                <th  className='grid-item1'>بخش ثبتی</th>
                <th  className='grid-item1'>ناحیه</th>
                <th  className='grid-item1'>شماره فرعی</th>
                <th  className='grid-item1'>شماره اصلی</th>




                </thead>
                <tr  className='tdmadarek'>
                    <td className='grid-item2'>{this.props.data['ostan']}</td>
                    <td className='grid-item2'>{this.props.data['shahrestan']}</td>
                    <td className='grid-item2'>{this.props.data['bakhsh']}</td>
                    <td className='grid-item2'>{this.props.data['area']}</td>
                    <td className='grid-item2'>{this.props.data['fariNum']}</td>
                    <td className='grid-item2'>{this.props.data['mainNum']}</td>
                </tr>

                <thead>
                <th  className='grid-item1'>مفروز</th>
                <th  className='grid-item1'>شماره ملک </th>
                <th  className='grid-item1'>مساحت </th>
                <th  className='grid-item1'>بلوک</th>
                <th  className='grid-item1'>سمت</th>
                <th  className='grid-item1'>تاریخ ثبت</th>
                </thead>

                <tr>
                    <td className='grid-item2'>{this.props.data['mafrooz']}</td>
                    <td className='grid-item2'>{this.props.data['num']}</td>
                    <td className='grid-item2'>{this.props.data['masahat']}</td>
                    <td className='grid-item2'>{this.props.data['blook']}</td>
                    <td className='grid-item2'>{this.props.data['samt']}</td>
                    <td className='grid-item2'>{this.props.data['sabtDate']}</td>

                </tr>
                <div style={{margin:"auto", width:"100%" }}>
                <thead>
                <th  className='grid-item1'>نوع ملک</th>
                <th  className='grid-item1'>کاربری</th>
                <th  className='grid-item1'>نوع و میزان مالکیت</th>
                </thead>
                </div>
                <tr>
                    <td className='grid-item2'>{this.props.data['estateType']}</td>
                    <td className='grid-item2'>{this.props.data['karbari']}</td>
                    <td className='grid-item2'>{this.props.data['mizanMalekiat']}</td>
                </tr>

            </Table>

            <div style={{backgroundColor:"grey", width:"60%", margin:"auto", marginTop:"5%", borderRadius:"2%"}}>
                <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
                <a href="http://localhost:3005/assets/img/parking.png" target="_blank" style={{marginRight:"5%"}}><img src={"./../assets/img/parking.png"} style={{height:"200px", width:"130px"}}/></a>
            </div>

            <Button style={{marginTop:"5%", marginRight:"45%"}} onClick={this.handleChange}>تایید کلیه مدارک</Button>

        </React.Fragment>






            // <div>
            //    <p>Name:</p>
            //       <p>{this.props.data['name']}</p>
            //     <p>Father Name:</p>
            //    <p>{this.props.data['fatherName']}</p>
            //  </div>



        );
    }
}



{/*<Table className='grid-container'>*/}
{/*    <thead style={{height:"40px"}} >*/}

{/*    <th className='grid-item1'>نام</th>*/}
{/*    <th className='grid-item1'>نام پدر</th>*/}
{/*    <th className='grid-item1'>کد ملی</th>*/}
{/*    <th className='grid-item1'>شماره شناسنامه</th>*/}
{/*    <th className='grid-item1'>تاریخ تولد </th>*/}
{/*    <th className='grid-item1'>محل صدور</th>*/}
{/*    <th className='grid-item1'>آدرس</th>*/}
{/*    <th className='grid-item1'>توضیحات</th>*/}
{/*    <th className='grid-item1'>وضعیت</th>*/}

{/*    </thead>*/}

{/*</Table>*/}



{/*<div>*/}
{/*    {this.props.data.map((key, value)=>{*/}
{/*        <div key={key}>*/}
{/*            <p>Name:</p>*/}
{/*            <p>{value.name}</p>*/}
{/*            <p>Father Name:</p>*/}
{/*            <p>{value.fatherName}</p>*/}
{/*        </div>*/}
{/*        })*/}
{/*    }*/}
{/*</div>*/}

