
export const filterData=(searchText,Restaurant)=>{
    return (Restaurant.filter(RList=>{
        return RList?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    }))
}