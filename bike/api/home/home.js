import utils from '../../utils/network.js'

const apiUrl={
    getbanner:'eventno=1111'
    
}

export default{
getbanner(reqObj={}){
reqObj.url=apiUrl.getbanner
utils.requestPost(reqObj)
    }
}