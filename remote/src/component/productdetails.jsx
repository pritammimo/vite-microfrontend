import React from 'react'
import axios from "axios";
import {useQuery} from "packagesApp/Queryprovider";
const Productdetails = () => {
    const { isLoading, data: productDetails } = useQuery(
        {
            queryKey: ['productInfo'],
            queryFn: async () => {
                const { data } = await axios.get(`http://localhost:4000/products/5`)
                return data
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError: (error) => {
                console.log(error)
            },
        }
    );
    console.log(productDetails)
    if(productDetails !==undefined){
        return (
            <div>Productdetails
                data:{productDetails.title}
            </div>
          )
    }
    else return null
}

export default Productdetails