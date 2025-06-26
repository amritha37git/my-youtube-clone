import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResults.css';
import { API_KEY } from '../../data';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.items || []);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Results for "{query}"</h2>
      {results.map((item, index) => (
        <Link
          to={`/video/${item.snippet.categoryId || '0'}/${item.id.videoId}`}
          className="search-card"
          key={index}
        >
          <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
          <div>
            <h3>{item.snippet.title}</h3>
            <p>{item.snippet.channelTitle}</p>
            <p>{moment(item.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
