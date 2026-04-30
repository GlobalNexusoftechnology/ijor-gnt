async function useFetch(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error Fetching Data: ' + error )
    }
}

export default useFetch