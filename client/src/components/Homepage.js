import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import axios from "axios";
// import Hero from "../images/hero.png";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArray: []
    };
  }

  getCourses() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
      withCredentials: true
    });

    return service
      .get("/offers")
      .then(courses => {
        // console.log(courses.data);
        // return courses.data.results;
        const newCardArray = courses.data.splice(0,12).map((el, idx) => {
          // let card = new Card(el.published_title, el.title, el.image_125_H);
          // return <CourseCard card={card} />;
          return (
            <CourseCard
              key={idx}
              cardTitle={el.courseTitle}
              cardText={el.courseDetails}
              cardImage={el.courseImage}
              cardLink={el.courseLink}
            />
          );
        });
        this.setState({ cardArray: newCardArray });
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  cardSpace() {
    // console.log(this.state.cardArray);
    return <Row className="mb-4">{this.state.cardArray}</Row>;
  }

  componentDidMount() {
    this.getCourses();
  }

  render() {
    return (
      <div>
        <Jumbotron className="bg-white">
          <div className="imageHolder" />
          <h1 className="display-4">train!t</h1>
          <p className="lead">Unlock your potential.</p>
          {/* <hr className="my-4" /> */}
          <p>
            1:1 tutoring and study groups that enhance your learning
            experiences.
          </p>
          <Button color="primary" size="lg" tag={Link} to="/browse" className="my-2">
            Find your Course
          </Button>
        </Jumbotron>
        <div className="mobileHero" />

        <Container fluid={true} className="p-2">
          <h2 className="display-5 ml-2 ml-4 mb-4">Check out our Classes:</h2>
          {this.cardSpace()}
          <Container className="text-center">
          <Button color="primary" outline size="lg" tag={Link} to="/browse" className="mt-4 w-50">
            Browse to see more Courses
          </Button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default HomePage;
