
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";
const Home = () => {

  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading){
    return <h1>Loading</h1>
  }

  return (
    <div>
      This is Home
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update data</button>
    </div>
  );
}

export default Home;