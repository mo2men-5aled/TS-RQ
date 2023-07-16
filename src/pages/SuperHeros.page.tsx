// type SuperHerosProps = {
//   name: string;
// };

import { useState, useEffect } from "react";

import instance from "../connection/connect";

interface Item {
  id: number;
  name: string;
}

const SuperHeros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Item[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/superheroes");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <h1>Super Heros</h1>
      <ul>
        {data?.map((item: Item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeros;
