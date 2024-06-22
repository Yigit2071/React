import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from "../redux/slices/productSlice"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {

    const [count, setCount] = useState(0)

    const { id } = useParams()

    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description } = selectedProduct

    const dispatch = useDispatch()


    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count

        }
        dispatch(addToBasket(payload))
    }





    useEffect(() => {
        getProductById()


    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }



    return (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "row ", justifyContent: "center" }}>
            <div style={{ marginRight: "40px" }}>
                <img src={image} width={300} height={500} />
            </div>
            <div>
                <h1 style={{ fontFamily: "arial" }}>{title}</h1>
                <p style={{ fontFamily: "arial", fontSize: "20px" }}> {description} </p>
                <h1 style={{ fontSize: "50px", fontFamily: "arial", fontWeight: "bold", color: "red" }}> {price}₺ </h1>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={() => setCount(count + 1)} style={{ fontSize: "40px", marginRight: "5px" }} /> <span style={{ fontSize: "35px" }}>{count}</span>
                    <CiCircleMinus onClick={() => setCount(count - 1)} style={{ fontSize: "40px", marginRight: "5px" }} />
                </div>
                <div>
                    <button onClick={addBasket} style={{ marginTop: "25px", border: "none", borderRadius: "5px", backgroundColor: "rgb(185,76,76)", padding: "10px", color: "#fff" }}>sepete ekle</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails