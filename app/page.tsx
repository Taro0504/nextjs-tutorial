import ArticleList from "./ArticleList";
import { Heading } from "./common/components";
import type { Article } from "./types";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });

  // error handling
  if (!res.ok) {
    throw new Error("failed to fetch articles");
  }

  //throw new Error("failed to fetch articles");

  const data = await res.json();
  return data.articles as Article[];
}

  
async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        Articles
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Home;