import React from "react";
import * as S from "./style";
import { NewsItemPropsTypes } from "../../types/components/NewsItem";

function NewsItem({ article }:NewsItemPropsTypes) {
  const { title, description, url, urlToImage } = article;
  return (
    <S.NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </S.NewsItemBlock>
  );
}

export default NewsItem;
