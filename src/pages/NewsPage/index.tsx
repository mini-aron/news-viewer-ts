import React from "react";
import { useParams } from "react-router-dom";
import * as C from "../../components";
function NewsPage() {
  const { category }: { category?: string } = useParams(); 

  return (
    <>
      <C.Categories />
      <C.NewsList category={category ? category : "all"} />
    </>
  );
}
export default NewsPage;
