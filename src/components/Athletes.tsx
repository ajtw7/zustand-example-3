import useStore from "../store";

export const Athletes = () => {
  const athletes = useStore((state) => state.athletes);

  return (
    <div>
      <h2>GREATEST ATHLETES OF ALL TIME.</h2>
      <ul>
        {athletes.map((athlete) => {
          return <p>{athlete}</p>;
        })}
      </ul>
    </div>
  );
};
