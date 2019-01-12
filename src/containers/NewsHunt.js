import React, { Component } from 'react';
import { fetchPostsIfNeeded } from '../actions';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import VisibleFeed from './VisibleFeed';
import Footer from '../components/Footer';
import '../vendor/materialize.min.css';
import '../vendor/fontawesome-free/css/all.min.css';
import '../NewsHunt.css';

class NewsHunt extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    return (
      <div>
        <Navbar />
        <VisibleFeed />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(NewsHunt);