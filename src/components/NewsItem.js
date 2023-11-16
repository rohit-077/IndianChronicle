import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  const onMouseOver=(event)=>{
    event.target.style.fontSize='1.2em'
  }
  const onMouseOut=(event)=>{
    event.target.style.fontSize='1em'
  }
  return (
    <div className="my-3">
      <div
        className="card"
        style={{ margin: "1rem", backgroundColor: "#ffe4c48c" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="position-absolute  translate-middle badge rounded-pill bg-warning text-danger"
            style={{left:'-2rem' ,zIndex: "1"}}
          >
            {source}
          </span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://assets.thehansindia.com/h-upload/2023/11/05/1395806-solar-system.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text" >
            <small className="text-body-secondary" style={{color:'chocolate'}}>
              By {author ? author : "Unkown"} on {new Date(date).toUTCString()}
            </small>{" "}
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm"
            style={{backgroundColor:'#FFBE7B',color:'chocolate', fontSize:'1em'}}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOut}
          >
            <b>Read More</b>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
