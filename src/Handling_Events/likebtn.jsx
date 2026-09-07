export const LikeBtn = () => {
  const handleclick = () => {
    alert("thanks for like");
  };
  return (
    <>
      <button onClick={handleclick}>Like</button>
    </>
  );
};
