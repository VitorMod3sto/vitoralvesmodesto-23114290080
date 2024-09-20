'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiAnime from "@/services/apiAnime";
import { Table } from "react-bootstrap";
import Link from "next/link";

export default function Page() {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        apiAnime.get('anime').then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Animes">
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {anime.map(anime => (
                        <tr>
                            <td><Link href={`/animes/${anime.mal_id}`} passHref>
                            <img src="https://th.bing.com/th/id/OIP.7nDB1Dc4II4GcWVWkiP8VgAAAA?rs=1&pid=ImgDetMain" 
                            alt="Lupa" width="40" height="35" />
                            </Link>
                            </td>

                            <td>{anime.title}</td>
                            <td>{anime.duration}</td>
                            <td>{anime.year}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
