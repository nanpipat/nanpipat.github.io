import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import CardCom from './component/CardCom.jsx';
import CardSkill from './component/CardSkill.jsx';
import './App.css';
import reim from './assets/img/react-cover.png';
import axios from 'axios';
import ReactTypingEffect from 'react-typing-effect';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: true,
      clname: "collapse navbar-collapse"
    };

    this.handleClick = this.handleClick.bind(this);
    this.callapi = this.callapi.bind(this);
  }

  scrollToLanding = elem => {
    scroller.scrollTo(elem, {
      duration: 800,
      delay: 100,
      smooth: true,
    })
  }

  callapi() {
    var data = "grant_type=authorization_code&client_id=039bb643-891d-4abd-846d-a38c2e89adad&redirect_uri=https://test-scgdistpurchasing.nexterdigitals-dev.com/login&code=5zD0G9GbxEm2B9LRWX-_mA.fVlbsXz41wieGH39YWrB-NIDTcY.mbOVy93sAGq8cnJI4pjFjxlIJqrCt3d9Ee-jA5uKgP9mg1gzKqoU3adxxdm7V5f97g5AiAdVbOw2I7xizJuL0bZkYFDCexJbUsIbqWsTsZlOeVp_BEDYmhUR_KmtIQBh5OZeMiaA5hNn5ZOm_98LAtyRKNoOoccO6pJ8wb2TDjtYM-xGmZ0JIKynlwPqh4CT4rYLcC3AX5QkPKYm9Wc-7zpDq5Rh8ZBaG3Hv0NK-g2XEvI2OKGVY0MnI3tJeVQKdEpHySq8KL5DF3wLNwNvVXt2YaJS02V3T7WJx4agWpiFrb85UazoDcISHVYOfP68RJHfTGst4FgD15pucSYkWtA"
    //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'HEAD',
      mode: 'no-cors',
    }
    axios.post(`https://accessdev.scg.co.th/adfs/oauth2/token`, { data }, headers)
      .then(res => {
        console.log(res);
      })
  }

  async handleClick() {
    await this.setState({
      activeTab: !this.state.activeTab
    });

    console.log(this.state.activeTab, "VALLLLLLLLLL")

    this.setCLLL();
  }

  setCLLL = val => {

    //console.log(this.state.activeTab ,"VALLLLLLLLLL")
    if (this.state.activeTab == true) {
      this.setState({
        clname: "collapse navbar-collapse"
      })
    }
    else {
      this.setState({
        clname: "collapse navbar-collapse show"
      })
    }

  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#35659c" }} id="sideNav">
          <a className="navbar-brand js-scroll-trigger" onClick={() => this.scrollToLanding('about')}>
            <span style={{ color: "white", fontWeight: 800, letterSpacing: ".05rem", textTransform: "uppercase" }} className="d-block d-lg-none">Nanpipat Klinpratoom</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./assets/img/avartar2.jpg')} alt="" />
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.handleClick} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.clname} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="about" spy={true} smooth={true} duration={500} >About</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="experience" spy={true} smooth={true} duration={500} >Experience</Link>

              </li>
              {/* <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="education" spy={true} smooth={true} duration={500} >Education</Link>

              </li> */}
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>

              </li>

              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="awards" spy={true} smooth={true} duration={500} >Projects</Link>

              </li>
              <li className="nav-item">
                <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="interests" spy={true} smooth={true} duration={500} >Interests</Link>

              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
              <ReactTypingEffect
                text={"NANPIPAT KLINPRATOOM"}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                speed={150}
                eraseSpeed={50}
                eraseDelay={10000}
                typingDelay={500}
                className={"topland"}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1 className="mb-0">
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            key={key}
                            style={i > 8 ? { color: '#35659c' } : {}}
                          >{char}</span>
                        );
                      })}
                    </h1>
                  );
                }}
              />
              {/* <h1 className="mb-0">Nanpipat
              <span className="text-primary">  </span>
                <span style={{ color: "#35659c" }}>Klinpratoom</span>
              </h1> */}
              <div className="subheading mb-5">
                <h3>Full Stack Developer</h3>
              </div>

              <p className="lead mb-5">Full Stack Developer with 3 years in front-end , back-end , system , dev-ops , debugging and user interfaces within various language and framework. Proven ability with web developer that high performance.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/nanpipat-klinpratoom-b859361bb/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/nanpipat" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://medium.com/@nanpipat.k" target="_blank">
                  <i class="fab fa-medium"></i>
                </a>
                <a href="mailto:nanpipat.k@gmail.com" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>

                {/* <button onClick={this.callapi}>
                  asdsad
                </button> */}

              </div>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
            <div className="w-100">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">FULL STACK DEVELOPER</h3>
                  <div className="subheading mb-3">Netcube Soft co., ltd</div>
                  <p>Develop software, such as website, application, system, etc. Base language  in Back End is C#,.NET Core, .NET Framework and Base Front End is Angular Framework.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{ color: "#97e8cf" }}>June 2018 - Present</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Freelance Developer</h3>
                  <div className="subheading mb-3">Freelance</div>
                  <p>Develop and Bug fixed Software , Application or Website by requirement. Don't expect language. Mostly is Web Developer </p>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{ color: "#97e8cf" }}>March 2018 - Present</span>
                </div>
              </div>

            </div>

          </section>

          <hr className="m-0" />

          {/* <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Srinakarinwirot University</h3>
                  <div className="subheading mb-3">College of social communication innovation</div>
                  <div>Computer For Communication</div>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{ color: "#97e8cf" }}>August 2014 - May 2018</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                  <h3 className="mb-0">Debsirin Samutprakarn</h3>
                  <div className="subheading mb-3">Eng - Math Program</div>
                </div>
                <div className="resume-date text-md-right">
                  <span style={{ color: "#97e8cf" }}>May 2008 - Feb 2013</span>
                </div>
              </div>

            </div>
          </section>

          <hr className="m-0" /> */}

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
              <h2 className="mb-5">Skills</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">FRONT-END DEVELOPER </h3>
                  <div className="subheading mt-3">
                    <img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src={require('./assets/img/al.png')} alt="" />
                    Angular</div>
                  <p>Advanced Level. I use Angular mainly for my work. Therefore the most proficient</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src={require('./assets/img/ra.png')} alt="" />React</div>
                  <p>Mid Level. I use React for freelance job and i like to lern this by myself mostly than other front-end framework</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png" alt="" />HTML & CSS</div>
                  <p>Advanced Level. This is basic of front-end developer. I use it in all my projects. </p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" />Bootstrap</div>
                  <p>Advanced Level. Like a HTML it's basic of front-end developer. I use it in all my projects same.</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png" alt="" />Material ui</div>
                  <p>High Level. It's very compatible with Angular and there are many plug-ins available. </p>
                </div>

              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">BACK-END DEVELOPER </h3>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src={require('./assets/img/cs.png')} alt="" />C#, .Net Core, .NET framework</div>
                  <p>Advanced Level. It's main back-end language for me. I have more than 2 years experience with it.</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://www.blognone.com/sites/default/files/externals/723c801c90afd9aa844b3ce3d7f01f0b.png" alt="" />Node.js (Express.js)</div>
                  <p>Basic Level. I used it when I was in college and sometimes use it in freelance jobs. </p>
                  {/* <div className="subheading mt-3">HTML & CSS</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Bootstrap</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Material ui</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Mobile Developer  </h3>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://www.pngkit.com/png/full/222-2224799_react-native-development-react-native-logo-png.png" alt="" />React Native</div>
                  <p>Basic Level. I use it in my freetimes. And it is in the learning phase</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://secure.meetupstatic.com/photos/event/d/a/3/7/600_477715863.jpeg" alt="" />IONIC </div>
                  <p>Basic Level. I used to help a friend to fix bugs with this.</p>
                  {/* <div className="subheading mt-3">HTML & CSS</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Bootstrap</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Material ui</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Database System  </h3>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://www.cloudhm.co.th/media/original_images/microsoft-sql-server_gYxfqsN.jpg" alt="" />SQL Server</div>
                  <p>Basic Level. It's main DB i used. </p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="" />Firebase (with Clound Functions)</div>
                  <p>Mid Level. I mostly use it for my freelance job and in my own projects.</p>
                  {/* <div className="subheading mt-3">HTML & CSS</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Bootstrap</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Material ui</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">DEV-OPS  </h3>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://miro.medium.com/max/336/1*glD7bNJG3SlO0_xNmSGPcQ.png" alt="" />Docker</div>
                  <p>Middle Level. I use for deploy project to cloud.</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://img2.thaipng.com/20180515/zxe/kisspng-jenkins-docker-continuous-delivery-installation-so-5afa799e222331.1197773615263645741398.jpg" alt="" />Jenkins</div>
                  <p>Basic Level. I use to write pipeline for pre-deploy my application.</p>
                  <div className="subheading mt-3"><img className="mr-3" style={{ borderRadius: "50%", width: "70px" }} src="https://pbs.twimg.com/profile_images/378800000036582527/5aa73901ac270ac6e8776241b04ad3d9_400x400.png" alt="" />Octopus Deploy</div>
                  <p>Basic Level. I use it to deploy project in my company server.</p>
                  {/* <div className="subheading mt-3">HTML & CSS</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Bootstrap</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <div className="subheading mt-3">Material ui</div>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                </div>
              </div>





              {/* <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/cs.png') } alt="" />
                 
                </li>
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/ra.png') } alt="" />
                 
                </li>
                <li className="list-inline-item">
                  <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/al.png') } alt="" />
               
                </li>
                <li className="list-inline-item">
                <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/js.png') } alt="" />
                  
                </li>
                <li className="list-inline-item">
                  <img style={{borderRadius: "50%", width: "70px"}} src={ require('./assets/img/sql.png') } alt="" />
                  
                </li>
              </ul>

              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Mobile-First, Responsive Design</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Browser Testing &amp; Debugging</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Functional Teams</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum</li>
              </ul>
              <br />
              <br />
              <CardSkill /> */}
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div className="w-100">
              <h2 className="mb-5">PROJECTS</h2>
              <div className="row">
                <CardColumns>
                  <CardCom
                    imgurl={"https://bgstrategicadvisors.com/wp-content/uploads/2019/09/medium.png"}
                    title="Medium"
                    subtitle=" "
                    text="my blog in medium.com. i do in freetimes"
                    Link1D="Go to My Blog"
                    Link1="https://medium.com/@nanpipat.k"
                  />

                  <CardCom
                    imgurl={"https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png"}
                    title="React Native Simple App"
                    subtitle=" "
                    text="Simple Social Application"
                    Link1D="Screenshot"
                    Link1="https://www.img.in.th/images/597edebe6fbf981bd7ebcaa12955a0fe.png"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/react-native-socialapp"
                  />

                  <CardCom
                    imgurl={"https://miro.medium.com/max/1024/1*TaV-QaLWD_aScEPrgLKZfA.png"}
                    title="React on Heroku"
                    subtitle=" "
                    text="Config and Setting of ReactJs for deploy to Heroku"
                    Link1D="Demo"
                    Link1="https://nanpipat-react-deploy.herokuapp.com/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/heroku_react_deploy"
                  />

                  <CardCom
                    imgurl={"https://i.ytimg.com/vi/zXx2oBrxN9E/maxresdefault.jpg"}
                    title="Angular OAuth2"
                    subtitle=" "
                    text="Setting and config for OAuth2 Angular Project"
                    Link1D="Demo"
                    Link1="https://nanpipat-angular-oauth2-demo.herokuapp.com/home"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/angular-oauth2-demo"
                  />

                  <CardCom
                    imgurl={"https://miro.medium.com/max/900/1*PoTNHIvshJw8hP_yWpbY6g.png"}
                    title="Upload and Take picture with webcam"
                    subtitle=" "
                    text="Upload file and take webcam simple project"
                    Link1D="Demo"
                    Link1="https://nanpipat.github.io/obdetection_front/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/obdetection_front"
                  />
                  <CardCom
                    imgurl={"https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"}
                    title="Blog Page with NextJS"
                    subtitle=" "
                    text="Build Blog by NextJS"
                    Link1D="Demo"
                    Link1="https://nanpipat-blogger.herokuapp.com/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/nextjsbuildblog"
                  />

                  <CardCom
                    imgurl={"https://miro.medium.com/max/2400/1*jNM11lWgQid_djzb3668UQ.png"}
                    title="Angular on Heroku"
                    subtitle=" "
                    text="Config and Setting of Angular for deploy to Heroku"
                    Link1D="Demo"
                    Link1="https://nanpipat-angular-deploy.herokuapp.com/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/heroku_angular_deploy"
                  />
                  <CardCom
                    imgurl={"https://miro.medium.com/max/1200/1*SrUAbDM2x3CJjWi4FQBE2w.png"}
                    title="Nextjs on Heroku"
                    subtitle=" "
                    text="Config and Setting of NextJs for deploy to Heroku"
                    Link1D="Demo"
                    Link1="https://nanpipat-nextjs-deploy.herokuapp.com/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/heroku_nextjs_deploy"
                  />

                  <CardCom
                    imgurl={"https://firebase.google.com/images/social.png"}
                    title="Firebase Login"
                    subtitle=" "
                    text="Login page example on with firebase."
                    Link1D="Demo"
                    Link1="https://nanpipat.github.io/Firebase_Loginapp/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/Firebase_Loginapp"
                  />
                  <CardCom
                    imgurl={"https://cerberus-laboratories.com/images/blog/random_numbers.jpg"}
                    title="Random Number"
                    subtitle=" "
                    text="Random Number application on react."
                    Link1D="Demo"
                    Link1="https://nanpipat.github.io/ReactApp_NumberRandom/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/ReactApp_NumberRandom"
                  />
                  <CardCom
                    imgurl={"https://code.recuweb.com/c/u/3a09f4cf991c32bd735fa06db67889e5/2018/08/wordpress-photo-gallery-plugins1.png"}
                    title="Images Gallery"
                    subtitle=" "
                    text="Images Gallery application on react."
                    Link1D="Demo"
                    Link1="https://nanpipat.github.io/ReactApp_ImgGallery/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/ReactApp_ImgGallery"
                  />
                  <CardCom
                    imgurl={"https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"}
                    title="Color Picker"
                    subtitle=" "
                    text="Color Picker on react."
                    Link1D="Demo"
                    Link1="https://nanpipat.github.io/ReactApp_ColorPicker/"
                    Link2D="Code"
                    Link2="https://github.com/nanpipat/ReactApp_ColorPicker"
                  />

                  {/* <CardCom
                    imgurl= {reim}
                    title="Card title3"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  />
                  <CardCom
                    imgurl= {reim}
                    title="Card title3"
                    subtitle=" "
                    text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the firstThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first"
                  /> */}
                </CardColumns>
              </div>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
              <h2 className="mb-5">Interests</h2>
              <p>I like to play music Like to watch concerts And like to eat delicious food<br />
                  I like Korean bands and really like Korean dramas. </p>
              {/* <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p> */}
            </div>
          </section>

          <hr className="m-0" />

        </div>

      </div>
    );
  }
}

export default App;
