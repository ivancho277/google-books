import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// our class based component to render our saved books page
class Saved extends Component {
  //the state starts as an empty array of books
  state = {
    books: []
  };
  //when component months to DOM we call our getSavedBooks method
  componentDidMount() {
    this.getSavedBooks();
  }
  //gets our books from our database and changes the state of our component to contain return books in array
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
//method to handle deletion of book by id then calls saved books again when updated
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
  //what will render to screen
  render() {
    return (
      //uses our defined grid and sets up a container for it, then we can define rows and cols like in bootstrap
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* renders our card component */}
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    // renders our book array to book components and passes the data as props to each
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      //our button onclick event that calls our handleBookDelete method
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
