import { useAppDispatch } from "..";
import { postsActions } from "../slices/postsSlice";

export function Posts() {
  const dispatch = useAppDispatch();

  function handleAddPost() {
    dispatch(postsActions.addPost());
  }

  return (
    <div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}
