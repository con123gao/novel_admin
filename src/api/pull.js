import request from '@/utils/request'

// 查询小说列表
export function listPullNovel(query) {
  return request({
    url: '/admin/pull/novel/list',
    method: 'get',
    params: query
  })
}

// 下载该小说
export function pullNovel(id) {
  return request({
    url: '/admin/pull/novel/pull/' + id,
    method: 'get'
  })
}

