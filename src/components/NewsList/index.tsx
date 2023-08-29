import React from "react";
import { articleType } from "../../types/components/articleType";
import { NewsListPropsTypes } from "../../types/components/NewsList";
import axios from "axios";
import * as S from "./style";
import * as C from "../../components";
import { usePromise } from "../../hooks";
import EnvConfig from "../../api/EnvConfig";
import { useQuery } from "react-query";

function NewsList({ category }: NewsListPropsTypes) {
  const { isLoading, isError, data, error } = useQuery(
    "newsList",
    () => {
      const query = category === "all" ? "" : `&category=${category}`;
      return axios.get(
        `${EnvConfig.NEWSAPI_URL}?country=kr${query}&apiKey=${EnvConfig.API_KEY}`
      );
    },
    {
      refetchOnWindowFocus: false,
      retry: 2,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {},
    }
  );
  if (isLoading) {
    return <S.NewsListBlock>대기 중...</S.NewsListBlock>;
  }
  if (!data) {
    return null;
  }
  if (isError) {
    return <S.NewsListBlock>에러 발생!</S.NewsListBlock>;
  }

  const { articles } = data.data;
  return (
    <S.NewsListBlock>
      {articles.map((article: articleType) => (
        <C.NewsItem key={article.url} article={article} />
      ))}
    </S.NewsListBlock>
  );
}
export default NewsList;
