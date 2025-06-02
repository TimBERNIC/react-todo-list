const CommentBox = ({
  comment,
  setComment,
  taskTab,
  setTaskTab,
  commentBox,
  setCommentBox,
}) => {
  return (
    <div className="comment-box">
      <button
        onClick={() => {
          commentBox ? setCommentBox(false) : setCommentBox(true);
        }}
        className="comment-button">
        comment
      </button>
      {commentBox && (
        <textarea
          placeholder="Détails"
          className="text-area"
          value={comment}
          onChange={(event) => {
            const taskTabCopy = [...taskTab];
            (taskTabCopy.comment = event.target.value),
              setComment(event.target.value);
            setTaskTab(taskTabCopy);
          }}
        />
      )}
    </div>
  );
};

export default CommentBox;
