import React, { useState } from 'react';
import './App.css';
import { books, blogs, courses } from './data';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="app">
      <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
      <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
      <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>

      <div className="row">
        {showCourses && <CourseDetails courses={courses} />}
        {showBooks && <BookDetails books={books} />}
        {showBlogs && <BlogDetails blogs={blogs} />}
      </div>
    </div>
  );
}

export default App;
