import React from 'react'
import News from '../../pages/News';
import { connect } from 'react-redux';
import { fetchNews } from '../../store/actions/newsActionCreator';

const NewsContainer = ({ fetchNews, loaded, error }) => {
  if(!loaded && !error) fetchNews()

  return (
    <News />
  )
}

const mapStateToProps = ({ news }) => {
  return {
    loaded: news.loaded,
    error: news.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
