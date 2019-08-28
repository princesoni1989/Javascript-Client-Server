import React, {Component} from 'react'
import Header from "./Header";
import {Jumbotron, Button} from 'react-bootstrap'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron>
                    <h1>Hello, Client!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}