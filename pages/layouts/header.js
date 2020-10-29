import Head from 'next/head'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Header = ({pageName, activePage}) => {
    return (<div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>{pageName} - Code Tutorial</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">SGIDUS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/" activeKey={activePage}>
                    <Nav.Link href="/" eventKey="/">Home</Nav.Link>
                    <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                    <NavDropdown title="News" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>)
}

export default Header