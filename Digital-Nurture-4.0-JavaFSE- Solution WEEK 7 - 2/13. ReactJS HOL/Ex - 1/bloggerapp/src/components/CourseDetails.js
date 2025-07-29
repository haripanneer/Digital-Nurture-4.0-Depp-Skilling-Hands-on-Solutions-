import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1001, name: 'React for Beginners', duration: '4 weeks' },
    { id: 1002, name: 'Advanced React Patterns', duration: '6 weeks' },
    { id: 1003, name: 'Full Stack Development', duration: '8 weeks' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;