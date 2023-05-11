import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";
function NoteList({ filterText }) {
  const items = useSelector((state) => {
    const filteredItems = state.notes.items.filter((item) => {
      return item.title.toLowerCase().includes(filterText.toLowerCase());
    });
    return filteredItems;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="inline-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.completed ? "completed" : ""}
            style={{ backgroundColor: item.color }}
          >
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(destroy(item.id))}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
