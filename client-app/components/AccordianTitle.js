import React, {Component} from 'react'
import {Accordion} from "semantic-ui-react";

export default class AccordianTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0}
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e, titleProps) {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({activeIndex: newIndex})
    }
    render() {
        return (
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                {this.props.children}
            </Accordion.Title>
        )
    }
}