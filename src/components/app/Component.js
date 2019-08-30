import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';


export default class Test extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        return(
          <div>
                      <p>Name:</p>
                      <p>{this.props.data['name']}</p>
                      <p>Father Name:</p>
                      <p>{this.props.data['fatherName']}</p>

          </div>
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

