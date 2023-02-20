import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import axios from 'axios'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import Cart from "./screens/Cart";
import Terms from './screens/Terms'
import { StoreContextProvider } from "./StoreContext";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchItems(){
            const { data } = await axios.get("http://127.0.0.1:8000/api/products")
            setProducts(data)
        };
        fetchItems()
    }, []);


    return (
        <StoreContextProvider products={products}>
            <BrowserRouter>
                <Header />
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route path="/" element={<HomeScreen products={products} />} />
                            <Route path="/cart" element={<Cart products={products}/>} />
                            <Route path="/terms" element={<Terms products={products}/>} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </BrowserRouter>
        </StoreContextProvider>
    );
}

export default App;
