import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';



class CardSkill extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardGroup>
                <Card style={{ textAlign: "center", alignItems: "center" }}>
                    <CardImg style={{ width: "60px", marginTop: "50px" }} src={require('../assets/img/fe.svg')} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ marginTop: "1em", marginBottom: "1.5em" }}><h3 style={{ color: "#70A1D7" }}>Front-end Developer</h3></CardTitle>
                        <CardText style={{ marginBottom: "2em" }}>I basic coding skill in Front-end Developer </CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Languages:</CardText>
                        <CardText style={{ marginBottom: "2em" }}>React, Angular, HTML/CSS</CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Tools:</CardText>
                        <CardText>VS Studio</CardText>
                        <CardText>VS Code</CardText>

                    </CardBody>
                </Card>
                <Card style={{ textAlign: "center", alignItems: "center" }}>
                    <CardImg style={{ width: "60px", marginTop: "50px" }} src={require('../assets/img/be.svg')} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ marginTop: "1em", marginBottom: "1.5em" }}><h3 style={{ color: "#70A1D7" }}>Back-end Developer</h3></CardTitle>
                        <CardText style={{ marginBottom: "2em" }}>I basic coding skill in Back-end Developer </CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Languages:</CardText>
                        <CardText style={{ marginBottom: "2em" }}>C#, Node.js</CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Tools:</CardText>
                        <CardText>VS Studio</CardText>
                        <CardText>VS Code</CardText>

                    </CardBody>
                </Card>
                <Card style={{ textAlign: "center", alignItems: "center" }}>
                    <CardImg style={{ width: "60px", marginTop: "50px" }} src={require('../assets/img/gs.svg')} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ marginTop: "1em", marginBottom: "1.5em" }}><h3 style={{ color: "#70A1D7" }}>Designer</h3></CardTitle>
                        <CardText style={{ marginBottom: "2em" }}>I used to work as a freelance graphic designer. While attending university</CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Things I enjoy to do:</CardText>
                        <CardText style={{ marginBottom: "2em" }}>Parody image , Ads , Event Cover, etc.</CardText>
                        <CardText style={{ marginTop: "50px", marginBottom: "8px", fontWeight: "600", color: "#70A1D7" }}>Tools:</CardText>
                        <CardText>Photoshop</CardText>
                        <CardText>Ilustrator</CardText>
                    </CardBody>
                </Card>
                {/* <Card style={{textAlign: "center"}}>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{marginTop: "1em", marginBottom:"1.5em"}}><h3 style={{color: "#70A1D7"}}>Activist</h3></CardTitle>
                        <CardText style={{marginBottom: "2em"}}>I like to do various university activities and external organizations. Causing a lot of leadership skill</CardText>
                        <CardText style={{marginTop: "50px", marginBottom:"8px",fontWeight: "600" , color: "#70A1D7"}}>Experiences:</CardText>
                        <CardText style={{marginBottom: "2em"}}>Volunteer Camp, Leadership Camp, Student Organization</CardText>
                        <CardText style={{marginTop: "50px", marginBottom:"8px",fontWeight: "600", color: "#70A1D7"}}>Status:</CardText>
                        <CardText>4 Years Student Organization</CardText>
                        <CardText>Leader of Volunteer Camp</CardText>
                        <CardText>Have a good relationship</CardText>
                    </CardBody>
                </Card> */}
            </CardGroup>

        )
    }

}

export default CardSkill;