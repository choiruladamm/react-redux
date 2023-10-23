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
    <div className="w-96 bg-gray-5 border shadow-md border-gray-300 p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">{article.title}</h1>
          <p>{article.body}</p>
        </div>
        <Button variant={"destructive"} size={"sm"} onClick={() => deleteArticle(article)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Article;
