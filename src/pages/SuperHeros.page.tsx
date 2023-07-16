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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await instance.get("/superheroes");
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
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
