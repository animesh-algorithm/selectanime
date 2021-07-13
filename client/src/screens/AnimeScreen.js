import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HomeScreen from './HomeScreen'

const AnimeScreen = ({ match }) => {
    const [currAnime, setCurrAnime] = useState(null)
    const animeList = useSelector(state => state.anime.data)
    const anime = animeList?.find(a => a.id === match.params.id)

    useEffect(() => {
        setCurrAnime(anime)
        console.log(anime)
    }, [anime, match])

    return (
        <Container className='container'>
            <Link to='/' className='btn btn-light'>Go Back</Link>
            <Row>
                <Col md={4}>
                    <Image src={currAnime?.attributes?.posterImage.medium} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{ currAnime?.attributes?.titles.en_jp }</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Rated { currAnime?.attributes?.ageRating }</p>
                            <p>{ currAnime?.attributes?.ageRatingGuide }</p>
                            <p>Episodes: { currAnime?.attributes?.episodeCount }</p>
                            <p>Episode Length: { currAnime?.attributes?.episodeLength } min</p>
                            <p>Status: { currAnime?.attributes?.status === 'finished' ? 'finished' : 'Not Finished' }</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to={currAnime?.relationships.streamingLinks.links.self}>
                                <Button className='btn-block' type='button'>Stream Link</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={5}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Summary</h2>
                            <p>{ currAnime?.attributes?.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <div>
                <h2>Similar Animes</h2>
                <HomeScreen />
            </div>
        </Container>
    )
}

export default AnimeScreen
