import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown, Form, Container} from 'react-bootstrap'

const Header = ({pageName, activePage, categories}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!Number(localStorage.getItem('dark')))
    }, [checked])

    const handleTheme = () => {
        setChecked(!checked);
        localStorage.setItem('dark', + checked)
    };

    return (<div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>{pageName} - Code Tutorial</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" type="image/svg+xml" />
            <meta name="msapplication-TileColor" content="#da532c" />
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Code Tutorial</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={!checked ? "Dark" : "Light"}
                    onChange={() => handleTheme()}
                    defaultChecked={!checked}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/" activeKey={activePage} className="justify-content-end ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/" eventKey="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about" eventKey="about">About</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown" alignRight>
                        {categories.data.map((category) => (
                            <NavDropdown.Item href={`category/` + category.category_slug} eventKey={category.category_slug}>
                                {category.category_title}
                            </NavDropdown.Item>
                        ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}

export default Header