import React from "react";
import Nav from 'react-bootstrap/Nav';

class Footer extends React.Component {
    render() {
        return(
            <Nav className="justify-content-end" activeKey="/">
             <Nav.Item>
             <Nav.Link href="/">Desenvolvidor  </Nav.Link>
             </Nav.Item>
            </Nav>
        );
    }
}

export default Footer;

/* 

          <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-around'}}>
             <h4 style={{}}>Footer 1</h4>
             <h4 style={{}}>Footer 2</h4>
            </div>

            */
