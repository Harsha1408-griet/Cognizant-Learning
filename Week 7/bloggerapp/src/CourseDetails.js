function CourseDetails({ courses }) {
  return (
    <div className="column">
      <h1>Course Details</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
