import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {Navbar, Nav, Form, Container, Dropdown, FormControl, Button, InputGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({
    pageName, 
    activePage, 
    categories,
    postSlug,
    metaDesc,
    metaKeywords,
    ogImage,
    ogType
}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        loadFirst();
    }, [])

    const loadFirst = () => {
        setChecked(!!Number(localStorage.getItem('dark')));
    };

    const handleTheme = (e) => {
        const { checked } = e.target
        setChecked(checked);
        localStorage.setItem('dark', + checked)
        console.log(checked)
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
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap" as="font" type="font/woff2" crossOrigin />
            <link rel="stylesheet" id="active-stylesheet" href={checked ? "../frontend/dark.css" : "../frontend/light.css"} type="text/css" />
            <link rel="canonical" href={`post/` + postSlug} />
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={metaKeywords}/>
            <meta property="og:title" content={pageName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={`post/` + postSlug} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:description" content={metaDesc} />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:creator" content="@sinaungoding"/>
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg={checked ? "dark" : "light"} variant={checked ? "dark" : "light"} className="navbar-switch bg-switch">
            <Container>
                <Navbar.Brand href="/">
                    <div className="logo"></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Form.Switch
                    id="custom-switch"
                    label={checked ? "Dark" : "Light"}
                    onClick={e => handleTheme(e)}
                    defaultChecked={checked}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/" activeKey={activePage} className="justify-content-end ml-auto" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/" eventKey="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/about" eventKey="about">About</Nav.Link>
                        </Nav.Item>
                        <Dropdown as="li" className="nav-item">
                            <Dropdown.Toggle className="nav-link" as="div">
                                Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="bg-switch">
                                {categories.data.map((category) => (
                                    <Dropdown.Item href={`/category/` + category.category_slug} eventKey={category.category_slug}>
                                        {category.category_title}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Form inline className="ml-lg-2 mt-sm-2 mt-md-0">
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">
                                    <FontAwesomeIcon icon="search" />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}

export default Header