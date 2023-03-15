
import './App.css';
import { Layout } from './components/index';
import Home from "./Pages/Home";
import Ditails from "./Pages/Ditails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateContexr, useStateContext } from './context/StateContext';
import { useContext } from 'react';

function App() {
  const products =
    [
      { id: 0, price: 2000, title: "headset", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 1, price: 22000, title: "Dimond Ring", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 2, price: 6300, title: "Dimond Ring Cover", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 3, price: 2000, title: "Wide Plain Screen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 4, price: 20000, title: "Military Camouflage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 5, price: 5600, title: "Jaket Pack", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 6, price: 30000, title: "Smart TV", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 7, price: 2500, title: "Smart Phone", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
    ]

  return (
    <div>
      <Router>
        <StateContexr>
          <Layout>
            <div>
              <Routes>
                <Route exact path="/" element={<Home itemsdata={products} />} />

                {products.map((elem) => (
                  <Route path={`/${elem.title}`} element={<Ditails Data={elem} />} key={elem.id} />))}
              </Routes>
            </div>
          </Layout>
        </StateContexr>
      </Router>
    </div>
  );
}

export default App;

  // const products = [
  //   { id: 0, price: 2000, title: "headset", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 1, price: 22000, title: "Dimond Ring", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 2, price: 6300, title: "Dimond Ring Cover", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 3, price: 2000, title: "Wide Plain Screen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 4, price: 20000, title: "Military Camouflage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 5, price: 5600, title: "Jaket Pack", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 6, price: 30000, title: "Smart TV", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  //   { id: 7, price: 2500, title: "Smart Phone", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
  // ]