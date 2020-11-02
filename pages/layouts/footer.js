import React from 'react';
import {Container} from 'react-bootstrap'

const Footer = ({structuredData}) => {

    return (<>
    <footer className="bg-switch fixed-bottom code-tutorial-element">
        <Container className="text-center text-muted">
            <div class="py-3">
                Copyright &copy; {(new Date().getFullYear())} Code Tutorial. All rights reserved
            </div>
        </Container>
    </footer>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    </>)
}

export default Footer