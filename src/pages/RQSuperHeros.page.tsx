import { useQuery } from "react-query";
import instance from "../connection/connect";

interface SuperHero {
  id: string;
  name: string;
}

interface CustomError {
  message: string;
}

const fetchSuperHeroes = async () => {
  const response = await instance.get("/superheroes");
  return response.data;
};

const RQSuperHeroes = () => {
  const { isLoading, data, error, isError, refetch, isFetching } = useQuery<
    SuperHero[],
    CustomError
  >("super-heroes", fetchSuperHeroes, {
    enabled: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || isFetching) {
    return <div>{error?.message || "Something went wrong..."}</div>;
  }

  const handleRefetch = (_event: React.MouseEvent<HTMLButtonElement>) => {
    refetch();
  };

  return (
    <div>
      <h1>RQSuperHeroes Page</h1>
      <button onClick={handleRefetch}>Refetch</button>
      <ul>
        {data?.map((item: SuperHero) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeroes;
