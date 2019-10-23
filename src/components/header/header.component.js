import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

const Header = ({search})=>{
    return(
        <Navbar bg="info" variant="dark">
            <Navbar.Brand className='mr-auto ml-5' href="#">AirportWiki</Navbar.Brand>
            <Form inline className='mr-5 my-2'>
                <Form.Control type="search" placeholder="Search airport" className="mr-sm-3" onChange={search} />
            </Form>
        </Navbar>
    )
}
export default Header;
