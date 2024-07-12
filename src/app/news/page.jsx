"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import newsData from '../components/AntanLinks/newsData';
import Image from 'next/image';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredNews(newsData);
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const results = newsData.filter(news =>
        Object.values(news).some(value =>
          value.toString().toLowerCase().includes(lowerCaseTerm)
        )
      );
      setFilteredNews(results);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col md:flex-row p-4 pt-14">
      <div className="w-full md:w-1/4 p-2 bg-gray-50 rounded-xl mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={() => setSearchTerm(searchTerm)}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="w-full md:w-3/4 p-2">
        <h2 className="text-3xl font-bold mb-2">{searchTerm ? 'Results' : 'News'}</h2>
        <p className='text-green-500 font-bold'>{filteredNews.length} results</p>
        <div className="space-y-4">
          {filteredNews.map(news => (
            <div key={news.id} className="flex flex-col md:flex-row bg-white p-4 shadow rounded">
              {news.image && (
                <div className="w-full md:w-1/3 h-48 relative mb-4 md:mb-0">
                  <Image
                    src={news.image}
                    alt={news.heading}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              )}
              <div className="md:ml-4 flex-1">
                <Link href={`/news/${news.id}`} className="text-xl font-bold block">
                  {news.heading}
                </Link>
                <p className="text-sm text-gray-500 pt-2">{news.date}</p>
                <p className="mt-2">{news.text.split(' ').slice(0, 20).join(' ')}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
