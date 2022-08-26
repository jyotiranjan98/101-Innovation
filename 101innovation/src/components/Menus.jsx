import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Center, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"

export const Menus = () => {
    const [state, setState] = useState([])

    useEffect(()=>{
            axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
            .then(res =>{
                setState(res.data)
            })
            .catch(err =>{
                console.log("error")
            })
    },[])

    return (
        <div>
            <Heading>FoodList</Heading>

            {state.map((e) => {
                return (
                    <Box key={e.Id}>
                        <Link to={`/${e.Id}`}><SimpleGrid minChildWidth='100px'style={{margin:"20px"}} spacing='10px'>
                           
                            <Box className='product'>
                                <Center>
                                    <Text>{e.Menu_Items} {`(${e.Menu_Category})`}</Text>
                                </Center>
                            </Box>
                        </SimpleGrid>
                        </Link>
                        <Box><hr /></Box>
                    </Box>
                )
            })}
        </div>
    )
}
