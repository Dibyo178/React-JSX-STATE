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
