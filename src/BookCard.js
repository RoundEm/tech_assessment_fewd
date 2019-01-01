import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const BookCard = props => {
    return (
        <Row>
            {props.books.map(book => {
                return (
                    <Col sm="3">
                        <Card body>
                            <CardImg 
                                top 
                                width="100%" 
                                src={book.volumeInfo.imageLinks.thumbnail} 
                                alt={`Image of ${book.volumeInfo.title} book cover`} 
                            />
                            <CardTitle>{book.volumeInfo.title}</CardTitle>
                            {/* TODO: loop and split authors when more than 1 exists */}
                            <CardSubtitle>By {book.volumeInfo.authors}</CardSubtitle>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default BookCard;