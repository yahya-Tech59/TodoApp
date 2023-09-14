import React, { useState } from "react";

export const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          rows="3"
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
        />
      </form>
    </div>
  );
};
