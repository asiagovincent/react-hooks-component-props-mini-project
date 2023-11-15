import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

const App = () => (
  <div>
    <Header blogName={blogData.name} />
    <About image={blogData.image} aboutText={blogData.about} />
    <ArticleList posts={blogData.posts} />
  </div>
);

export default App;
