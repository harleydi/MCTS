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

export const getProgramId = async (id) => {
  const descUrl = `https://data.cityofnewyork.us/resource/9hyh-zkx9.json?program_lst_id=${id}`
  try {
    const response =  await axios.get(`${descUrl}`)
    console.log(response.data)
    return response.data
  } catch(error) {
    console.log(error)
  }
}