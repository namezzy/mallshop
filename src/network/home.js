import {request} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


let totalNums = []

const nums1 = [20, 11, 222]
const num2 = [111, 22, 333]

totalNums.push(...nums1)
