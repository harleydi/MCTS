import axios from 'axios'


const baseUrl = 'https://data.cityofnewyork.us/resource/9hyh-zkx9.json'
const borough = '?borough='
 

export const getDataOnLoad = async ()=>{
    const response = await axios.get(`${baseUrl}`)
    return response
}

export const getResources = async (userInput) => {
    try {
      const response =  await axios.get(`${baseUrl}${borough}${userInput}`)
      console.log(response.data)
      return response.data
    } catch(error) {
      console.log(error)
    }
}