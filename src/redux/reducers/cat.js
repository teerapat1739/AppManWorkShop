export default (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
      case 'SUCCESS':
        console.log('CAT_SUCCESS')
        return { ...state,  data: action.payload, message: 'SUCCESS' }
      case 'FAILED':
        console.log('CAT_FAILED')
        return { ...state,  data: action.payload, message: 'FAILED' }
      default:
        return {message: 'Loading...'};
    }
  };
