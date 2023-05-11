import { useSelector, useDispatch } from "react-redux";
import { setFilterText } from "../redux/notes/notesSlice";
import TextArea from "./TextArea";
import NoteList from "./NoteList";
function Search() {
  const filterText = useSelector((state) => state.notes.filterText);
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input
          className="search"
          placeholder="Search..."
          autoFocus
          value={filterText}
          onChange={(e) => dispatch(setFilterText(e.target.value))}
        />
      </form>
      <TextArea />
      <NoteList filterText={filterText} />
    </div>
  );
}

export default Search;
