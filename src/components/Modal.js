import React from "react";

const Modal = ({show,item,onClose}) => {

if(!show){

    return null
}

let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;

  return (
    <>
      <div className="overlay overlay">
        <div className="overlay-inner">
          <button className="close">
            <i class="fa-solid fa-xmark" onClick={onClose}></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
              {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a target="_blanc" href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
          {item.volumeInfo.description}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
