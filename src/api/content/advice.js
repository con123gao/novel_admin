import request from '@/utils/request'

// 查询建议列表
export function listAdvice(query) {
  return request({
    url: '/admin/advice/list',
    method: 'get',
    params: query
  })
}

// 改变状态
export function changeAdviceStatus(id, newStatus) {
  return request({
    url: '/admin/advice/changeAdviceStatus',
    method: 'put',
    data: {
      id: id,
      status: newStatus
    }
  })
}

// 删除建议
export function delAdvice(id) {
  return request({
    url: '/admin/advice/delete/' + id,
    method: 'delete'
  })
}

