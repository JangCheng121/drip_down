import React, {Component} from 'react';
import { Carousel } from "react-motion-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hidden from "@material-ui/core/Hidden";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BackgroundImage from 'react-background-image-loader';
import {
    FaGoogle,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaPinterestP,
    FaTwitter,
    FaAndroid,
    FaApple,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import '../css/App.css';
import '../css/download.css';
import axios from 'axios'

const NextArrow = (props) => {
    const {className, onClick} = props;
    return (
        <FaChevronRight
            className={className}
            style={{color: "black", fontSize: 40, zIndex:1}}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const {className, onClick} = props;
    return (
        <FaChevronLeft
            className={className}
            style={{color: "black", fontSize: 40, zIndex:1}}
            onClick={onClick}
        />
    )
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carousel_index : 0,
        }
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 3,
            speed: 500,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };
        const search_str = window.location.search;
        const blue_preview = '../img/banner-blue/preview.png';
        const banner_3 = '../img/banner/3.jpg';
        let user_invite = search_str.slice(8);
        let axiosInstance = axios.create({
            baseURL: 'http://localhost:8082',
            timeout: 15000,
            headers: {'authorization': 'token'},
        });
        let parent_width = document.getElementById('root').offsetWidth;
        let carousel_width = 300;
        if (parent_width && parent_width < 500) {
            carousel_width = 200;
        }

        return (
            <>
                <header className="header-blue">
                    <Container id="main-menu" className="sticker">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item lg={4} md={4} className="col-lg-4 col-md-2 ">
                                <div className="logo">
                                    <a href="#" ><img src={require("../img/logo/logo-2.png")} alt="APNEW"/></a>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </header>
                <div className="banner-area banner-blue" id="banner">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item lg={7} md={8} sm={8} xs={12} className="col-lg-7 col-md-8 col-sm-8 col-xs-12">
                                <div className="banner-text">
                                    <div className="banner-table-cell">
                                        <h1>
                                            <Hidden xsDown>
                                                <d className="hidden-xs">AD-LIB</d>
                                            </Hidden>
                                            <br/><span>멋진 생활</span>합께 나눕시다
                                        </h1>
                                        <p style={{marginTop: 140}}/>
                                        <div className="banner-buttons">
                                            <div className="download-button-wrapper">
                                                <button className="download-btn" style={{marginLeft: 0}}
                                                        onClick={()=>{
                                                            window.location.href = 'https://apps.apple.com/us/app/ad-lib/id1564716492';
                                                            axios.post('https://api.ad-lib.live/api/download_invite', {invite:user_invite})
                                                        }}
                                                >
                                                    <i style={{top: 10}} className="zmdi">
                                                        <FaApple style={{fontSize: 50}}/>
                                                    </i>
                                                    <span className="large-text">App Store</span>
                                                </button>
                                                <button onClick={()=>{
                                                    window.location.href = '/ad-lib.apk';
                                                    axios.post('https://api.ad-lib.live/api/download_invite', {invite:user_invite})
                                                }}
                                                        className="download-btn"
                                                >
                                                    <i style={{top: 10}} className="zmdi">
                                                        <FaAndroid style={{fontSize: 50}}/>
                                                    </i>
                                                    <span className="large-text">Android</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-apps">
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay="2s">
                                        <div className="single-app-table-cell">
                                            <img alt="" src={require("../img/icon/video.png")} style={{width: 40}}/>
                                            <h4>VIDEO,LIVE</h4>
                                        </div>
                                    </div>
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay="1s">
                                        <div className="single-app-table-cell">
                                            <img alt="" src={require("../img/icon/game.png")} style={{width: 40}}/>
                                            <h4>MINI GAME</h4>
                                        </div>
                                    </div>
                                    <div className="single-app wow zoomIn" data-wow-duration="3s" data-wow-delay=".5s">
                                        <div className="single-app-table-cell">
                                            <img alt="" src={require("../img/icon/chat.png")} style={{width: 40}}/>
                                            <h4>채팅</h4>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={5} md={4} sm={4} className="col-lg-5 col-md-4 col-sm-4 hidden-xs">
                                <Hidden xsDown>
                                    <div className="banner-product-image">
                                        <div className="wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s">
                                            <img src={require("../img/banner-blue/banner-mobile.png")} alt=""
                                                 className="floatright"/>
                                        </div>
                                    </div>
                                </Hidden>
                            </Grid>

                        </Grid>
                    </Container>
                    <img alt='' className='first_after' src={require("../img/banner/shape.png")}/>
                </div>

                <div className="about-area about-blue" id="about">
                    <Container>
                        <Grid component={"div"} container justify={"center"}>
                            <Grid item sm={12} xs={12}>
                                <div className="section-title text-center title-blue">
                                    <h1>AD-LIB <span>LIVE</span></h1>
                                    <img src={require("../img/icon/title-icon-blue.png")} alt=""/>
                                    <p>게임，노래자랑,dance，미녀,미남，보고싶은것 다 여기 있음
                                        <br/>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container justify={"center"}>
                            <Grid item lg={6} md={5} sm={5}
                                  className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-5 col-sm-offset-0">
                                <div className="about-image wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s">
                                    <img src={require("../img/banner-blue/mobile.png")} alt="" className="floatright"/>
                                </div>
                            </Grid>
                            <Grid item lg={6} md={7} sm={7} xs={12} className="col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                <div className="about-text">
                                    <h2>AD-LIB LIVE</h2>
                                    <p>아나운서, 여신, 아이돌, 당신과 진실한 대화를 나누고 친구를 사귑니다.</p>
                                    <p>노래도 잘하고, 소리도 잘 지르고, 춤도 잘추고, 채팅도 잘하는 미남 미녀들을 포함하여, 멋진 방송은 하루 종일 끊이지 않는다.</p>
                                    <p>언제 어디서나 폰으로 생방송을 멋지게 하고, 다국적 아나운서의 멋진 생방송을 본다.</p>
                                    <div className="about-buttons">
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <BackgroundImage src={require("../img/banner-blue/preview.png")}
                                 placeholder={blue_preview} className="features-area features-blue margin_top_50" id="features">
                    <Container>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12}>
                                <div className="section-title text-center title-blue">
                                    <h1>AD-LIB <span>친구사귀기</span></h1>
                                    <img src={require("../img/icon/title-icon-blue.png")} alt=""/>
                                    <p>AD-LIB친구사귀기,<br/>
                                        다국적 친구들이 끝없이 수다를 떨며, 수많은 사람들 속에서 재미있는 사람을 찾는다.</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify='flex-end'>
                            <Grid item lg={7} md={9} sm={12}
                                  className="col-lg-7 col-lg-offset-5 col-md-9 col-md-offset-3 col-sm-12 col-sm-offset-0 feature-wrapper">
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img alt="" src={require("../img/icon/chat.png")} style={{width: 60}}/></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>채팅</h4>
                                        <p>더 많은 친구를 만나고 낯설고 재미있는 사람들을 만나고 친구와 이야기를 나누며 언제 어디서나 소식을 보내면 된다.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/video2.png")} style={{width: 50}}/></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>실시간 동영상채팅</h4>
                                        <p>1대1 영상채팅, 남신 여신과 거리없이 소통하며, 보고싶은것이 만나는것 보다 못하다.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/mic.png")} style={{width: 60}}/></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>음성</h4>
                                        <p>음성을 보내고 실시간으로 마이크, 음성통화, 고화질 대화, 음성친구사귀기, 음성약속 </p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/gift.png")} style={{width: 60}}/></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>선물</h4>
                                        <p>마음속 친구에게 선물을 신청, 멋진 선물 특수효과, 당신의 마음을 완벽하게 표현할수 있다</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item-icon">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/game.png")} style={{width: 60}}/></i>
                                    </div>
                                    <div className="single-item-text">
                                        <h4>게임</h4>
                                        <p>원키로 친구 미니게임 대전을 요청, 남신 여신과 함께 PK, 즐거운 채팅게임</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </BackgroundImage>
                <BackgroundImage src={require("../img/banner/3.jpg")}  placeholder={banner_3}  className="download-area download-blue">
                    <img alt='' className='second_before' src={require("../img/banner/shape.png")}/>
                    <img alt='' className='first_after' src={require("../img/banner/shape.png")}/>
                    <div className="download-bg"/>
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1 className="text-white">AD-LIB <span>돈벌이</span></h1>
                                    <img src={require("../img/icon/title-icon-white.png")} alt=""/>
                                    <p className="text-white">AD-LIB는 돈벌이 할수 있는 APP,<br/>
                                        친구추천 업로드,선물받기,광고클릭 등 다종 금화 획득방식,금화는 환전가능</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="download-button-wrapper">
                                    <button className="download-btn">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/friends.png")}/></i>
                                        <span>Get money by <span className="large-text">친구추천</span></span>
                                    </button>
                                    <button className="download-btn">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/up.png")}/></i>
                                        <span>Get money by <span className="large-text">업로드</span></span>
                                    </button>
                                    <button className="download-btn">
                                        <i className="zmdi"><img alt={""} src={require("../img/icon/gift.png")}/></i>
                                        <span>Get money by <span className="large-text">선물받기</span></span>
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </BackgroundImage>

                <div className="pricing-area pricing-blue" id="pricing">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>AD-LIB <span>는</span></h1>
                                    <img src="../img/icon/title-icon-blue.png" alt=""/>
                                    <p>재미있는 동영상<br/>
                                        대량 재미있는 내용으로 당신의 오락시간과 진실생활을 공유하며 기억의 순간의 모습을 기록한다</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img alt={""} src={require("../img/screenshot/sp.png")}/>

                            </Grid>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img alt={""} src={require("../img/screenshot/tp.png")}/>
                            </Grid>
                            <Grid item md={4} sm={4} className="col-md-4 col-sm-4">
                                <img alt={""} src={require("../img/screenshot/yw.png")}/>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className="testimonial-area testimonial-blue" id="reviews">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>AD-LIB <span>미니 게임</span></h1>
                                    <img src={require("../img/icon/title-icon-blue.png")} alt=""/>
                                    <p>여러가지 미니게임을 마음껏 하세요.<br/>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={'center'}>
                            <Grid item lg={12} md={10} sm={10} xs={12}>
                                <Grid component={"div"} container className="row" justify={"center"}>
                                    <Grid style={{}} item lg={6} md={8} sm={10} xs={10}>
                                        <Slider {...settings}>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/1.png")} alt="testimonial 1"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/2.png")} alt="testimonial 2"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/3.png")} alt="testimonial 3"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/1.png")} alt="testimonial 1"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/2.png")} alt="testimonial 2"/>
                                            </div>
                                            <div className="sin-testiImage">
                                                <img src={require("../img/testimonial/3.png")} alt="testimonial 3"/>
                                            </div>
                                        </Slider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className="screenshots-area screenshots-blue" id="screenshots">
                    <Container className="container">
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item md={12} className="col-md-12">
                                <div className="section-title text-center title-blue">
                                    <h1>AD-LIB <span>언어전환</span></h1>
                                    <img src={require("../img/icon/title-icon-blue.png")} alt=""/>
                                    <p>다국어 지원, 원키 전환지원<br/>
                                        지역 바꾸어 집밖에 나가지 않고 다국적 풍경을 느낀다.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid style={{alignItems: "center", display: "flex", justifyContent:'center', position:"relative"}} item md={10}
                                  className="col-md-10 col-md-offset-1">
                                <FaChevronLeft
                                    className='carousel_btn left_20'
                                    onClick={()=>{this.setState({carousel_index:this.state.carousel_index-1})}}
                                />
                                <div style={{width: carousel_width, display: "flex", height: 500}}>
                                    <Carousel
                                        width={carousel_width}
                                        height={300}
                                        direction={'horizontal'}
                                        effect={'3d'}
                                        index={this.state.carousel_index}
                                        onChange={index => {
                                            this.setState({carousel_index: index});
                                        }}
                                    >
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/cn.png")} alt=""/>
                                        </div>
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/en.png")} alt=""/>
                                        </div>
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/kr.png")} alt=""/>
                                        </div>
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/cn.png")} alt=""/>
                                        </div>
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/en.png")} alt=""/>
                                        </div>
                                        <div style={{width: carousel_width, height: 300}}>
                                            <img src={require("../img/screenshot/kr.png")} alt=""/>
                                        </div>
                                    </Carousel>
                                </div>
                                <FaChevronRight
                                    className='carousel_btn right_20'
                                    onClick={()=>{this.setState({carousel_index:this.state.carousel_index+1})}}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <footer className="footer-area footer-blue" id="support" style={{zIndex: -1}}>
                    <div className="footer-bg"></div>
                    <img alt='' className='second_before' src={require("../img/banner/shape.png")}/>
                    <Container className="container">

                        <Grid component={"div"} container className="row" justify={"center"}>
                            <Grid item lg={4} md={6} className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                                <div className="footer-links text-center">
                                    <a href="#"><FaFacebookF/></a>
                                    <a href="#"><FaTwitter/></a>
                                    <a href="#"><FaGoogle/></a>
                                    <a href="#"><FaLinkedinIn/></a>
                                    <a href="#"><FaPinterestP/></a>
                                    <a href="#"><FaYoutube/></a>
                                </div>
                                <div className="footer-text text-center">
                                    <span>
                                        Copyright &copy; 2021.Company name All rights reserved.
                                        <a target="_blank" href="#">AD-LIB</a>
                                    </span>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </footer>
            </>
        );
    }

}

export default App;
