/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Button } from "./ui/button";

interface ArticleProps {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
}

const Article: FC<ArticleProps> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Button variant={"destructive"} onClick={() => deleteArticle(article)}>Delete</Button>
    </div>
  );
};

export default Article;
