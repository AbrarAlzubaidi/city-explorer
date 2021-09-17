import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
class MovieList extends Component {
    render() {
        let title = this.props.title;
        let overview = this.props.overview;
        let vote_average = this.props.vote_average;
        let vote_count = this.props.vote_count;
        console.log(this.props.vote_count);
        let poster_path = this.props.poster_path;
        let popularity = this.props.popularity;
        let release_date = this.props.release_date;

        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <img src={poster_path} alt={title} style={{ width: '253px', height:'200px' }} />
                            <br />
                            {overview}
                            <br />
                            <br />
                            Vote Avg: {vote_average}
                            <br />
                            <br />
                            Total votes: {vote_count}
                            <br />
                            <br />
                            Popularity: {popularity}
                            <br />
                            <br />
                            Release Date: {release_date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        )
    }
}

export default MovieList
