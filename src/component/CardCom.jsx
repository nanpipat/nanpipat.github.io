import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, CardLink
} from 'reactstrap';



class CardCom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ textAlign: "center" }}>
                <CardImg top width="100%" src={this.props.imgurl} alt="Card image cap" />
                <CardBody>
                    <CardTitle style={{ fontSize: "25px" }}>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                    <CardLink style={{ color: "#779ECB" }} href={this.props.Link1}>{this.props.Link1D}</CardLink>
                    <CardLink style={{ color: "#779ECB" }} href={this.props.Link2}>{this.props.Link2D}</CardLink>
                </CardBody>
            </Card>

        )
    }

}

export default CardCom;