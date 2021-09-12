import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: '40px' }}><img src='https://image.flaticon.com/icons/png/512/888/888026.png' alt='...' style={{ weidth: '45px', height: '45px' }} />City Explorer</Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
