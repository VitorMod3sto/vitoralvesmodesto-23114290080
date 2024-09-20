import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import axios from 'axios';
import apiAnime from "@/services/apiAnime";
import { useEffect, useState } from "react";


export default function Pagina(props) {
    const [genero, setGenero] = useState([])

    useEffect(() => {
        apiAnime.get(`/genres/anime`).then(resultado => {
            setGenero(resultado.data.data)
        })


    }, [])



    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/animes">Anime</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/animes">Animes</Nav.Link>
                        
                        <NavDropdown title="Gêneros" id="basic-nav-dropdown">
                            
                            {genero.map(genero => (
                            <NavDropdown.Item
                             href="/animes">{genero.name}({genero.count})
                             <Dropdown.Divider />
                             </NavDropdown.Item>
                            
                            ))}
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>
            <Container>
                {props.children}
            </Container>
        </>
    )
}
