import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const nayoks = ["Razzak", "jasim", "Alamgir", "manna", "shuvo"];
  const products = [
    { name: "photoshop", price: "$90.99" },
    { name: "illastrator", price: "$80.99" },
    { name: "AI", price: "$70.99" },
    { name: "GR", price: "$20.99" },
    { name: "Premier-Elements", price: "$10.99" },
  ];

  // const productNames=products.map(p=>p.name);
  // console.log(productNames)
  // const nayokName=nayoks.map(nayok=>nayok);
  // console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <User/>
        <ul>
          {/* how to dynamiclly list create */}

          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}

          {/* normal list declear */}
          {/* <li>{nayokName[0]}</li>
        <li>{nayokName[1]}</li>
        <li>{nayokName[2]}</li>
        <li>{nayokName[3]}</li> */}
        </ul>

        {products.map((p) => (
          <div
            style={{
              border: "1px solid red",
              backgroundColor: "#FA8072",
              borderRadius: "5px",
              height: "200px",
              width: "200px",
              margin: "5px",
              
            }}
          >
            <h2>{p.name}</h2>
            <h3>{p.price}</h3>
            <button>Buy Now</button>
          </div>
        ))}

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {
           products.map(p=><Product product={p}/>)
        }
        {/* <Product products={products[0]} />
        <Product products={products[1]} />
        <Product products={products[2]} />
        <Product products={products[3]} /> */}
      </header>
    </div>
  );
}

function User(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    // console.log('on loading')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))
  },[]) //empty array pass..
  return (
  
    <div>
      <h3>DisplayUser:{users.length}</h3>
      { 
        console.log(users)
      }
    <ul>
      <li>
        { 
          users.map(user =><li>{user.name}</li>)
          
        }
      </li>
    </ul>
    </div>

  )
}


function Counter(){
  const [count,setCount]=useState(0);
 
  const handleIncrease =()=>{
    // const newCount=count+1;
    // setCount(newCount);
    // setCount(count+1);
  };
  return(
    <div>
    <h1>Count:{count}</h1>
    {/* <button onClick={handleIncrease}>Increase</button> */}
    <button onMouseMove={ ()=>setCount(count+1)}>Increase</button>
    <br/> 
    <button onClick={ ()=>setCount(count-1)}>Decrease</button>
  </div>
  )
 
}



function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "10px",
  };
  console.log(props);
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
