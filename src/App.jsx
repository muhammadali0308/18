import { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/logo.png'
function App() {
  const [mahsulotlar,setMahsulotlar]=useState([]);
  async  function getData(){
      const res= await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setMahsulotlar(data.products)
      console.log(data);
      
    }

      
    useEffect(()=>{
      getData();
    },[]);



  return (
    <>
     
        <header>
          <div className="container">
            <h1>Logo</h1>
            <input type="text"placeholder='search'/>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="q">
              <h1>Filters</h1>
              <p>Status</p>
              <p>Price</p>
              <p>Collections</p>
              <p>Chains</p>
              <p>Categories</p>
            </div>
            <div className="w">

              {mahsulotlar.map((m,i)=>{
                return <div key={i} className="card">
              <img src={m.images[0]} alt="logo" />
              <p>{m.category}</p>
              <h4>{m.title} | {m.price} </h4>
              <button>Buy Now</button>
            </div>
              })}

           
            </div>
          </div>
        </main>
      
    </>
  )
}

export default App
