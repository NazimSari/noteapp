import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function TextArea() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff"); // varsayılan renk beyaz

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    const note = {
      id: nanoid(),
      title,
      color,
      completed: false,
    };
    dispatch(addNote(note));
    setTitle("");
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="textarea"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your note here..."
        />
      </div>
      <div className="toggle-container">
        <label>
          <input
            className="toggle blue"
            type="checkbox"
            name="color"
            value="rgb(79, 139, 234)"
            checked={color === "rgb(79, 139, 234)"}
            onChange={handleColorChange}
          />
        </label>

        <label>
          <input
            className="toggle yellow"
            type="radio"
            name="color"
            value="rgb(234, 234, 79)"
            checked={color === "rgb(234, 234, 79)"}
            onChange={handleColorChange}
          />
        </label>
        <label>
          <input
            className="toggle red"
            type="radio"
            name="color"
            value="rgb(234, 79, 118)"
            checked={color === "rgb(234, 79, 118)"}
            onChange={handleColorChange}
          />
        </label>
        <label>
          <input
            className="toggle purple"
            type="radio"
            name="color"
            value="rgb(234, 79, 213)"
            checked={color === "rgb(234, 79, 213)"}
            onChange={handleColorChange}
          />
        </label>
        <label>
          <input
            className="toggle green"
            type="radio"
            name="color"
            value="rgb(79, 234, 79)"
            checked={color === "rgb(79, 234, 79)"}
            onChange={handleColorChange}
          />
        </label>
      </div>
      <div>
        <button type="submit" className="ekle">
          Add Note
        </button>
      </div>
    </form>
  );
}

export default TextArea;
