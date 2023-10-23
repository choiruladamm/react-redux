/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useCallback } from "react";
import AddArticle from "./components/AddArticle";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addArticle, removeArticle } from "./store/actionCreators";
import Article from "./components/Article";

interface AppProps {}

const App: FC<AppProps> = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <div className="grid h-screen place-items-center my-10">
      <div className="flex flex-col gap-5">
        <AddArticle saveArticle={saveArticle} />
        <div className="flex flex-col gap-4">
          {articles.map((article: IArticle) => (
            <Article
              key={article.id}
              article={article}
              removeArticle={removeArticle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
