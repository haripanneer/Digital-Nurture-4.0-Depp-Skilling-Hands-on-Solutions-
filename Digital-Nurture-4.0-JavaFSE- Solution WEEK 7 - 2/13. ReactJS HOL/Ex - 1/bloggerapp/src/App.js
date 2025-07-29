import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showContent, setShowContent] = useState(true);

  // Method 1: If-else conditional rendering
  const renderContentIfElse = () => {
    if (activeTab === 'books') {
      return <BookDetails />;
    } else if (activeTab === 'blogs') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  // Method 2: Element variables
  let content;
  if (activeTab === 'books') {
    content = <BookDetails />;
  } else if (activeTab === 'blogs') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>
      
      <div className="controls">
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? 'Hide Content' : 'Show Content'}
        </button>
      </div>

      {/* Method 3: Ternary operator */}
      {showContent ? (
        <div>
          <div className="tabs">
            <button onClick={() => setActiveTab('books')}>Books</button>
            <button onClick={() => setActiveTab('blogs')}>Blogs</button>
            <button onClick={() => setActiveTab('courses')}>Courses</button>
          </div>

          {/* Method 4: Logical && operator */}
          {activeTab === 'books' && <BookDetails />}
          {activeTab === 'blogs' && <BlogDetails />}
          {activeTab === 'courses' && <CourseDetails />}

          <h3>Alternative Rendering Methods</h3>
          <div className="rendering-methods">
            <h4>Method 1: If-else function</h4>
            {renderContentIfElse()}

            <h4>Method 2: Element variables</h4>
            {content}

            <h4>Method 5: Switch statement (in render)</h4>
            {(() => {
              switch(activeTab) {
                case 'books': return <BookDetails />;
                case 'blogs': return <BlogDetails />;
                case 'courses': return <CourseDetails />;
                default: return null;
              }
            })()}
          </div>
        </div>
      ) : (
        <p>Content is currently hidden. Click the button above to show.</p>
      )}
    </div>
  );
}

export default App;