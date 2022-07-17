import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {

const [search, setSearch] = useState('')
const [bookData, setBookData] = useState([])

const searchBook = (e)=>{
if(e.key === "Enter"){

  axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyD3ovW9C_EsKmPaFLdCzt6Nb_vfjfujSLY'+'&maxResults=40')
  .then(res => setBookData(res.data.items))
  .catch( err=> console.log(err))
}
}



  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> body without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book name" value={search} onChange={e => setSearch(e.target.value)}
            onKeyPress={searchBook} />
            
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {/*<img src="./images/book.png" alt="book" />*/}
        </div>
      </div>
      <div className="container">
        {
          
          <Card book={bookData}/>
        }
        
      </div>
    </>
  );
};

export default Main;
