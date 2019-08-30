import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle } from "reactstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class CarouselUi extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.carousel" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <CardTitle>
              <IntlMessages id="carousel.basic" />
            </CardTitle>
          </Colxx>
          <Colxx xxs="12" className="pl-0 pr-0 mb-5">
            <ReactSiemaCarousel
              perPage={{
                0: 1,
                1000: 2,
                1400: 3
              }}
              loop={false}
            >
              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <div className="w-50 position-relative">
                    <img
                      className="card-img-left"
                      src="/assets/img/card-thumb-1.jpg"
                      alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                  </div>

                  <div className="w-50">
                    <CardBody>
                      <h6 className="mb-4">
                        زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                      </h6>

                      <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                          10.12.2018
                        </p>
                      </footer>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <div className="w-50 position-relative">
                    <img
                      className="card-img-left"
                      src="/assets/img/card-thumb-2.jpg"
                      alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      تمام شده
                    </span>
                  </div>

                  <div className="w-50">
                    <CardBody>
                      <h6 className="mb-4">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      </h6>

                      <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                          01.06.2018
                        </p>
                      </footer>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <div className="w-50 position-relative">
                    <img
                      className="card-img-left"
                      src="/assets/img/card-thumb-3.jpg"
                      alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      فرآوری شده
                    </span>
                  </div>

                  <div className="w-50">
                    <CardBody>
                      <h6 className="mb-4">
                        حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                      </h6>

                      <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                          27.05.2018
                        </p>
                      </footer>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <div className="w-50 position-relative">
                    <img
                      className="card-img-left"
                      src="/assets/img/card-thumb-1.jpg"
                      alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                  </div>

                  <div className="w-50">
                    <CardBody>
                      <h6 className="mb-4">
                        حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                      </h6>

                      <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                          19.10.2018
                        </p>
                      </footer>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <div className="w-50 position-relative">
                    <img
                      className="card-img-left"
                      src="/assets/img/card-thumb-3.jpg"
                      alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                  </div>

                  <div className="w-50">
                    <CardBody>
                      <h6 className="mb-4">
                        زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                      </h6>

                      <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                          09.04.2018
                        </p>
                      </footer>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </ReactSiemaCarousel>
          </Colxx>

          <Colxx xxs="12">
            <CardTitle>
              <IntlMessages id="carousel.single" />
            </CardTitle>
          </Colxx>

          <Colxx xxs="12" className="pl-0 pr-0 mb-5">
            <ReactSiemaCarousel
              perPage={{
                0: 1
              }}
              loop={false}
            >
              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <img
                    className="list-thumbnail responsive border-0"
                    src="/assets/img/thumb-3.jpg"
                    alt="Card cap"
                  />

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 truncate">
                        حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                      </p>

                      <p className="mb-0 text-muted text-small">کاپ کیک</p>
                      <p className="mb-0 text-muted text-small">09.11.2018</p>
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                          جدید
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          نگه دارنده
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row">
                  <img
                    className="list-thumbnail responsive border-0"
                    src="/assets/img/thumb-2.jpg"
                    alt="Card cap"
                  />

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 truncate">
                        زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                      </p>

                      <p className="mb-0 text-muted text-small">کاپ کیک</p>
                      <p className="mb-0 text-muted text-small">09.04.2018</p>
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                          جدید
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          نگه دارنده
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </ReactSiemaCarousel>
          </Colxx>

          <Colxx xxs="12">
            <CardTitle>
              <IntlMessages id="carousel.without-controls" />
            </CardTitle>
          </Colxx>

          <Colxx xxs="12" className="pl-0 pr-0 mb-4">
            <ReactSiemaCarousel
              perPage={{
                0: 1,
                480: 2,
                800: 3,
                1200: 4
              }}
              controls={false}
              loop={false}
            >
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-1.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-2.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-3.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-4.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-1.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
              <div className="pr-3 pl-3">
                <Card>
                  <div className="position-relative">
                    <img
                      className="card-img-top"
                      src="/assets/img/card-thumb-2.jpg"
                      alt="Card"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                      جدید
                    </span>
                    <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                      سلامتی
                    </span>
                  </div>

                  <CardBody>
                    <h6 className="mb-4">
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                    </h6>

                    <footer>
                      <p className="text-muted text-small mb-0 font-weight-light">
                        09.04.2018
                      </p>
                    </footer>
                  </CardBody>
                </Card>
              </div>
            </ReactSiemaCarousel>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
