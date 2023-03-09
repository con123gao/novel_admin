import request from '@/utils/request'
import downloadService from '@/utils/downloadService'

// 查询小说列表
export function listNovel(query) {
  return request({
    url: '/admin/novel/list',
    method: 'get',
    params: query
  })
}

// 删除小说列表
export function delNovel(id) {
  return request({
    url: '/admin/novel/delete/' + id,
    method: 'delete'
  })
}

export function changeNoveldelFlag(id, newStatus) {
  return request({
    url: '/admin/novel/changeNovelDelFlag',
    method: 'put',
    data: {
      id: id,
      delFlag: newStatus
    }
  })
}

// 导出分类
export function exportNovel() {
  return downloadService({
    url: '/admin/novel/allNovelToExcel',
    method: 'get'
  })
}

