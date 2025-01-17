import { useState } from "react";
import React from "react";
import OneOnOneNotes from "./OneOnOneNotes";


const StudentDetails = ({ student,}) => {
  const [viewMore, setViewMore] = useState(false);
  const [notes, setNotes] = useState ([]);

  const toggleView = () => {
    setViewMore(!viewMore);
  };

 const addNote = (newNote) => {
    setNotes([...notes,newNote ]);
 };


  const isOnTrack =
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview &&
    student.codewars.current.total > 600;

  const assignmentsPercentage = student.cohort.scores.assignments * 100;
  const projectsPercentage = student.cohort.scores.projects * 100;
  const assessmentsPercentage = student.cohort.scores.assessments * 100;

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <img
        src={student.profilePhoto}
        alt={`${student.names.preferredName}'s profile`}
      />
      <p>Name: {student.names.preferredName}</p>
      <p>UserName: {student.username}</p>
      <p>Birthday: {student.dob}</p>
      <p>Status: {isOnTrack ? "On Track" : "Failing Foward"}</p>
      <button className="toggle-button" onClick={toggleView}>
        {viewMore ? "Hide Details" : "Show Details"}
      </button>

      {viewMore && (
        <div className="additional-info">
          <p>Assigments Score: {assignmentsPercentage}%</p>
          <p>Project Score: {projectsPercentage}%</p>
          <p>Assesments Score: {assessmentsPercentage}%</p>
          <p>
            Resume Certification: {student.certifications.resume ? "✅ " : "❌"}
          </p>
          <p>
            Resume Certification: {student.certifications.resume ? "✅ " : "❌"}
          </p>
          <p>
            LinkedIn Certification: {student.certifications.linkedin ? "✅" : "❌"}
          </p>
          <p>
            GitHub Certification:{student.certifications.github ? "✅" : "❌"}
          </p>
          <p>
            Mock Interview Certification:{student.certifications.mockInterview ? "✅" : "❌"}
          </p>
        </div>
      )}
      <OneOnOneNotes onAddNote={addNote} />
      <div className="notes-list">
        <h4>Notes:</h4>
        <ol>
            {notes.map((note, index) => (
            <li key={index}>
                <strong>{note.commenter}:</strong>{note.comment}
                </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default StudentDetails;
