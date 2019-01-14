import Service from "../../service";

export const getDataCat = (data) => {
    console.log('action --> saveChangePasswordUser ')
    return async (dispatch) => {
        try {
            const results = await Service.getImageItems(data)
            console.log(results)
            alert('SUCCESS')
            dispatch({ type: 'SUCCESS', payload: results })
            console.log(results)
        } catch (error) {
            alert('FAILED')
            dispatch({ type: 'FAILED', payload: '' })
            console.log(error)
        }
    }
}