/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useCallback } from "react";
import AddArticle from "./components/AddArticle";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addArticle } from "./store/actionCreators";

interface AppProps {}

const App: FC<AppProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <div className="grid h-screen place-items-center">
      <AddArticle saveArticle={saveArticle} />
    </div>
  );
};

export default App;
