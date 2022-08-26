import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    Box, Center, SimpleGrid,
    Button,
} from '@chakra-ui/react'
import axios from 'axios'


export const Food = () => {
    const [items, setItem] = useState([])
    const [store, setStore] = useState({})
    const { Id } = useParams()

    let Product;
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
        .then(res =>{
            setItem(res.data)
            filt(res.data, Id)
        })
        
    },[Product])
    function filt(items, Id) {
        Product = items.find(e => e.Id == Id)
        setStore(Product)
    }
    


    return (
        <div>
            <Box>
                <SimpleGrid minChildWidth='100px' style={{ margin: "20px" }} spacing='20px' key={store.Id}>
                    <Box className='product'>
                        <Center>
                            <p>{store.Menu_Items} {`(${store.Menu_Category})`}</p>
                        </Center>
                    </Box>
                </SimpleGrid>

            </Box>
            <Box justifyContent={"center"}>
            <div>
                <table>
                    <tr>
                        <thead>
                            <th>Per_Serve_Size</th>
                            <td>{store.Per_Serve_Size}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Trans_fat_g</th>
                            <td>{store.Trans_fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Energy_kCal</th>
                            <td>{store.Energy_kCal}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Total_fat_g</th>
                            <td>{store.Total_fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Cholesterols_mg</th>
                            <td>{store.Cholesterols_mg}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Sat_Fat_g</th>
                            <td>{store.Sat_Fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Added_Sugars_g</th>
                            <td>{store.Added_Sugars_g}</td>
                        </thead>
                    </tr>
                </table>
            </div>
            </Box>
            <Center style={{ marginTop: "40px",display:"flex",gap:"30px", marginLeft:"40%" }}>
                    <Box>
                    <Link to="/"><Button style={{ backgroundColor: "blue" }}>Back</Button></Link>
                    </Box>
            </Center>
        </div>
    )
}
