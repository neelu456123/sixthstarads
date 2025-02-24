import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Link  href="/"><img className='header-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724914822/Untitled_design-removebg-preview_nitxn7.png" alt="" /></Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            
            <NavDropdown className='menus'title="Carbonio Mail" id="basic-nav-dropdown">
             <NavDropdown.Item className='menus' href=" /server/carbonio-mail-features ">Carbonio Mail Features</NavDropdown.Item>
              <NavDropdown.Item href="https://zextras.com/carbonio">
                Zextras Carbonio
              </NavDropdown.Item>
              <NavDropdown.Item href="/server/carbonio-community-edition">Carbonio Community Edition</NavDropdown.Item>
             
              <NavDropdown.Item href="/server/high-availability">
              High Availability
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='menus' title="Servers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/server/dedicated-server-hosting-provider-in-chennai">Dedicated Hosting
              </NavDropdown.Item>
              <NavDropdown.Item href="/server/vps-hosting-provider-in-india">
              VPS Hosting
              </NavDropdown.Item>
              <NavDropdown.Item href="/server/cloud-hosting-companies-in-india">cloud hosting</NavDropdown.Item>
             
              <NavDropdown.Item href="/server/shared-server-hosting-in-chennai">
              Shared Server Hosting
              </NavDropdown.Item>
              <NavDropdown.Item href="/server/carbonio-email-hosting-in-chennai">
              Carbonio Email Hosting Providers
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown className='menus' title="Spam Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="/server/incoming-spam-filter">Incoming Spam Filter</NavDropdown.Item>
            
              <NavDropdown.Item href="/server/outgoing-spam-filter">Outgoing Spam Filter</NavDropdown.Item>
             
            
            
            </NavDropdown>
            
            <Nav.Link className='con' href="/contactus">Contact us</Nav.Link>
           <Nav.Link className='demo' href="/get-a-demo">Get a Demo</Nav.Link>
            


          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 