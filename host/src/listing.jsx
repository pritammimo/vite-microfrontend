import React from 'react'
import { useQuery } from 'remoteApp/Queryprovider';
import axios from "axios";
const Listing = () => {
    const { isLoading, data: products } = useQuery(
        {
            queryKey: ['products'],
            queryFn: async () => {
                const { data } = await axios.get(`http://localhost:4000/products`)
                return data
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError: (error) => {
                console.log(error)
            },
        }
    );
  return (
    <div>
        {products !==undefined && products.map((product,index)=>(
            <div key={index}>
              <h1>{product.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Listing