'use client'

import Pagina from "@/app/components/Pagina";
import apiAnime from "@/services/apiAnime";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";


export default function Page({ params }) {
    const [anime, setAnime] = useState({})

    useEffect(() => {
        apiAnime.get(`anime/${params.id}`).then(resultado => {
            setAnime(resultado.data.data)
        })


    }, [])

    return (
        <Pagina titulo={anime.title}>
            {
                anime.mal_id &&
                <Row className="mt-4">
                    <Col sm={4}>
                        <Card border="danger">
                            <Card.Title className="bg-danger text-white p-2">Foto</Card.Title>
                            <Card.Img variant="top" src={anime.images.jpg.image_url} />
                        <Link href={anime.images.jpg.image_url} passHref>
                        <Button variant="primary" className="m-3">Ampliar</Button>
                        </Link>

                        </Card>
                        
                    </Col>

                    <Col sm={8}>
                        <Card border="danger" >
                            
                            <Card.Title className="bg-danger text-white p-2">{anime.title}</Card.Title>
                                <Card.Text  className='p-3'>
                                <p><b>Episódios: </b>{anime.episodes}</p>
                                <p><b>Status: </b>{anime.status}</p>
                                <p><b>Ano: </b>{anime.year}</p>
                                <p><b>Duração: </b>{anime.duration}</p>
                                <p><b>Score: </b>{anime.score}</p>
                                <p><b>Score: </b>{anime.synopsis}</p>
                                </Card.Text>
                            
                        </Card>
                        
                    </Col>
                    <Col>
                    <Link className="btn btn-primary my-2" href={`/animes`} passHref>
                            Voltar
                        </Link>
                        </Col>
                </Row>
                
            }
        </Pagina>
    )
}



