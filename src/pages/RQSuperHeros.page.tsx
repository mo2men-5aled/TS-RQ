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
  const { isLoading, data, error, isError } = useQuery<
    SuperHero[],
    CustomError
  >("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error?.message || "Something went wrong..."}</div>;
  }

  return (
    <div>
      <h1>RQSuperHeroes Page</h1>
      <ul>
        {data?.map((item: SuperHero) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeroes;
