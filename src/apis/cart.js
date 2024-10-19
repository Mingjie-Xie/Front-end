import request from '@/utils/http' 

export const inserCartAPI = ({skuId,count}) =>{
    return request({
        url:'/member/cart',
        method: 'POST',
        data:{
            skuId,
            count
        }
    })
}

//获取最新购物车列表
export const findNewCartListAPI = () =>{
    return request({
        url: '/member/cart'
    })
}
//删除购物车
export const delCartAPI = (ids)=>{
    return request({
        url: '/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}