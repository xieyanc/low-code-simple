const mutations = {
    getList(state,param) {
        state.cloneList=param;
        console.log(state.cloneList);
      
    }
}

export default mutations

