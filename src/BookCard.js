import React from 'react';
import { 
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle, 
    Row, 
    Col, 
    Button } from 'reactstrap';

const BookCard = props => {
    return (
        <>
            <Row className="d-flex justify-content-between">
                {props.books.map(book => {
                    return (
                        <Col sm="2" className="book-card">
                            <Card key={book.id} body className="book-card p-0">
                                <CardImg 
                                    top 
                                    width="100%" 
                                    src={book.volumeInfo.imageLinks.thumbnail} 
                                    alt={`Image of ${book.volumeInfo.title} book cover`} 
                                />
                                <CardTitle className="book-title">{book.volumeInfo.title}</CardTitle>
                                {/* TODO: add loop to split authors and add comma when more than 1 exists */}
                                <CardSubtitle className="book-author">
                                    By {book.volumeInfo.authors[0]}
                                </CardSubtitle>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Button className="show-more-btn">SHOW MORE</Button>
        </>
    )
}

export default BookCard;