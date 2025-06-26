import {useSearchParams} from "react-router-dom"
function Home() {
    const [searchParams] = useSearchParams()
    const result = searchParams.get("query")

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Welcome to MyWebsite!</h2>
      <p className="text-gray-700">This is the home page with Tailwind styling.</p>
      <p>Search result: {result}</p>
    </div>
  );
}

export default Home;
