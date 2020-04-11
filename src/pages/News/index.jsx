import React from 'react'
import classes from './News.module.css'
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import NewsItem from '../../components/NewsItem';

const News = ({ loading, news, error }) => {
	return (
		<div className={classes.News}>
			{
				loading 
				? <Loader />
				: error 
					? <div className={classes.ErrorWrapper}>
							<h2>{error}</h2>
						</div>
					: news.map((item, index) => {
						return (
							<NewsItem 
								key={index}
								title={item.title}
								text={item.text}
							/>
						)
				})
			}
		</div>
	)
}

const mapStateToProps = ({ news }) => {
	return {
		loading: news.loading,
		news: news.news,
		error: news.error
	}
}

export default connect(mapStateToProps, null)(News)