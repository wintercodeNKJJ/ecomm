import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContexr = ({ children }) => {
  // const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('AS_ECOMM_CARTITEMS')) || []
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    return JSON.parse(localStorage.getItem('AS_ECOMM_TOTALPRICE')) || 0
  });
  const [totalQuantities, setTotalQuantities] = useState(() => {
    return JSON.parse(localStorage.getItem('AS_ECOMM_TOTALQUANTITES')) || 0
  });
  const [qty, setQty] = useState(1);
  const [productsa, setproductsa] = useState([])
  useEffect(() => {
    setproductsa([
      { id: 0, price: 2000, title: "headset", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 1, price: 22000, title: "Dimond Ring", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 2, price: 6300, title: "Dimond Ring Cover", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 3, price: 2000, title: "Wide Plain Screen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 4, price: 20000, title: "Military Camouflage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 5, price: 5600, title: "Jaket Pack", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 6, price: 30000, title: "Smart TV", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
      { id: 7, price: 2500, title: "Smart Phone", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas, modi est esse voluptatem debitis cumque, perferendis praesentium id voluptate quasi tenetur, velit tempore molestiae necessitatibus fuga aliquid illum doloribus?" },
    ])
  }, [])

  let foundProduct;


  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {

      const updatedCartItems = cartItems.map((cardProduct) => {
        if (cardProduct.id === product.id) return {
          ...cardProduct,
          quantity: cardProduct.quantity + quantity
        }
        else return {
          ...cardProduct,
          quantity: cardProduct.quantity
        }
      })

      setCartItems(updatedCartItems);
    }
    else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    // toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id)

    const newCartItems = cartItems.filter((item) => item.id !== product.id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);

    setCartItems(newCartItems);

  }


  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id)

    const newCartItems = cartItems.filter((item) => item.id !== id)

    if (value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)

        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }

    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }

  useEffect(() => {
    window.localStorage.setItem('AS_ECOMM_CARTITEMS', JSON.stringify(cartItems));
    console.log("stored", cartItems)
  }, [cartItems])

  useEffect(() => {
    window.localStorage.setItem('AS_ECOMM_TOTALPRICE', JSON.stringify(totalPrice));
  }, [totalPrice])

  useEffect(() => {
    window.localStorage.setItem('AS_ECOMM_TOTALQUANTITES', JSON.stringify(totalQuantities));
  }, [totalQuantities])

  return (
    <Context.Provider
      value={{
        productsa,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  )

}

export const useStateContext = () => useContext(Context);