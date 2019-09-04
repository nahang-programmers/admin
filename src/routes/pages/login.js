import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import { connect } from "react-redux";
import { loginUser } from "Redux/actions";
import axios from 'axios';
import logo from '../../assets/st.gif';

class LoginLayout extends Component {
  constructor(props) {
    super(props);
      super(props);
      this.state = {
          password: '',
          email: '',
          nameError: '',
          emailError: '',
          loading: true,
          meliCode: '',
          mobile:'',
          karbari:'',
          smscode:'',
      }
  }


    handleNameChange = event => {
        this.setState({ password: event.target.value }, () => {
            this.validateName();
        });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    };

    handlemelicodeChange = event => {
        this.setState({melicode: event.target.value}, () => {
            this.validateMelicode();
        });
    };


    handlemobileChange = event => {
        this.setState({mobile: event.target.value}, () => {
            this.validateMobile();
        })
    }


    handlekarbariChange = event => {
        this.setState({
            karbari:event.target.value} , () => {
                this.validateKarbari();
        })
    }




    validateMobile = () => {
        console.log('mobile');
    }

    validateKarbari =() => {
        console.log('karbari');
    }




    validateName = () => {
        const { password } = this.state;
        this.setState({
            nameError:
                password.length > 5 ? null : 'کاربر گرامی رمز عبور کمتر از 6 کارکتر نمیباشد'
        });
    }

    validateEmail = () => {
        const { email } = this.state;
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if(result===true){
            this.setState({
                emailError:"",
                email:email
            })
        } else{
            this.setState({
                emailError:"ایمیل وارد شده صحیح نمیباشد"
            })
        }
    }

loding(flag){
        if(flag==true){

        }else {

        }
}


  onUserLogin ()  {
this.state.loading=false;
       // console.log(this.state.password);
      this.setState({

          email: this.state.email,
          password: this.state.password,
          meliCode: this.state.meliCode,
          karbari: this.state.karbari,
          mobile: this.state.mobile,
          smscode: this.state.smscode,

      })


      axios({

          method: 'post',
          url: 'https://api.nahangapp.ir/V1.0.0/admin/account/auth',
          data: {
              email: this.state.email,
              password: this.state.password
          }
      }).then(response => response).then(res => {
            this.state.loading=true;
          if(res['data']['ok'] == true){
              localStorage.setItem('nahang_token', res['data']['token'])
              this.props.loginUser(this.state, this.props.history);
          }else {
              alert(res['data']['message']);
          }
      });



   }


  componentDidMount() {
    document.body.classList.add("background");
    return this.render();
  }

  componentWillUnmount() {
    document.body.classList.remove("background");
  }

  render() {
        let data;

        if (this.state.loading==false){
            data = <img  src={logo}  />
        }else {
            data= <Fragment>
                <div className="fixed-background" />

                <main>
                    <div className="container" >
                        <Row className="h-100">
                            <Colxx xxs="12" md="10" className="mx-auto my-auto" >
                                <Card className="auth-card" style={{borderRadius: "10px"}}>
                                    <div className="position-relative image-side " style={{borderTopRightRadius: "10px", borderBottomRightRadius: "10px"}} >
                                        <p className="" style={{color:"red",fontSize:"24px"}}>سامانه مدیریت نهنگ</p>
                                        <p className="white mb-0">
                                            لطفا وارد حساب کاربری خود شوید.
                                            <br />

                                        </p>
                                    </div>
                                    <div className="form-side">
                                        {/*<NavLink to={`/`} className="white">*/}
                                        {/*  <span className="" />*/}
                                        {/*  // logo-single className*/}
                                        {/*</NavLink>*/}
                                        <CardTitle className="mb-4">
                                            <IntlMessages id="user.login-title" />
                                        </CardTitle>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Label className="form-group has-float-label mb-4">
                                                <div className='form-group'>
                                                    <label style={{fontSize:"17px",color:"red"}}>کد ملی</label>
                                                    <input
                                                        name='melicode'
                                                        className={`form-control ${this.state.melicode ? 'is-invalid' : ''}`}
                                                        id='melicode'
                                                        placeholder='کد ملی '
                                                        value={this.state.melicode}
                                                        onChange={this.handlemelicodeChange}
                                                        // onBlur={this.validateEmail}
                                                    />
                                                    {/*<div className='invalid-feedback'>{this.state.emailError}</div>*/}
                                                </div>

                                            </Label>

                                            <Label className="form-group has-float-label mb-4">
                                                <div className='form-group'>
                                                    <label style={{fontSize:"17px",color:"red"}} htmlFor='name'>موبایل</label>
                                                    <input
                                                        type='int'
                                                        name='mobile'
                                                        className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                                                        id='mobile'
                                                        placeholder='موبایل'
                                                        value={this.state.mobile}
                                                        onChange={this.handlemobileChange}
                                                    />
                                                </div>
                                                <div className='invalid-feedback'>{this.state.nameError}</div>
                                            </Label>


                                            <Label className="form-group has-float-label mb-4">
                                                <div className='form-group'>
                                                    <label style={{fontSize:"17px",color:"red"}} htmlFor='name'>کد کاربری</label>
                                                    <input
                                                       type='int'
                                                       name='karbari'
                                                       className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                                                       id='karbaricode'
                                                       placeholder='کد کاربری'
                                                       value={this.state.karbari}
                                                       onChange={this.handlekarbariChange}

                                                    />

                                                </div>
                                            </Label>



                                            {/*<Label className="form-group has-float-label mb-4">*/}
                                            {/*    <div className='form-group'>*/}
                                            {/*        <label style={{fontSize:"17px",color:"red"}} htmlFor='name'>رمز ورود</label>*/}
                                            {/*        <input*/}
                                            {/*            type='password'*/}
                                            {/*            name='password'*/}
                                            {/*            className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}*/}
                                            {/*            id='password'*/}
                                            {/*            placeholder=''*/}
                                            {/*            value={this.state.password}*/}
                                            {/*            onChange={this.handleNameChange}*/}
                                            {/*            onBlur={this.validateName}*/}
                                            {/*        />*/}
                                            {/*        <div className='invalid-feedback'>{this.state.nameError}</div>*/}
                                            {/*    </div>*/}
                                            {/*</Label>*/}
                                            <div className="d-flex justify-content-between align-items-center">
                                                {/*/!*<NavLink to={`/forgot-password`}>*!/*/}
                                                {/*  <IntlMessages id="user.forgot-password-question" />*/}
                                                {/*</NavLink>*/}
                                                <Button
                                                    color="primary"
                                                    className="btn-shadow"
                                                    size="lg"
                                                    onClick={() => this.onUserLogin()
                                                    }
                                                >
                                                    <IntlMessages id="ارسال" />
                                                </Button>
                                            </div>

                                            <Label className="form-group has-float-label mb-4">
                                                <div className='form-group'>
                                                    <label style={{fontSize:"17px",color:"red"}} htmlFor='name'>کد تایید</label>
                                                    <input
                                                        style={{marginTop:"5%"}}
                                                        type='int'
                                                        name='taeedCode'
                                                        className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                                                        id='karbaricode'
                                                        placeholder='کد تایید'
                                                        value={this.state.karbari}
                                                    />
                                                </div>
                                            </Label>


                                            <div className="d-flex justify-content-between align-items-center">
                                                {/*/!*<NavLink to={`/forgot-password`}>*!/*/}
                                                {/*  <IntlMessages id="user.forgot-password-question" />*/}
                                                {/*</NavLink>*/}
                                                <Button
                                                    color="primary"
                                                    className="btn-shadow"
                                                    size="lg"
                                                    onClick={() => this.onUserLogin()
                                                    }
                                                >
                                                    <IntlMessages id="ورود" />
                                                </Button>
                                            </div>


                                        </Form>
                                    </div>
                                </Card>
                            </Colxx>
                        </Row>
                    </div>
                </main>


            </Fragment>
        }
    return (
        <div>
            {data}
        </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(LoginLayout);
