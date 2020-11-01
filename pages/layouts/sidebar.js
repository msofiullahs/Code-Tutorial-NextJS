import React from 'react';
import {Col, Card, Media} from 'react-bootstrap'

const Sidebar = ({about}) => {

    return (<Col xs={12} lg={3}>
        {
            about ? 
            <Card bg="transparent" className="border-0 code-tutorial-element">
                <Card.Header className="border-bottom pt-0">
                    <h5 className="m-0 text-center">About Me</h5>
                </Card.Header>
                <Card.Body className="px-0">
                    <Media>
                        <img src="https://sofiullah.my.id/images/myprofile.jpg" width={60} className="mr-3" />
                        <Media.Body className="pt-0">
                            <p className="mb-2" style={{lineHeight: '1rem'}}>
                                <small>I'm an Indonesia based Fullstack, Web and Native Android Developer creating awesome and effective applications for companies or personal of all sizes around the globe and working as developer since 2012.</small>
                            </p>
                            <a href="https://sofiullah.my.id/" target="_blank">More things ...</a>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Card>
            : null
        }
    </Col>)
}

export default Sidebar