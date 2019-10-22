import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

const Header = ()=>{
    return(
        <Navbar bg="info" variant="dark">
            <Navbar.Brand className='mr-auto ml-5' href="#">IATA airport codes</Navbar.Brand>
            <Form inline className='mr-5 my-2'>
                <Form.Control type="search" placeholder="Search airport" className="mr-sm-3" />
            </Form>
        </Navbar>
    )
}
export default Header;
