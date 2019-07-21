import React, {Component} from 'react'
import Header from "./Header";
import AccordionExampleStandard  from './AccordionExampleStandard'
export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AccordionExampleStandard />
                Hello About Us
            </div>
        )
    }
}