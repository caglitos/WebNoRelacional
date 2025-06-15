import React from "react";

interface ArticleProps {
  title?: string;
  content?: string;
  content2?: string;
  image?: string;
  alt?: string;
  classNameImg?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  content,
  content2,
  image,
  alt,
  classNameImg,
}) => {
  return (
    <article>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <p className="wh">{content}</p>
          <p className="wh">{content2}</p>
        </div>
        <figure>
          <img src={image} alt={alt} className={classNameImg} />
        </figure>
      </div>
    </article>
  );
};

export default Article;
