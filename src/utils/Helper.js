import React from 'react'

function filterData(searchInput,Restaurant){
    const filterDatas=Restaurant?.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    )
    return filterDatas
}
export default filterData