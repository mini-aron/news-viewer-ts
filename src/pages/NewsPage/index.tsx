import React from "react";
import { useParams } from "react-router-dom";
import * as C from "../../components";
function NewsPage() {
  const { category }: { category?: string } = useParams(); // Use useParams to access route parameter

  return (
    <>
      <C.Categories />
      <C.NewsList category={category ? category : "all"} />
    </>
  );
}
export default NewsPage;
