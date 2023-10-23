/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddArticleProps {
  saveArticle: (article: IArticle | any) => void;
}

const AddArticle: FC<AddArticleProps> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | object>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="flex flex-col gap-5 w-96">
      <Input
        id="title"
        type="text"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <Input
        id="body"
        type="text"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <Button type="submit" disabled={article === undefined ? true : false}>
        Add Article
      </Button>
    </form>
  );
};

export default AddArticle;
