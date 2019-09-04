import React from 'react';
import {Table, Button} from 'reactstrap';
import axios from 'axios';

class Msalehome extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            accept:false,
        }
    }

    handleClick() {
        const token = localStorage.getItem('nahang_token');
        const url = "http://79.175.171.198:9993/V1.0.0";
        axios ({
            method: 'PUT',
            url : url + '/Home/update' + `/${this.props.data['_id']}`,
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
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
            <React.Fragment>
                <div style={{marginTop:"40px", color:"white", marginRight:"3%"}}> مشخصات ملک : </div>
                <Table className='grid-container' style={{marginTop:"1%"}}>
                    <thead>
                    <th  className='grid-item1'>تعداد واحد در طبقه</th>
                    <th  className='grid-item1'>تعداد طبقات </th>
                    <th  className='grid-item1'>نوع معامله</th>
                    <th  className='grid-item1'>قیمت کل</th>
                    <th  className='grid-item1'>قیمت متری</th>
                    <th  className='grid-item1'>زیر بنا</th>
                    </thead>
                    <tr  className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['homeInlevel']}</td>
                        <td className='grid-item2'>{this.props.data['level']}</td>
                        <td className='grid-item2'>{this.props.data['kind']}</td>
                        <td className='grid-item2'>{this.props.data['priceAll']}</td>
                        <td className='grid-item2'>{this.props.data['priceMetric']}</td>
                        <td className='grid-item2'>{this.props.data['zirBana']}</td>
                    </tr>
                    <thead>
                       <th className='grid-item1'> خواب </th>
                       <th className='grid-item1'> تعداد تلفن </th>
                       <th className='grid-item1'> آشپزخانه </th>
                       <th className='grid-item1'> سرویس </th>
                       <th className='grid-item1'> کفپوش </th>
                       <th className='grid-item1'> پارکینگ </th>
                    </thead>
                    <tr className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['bedRoom']}</td>
                        <td className='grid-item2'>{this.props.data['tells']}</td>
                        <td className='grid-item2'>{this.props.data['kitchen']}</td>
                        <td className='grid-item2'>{this.props.data['bathRoom']}</td>
                        <td className='grid-item2'>{this.props.data['kafpoosh']}</td>
                        <td className='grid-item2'>{this.props.data['parking']}</td>
                    </tr>
                    <thead>
                    <th className='grid-item1'> انباری </th>
                    <th className='grid-item1'> تراس</th>
                    <th className='grid-item1'> گاز </th>
                    <th className='grid-item1'> کولر </th>
                    <th className='grid-item1'> فن کوئل </th>
                    <th className='grid-item1'> جکوزی </th>
                    </thead>
                    <tr className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['anbari']}</td>
                        <td className='grid-item2'>{this.props.data['teras']}</td>
                        <td className='grid-item2'>{this.props.data['gas']}</td>
                        <td className='grid-item2'>{this.props.data['colder']}</td>
                        <td className='grid-item2'>{this.props.data['fanQuel']}</td>
                        <td className='grid-item2'>{this.props.data['jakoozi']}</td>
                    </tr>
                    <thead>
                    <th className='grid-item1'> استخر </th>
                    <th className='grid-item1'> سونا </th>
                    <th className='grid-item1'> زیرزمین </th>
                    <th className='grid-item1'> حیاط خلوت </th>
                    <th className='grid-item1'> حیاط </th>
                    <th className='grid-item1'> مستخدم </th>
                    </thead>
                    <tr className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['pool']}</td>
                        <td className='grid-item2'>{this.props.data['sona']}</td>
                        <td className='grid-item2'>{this.props.data['underGround']}</td>
                        <td className='grid-item2'>{this.props.data['backyard']}</td>
                        <td className='grid-item2'>{this.props.data['yard']}</td>
                        <td className='grid-item2'>{this.props.data['mostakhdem']}</td>
                    </tr>
                    <thead>
                    <th className='grid-item1'> پاسیو </th>
                    <th className='grid-item1'> آسانسور </th>
                    <th className='grid-item1'> وضعیت ملک </th>
                    <th className='grid-item1'> وضعیت سند </th>
                    <th className='grid-item1'> طول بر </th>
                    <th className='grid-item1'> مساحت زمین </th>
                    </thead>
                    <tr className='tdmadarek'>
                        <td className='grid-item2'>{this.props.data['pasio']}</td>
                        <td className='grid-item2'>{this.props.data['asansor']}</td>
                        <td className='grid-item2'>{this.props.data['buildingStatus']}</td>
                        <td className='grid-item2'>{this.props.data['sanadStatus']}</td>
                        <td className='grid-item2'>{this.props.data['toolbar']}</td>
                        <td className='grid-item2'>{this.props.data['masahat']}</td>
                    </tr>
                    {/*<thead>*/}
                    {/*  <th className='grid-item1'>نما</th>*/}
                    {/*  <th className='grid-item1'>سن بنا</th>*/}
                    {/*  <th className='grid-item1'>اصلاحی</th>*/}
                    {/*  <th className='grid-item1'>تراکم </th>*/}
                    {/*  <th className='grid-item1'>توضیحات</th>*/}
                    {/*</thead>*/}
                    {/*<td className='grid-item2'>{this.props.data['homeFace']}</td>*/}
                    {/*<td className='grid-item2'>{this.props.data['buildingAge']}</td>*/}
                    {/*<td className='grid-item2'>{this.props.data['eslahi']}</td>*/}
                    {/*<td className='grid-item2'>{this.props.data['tarakom']}</td>*/}
                    {/*<td className='grid-item2'>{this.props.data['explain']}</td>*/}
                </Table>
                <Button onClick={this.handleClick}>تایید کلیه مشخصات</Button>
                <Button>ناقص</Button>
                <Button>غیر قابل قبول</Button>

            </React.Fragment>
        )
    }
}

export default Msalehome;