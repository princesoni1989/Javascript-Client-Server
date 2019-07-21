import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'
import AccordianTitle from './AccordianTitle'

export default class AccordionExampleStandard extends Component {
    render() {
        const {activeIndex} = this.state

        return (
            <Accordion>
                <AccordianTitle>
                    <Icon name='dropdown'/>
                    What is a dog?
                </AccordianTitle>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                        be found as a welcome guest in many households across the world.
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}
