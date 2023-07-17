import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProjectForm({ onAddProject }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name,
      image,
      skills,
      
    };

    // Call the onAddProject function passed from the parent component
    onAddProject(newProject);

    // Redirect to the project list page
    navigate("/project-list");
  };

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Skills:
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
