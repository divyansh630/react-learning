export const ToppersList = () => {
  const toppers = [
    { id: 1, name: "Jack", rank: 1 },
    { id: 2, name: "Robert", rank: 2 },
    { id: 3, name: "Jennie", rank: 3 },
  ];

  return (
    <ul>
      {toppers.map((topper) => (
        <li key={topper.id}>
          Name :{topper.name} - Rank :{topper.rank}
        </li>
      ))}
    </ul>
  );
};
