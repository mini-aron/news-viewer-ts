import React, { useState, useEffect } from "react";
import { articleType } from "../../types/components/articleType";
import { NewsListPropsTypes } from "../../types/components/NewsList";
import axios from "axios";
import * as S from "./style";
import * as C from '../../components';
import { usePromise } from "../../hooks";
import EnvConfig from "../../api/EnvConfig";

function NewsList({ category }:NewsListPropsTypes) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `${EnvConfig.NEWSAPI_URL}?country=kr${query}&apiKey=${EnvConfig.API_KEY}`,
    );
  },[category])

  if (loading) {
    return <S.NewsListBlock>대기 중...</S.NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <S.NewsListBlock>에러 발생!</S.NewsListBlock>;
  }
 
  const { articles } = response.data;
  return (
    <S.NewsListBlock>
      {articles.map((article:articleType) => (
        <C.NewsItem key={article.url} article={article} />
      ))}
    </S.NewsListBlock>
  );
}
export default NewsList;