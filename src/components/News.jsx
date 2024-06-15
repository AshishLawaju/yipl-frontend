import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  async function fetcher() {
    try {
      const data = await axios.get(
        "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
      );

      setNewsList(data.data.news);
    //   console.log({data});
    } catch (error) {
      console.log(error);
    }
  }

  console.log({newsList});
  return (
    <section className="news-main container">
      <h2 className="news-title">News</h2>
      <h4 className="news-subtitle">
        We aim to stop public funds siphoning off and we have a plan that will{" "}
        <br /> help. We are working at the national and EU levels to advance.
      </h4>

      <div className="news-lists">
        {newsList.map((news) => (
          <NewsCard
            title={news.title}
            key={news.title}
            subtitle={news.content}
            photo={news.image}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
