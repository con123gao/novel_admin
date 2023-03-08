import request from '@/utils/request'

// 查询所有角色
export function listAllRole() {
  return request({
    url: '/system/role/listAllRole',
    method: 'get'
  })
}

// 查询角色列表
export function listRole(query) {
  return request({
    url: '/admin/role/list',
    method: 'get',
    params: query
  })
}
// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/admin/role/info/' + roleId,
    method: 'get'
  })
}
// 修改角色
export function updateRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'put',
    data: data
  })
}
// 删除角色
export function delRole(roleId) {
  return request({
    url: '/admin/role/delete/' + roleId,
    method: 'delete'
  })
}
// 新增角色
export function addRole(data) {
  return request({
    url: '/admin/role/add',
    method: 'post',
    data: data
  })
}
// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/admin/role/changeStatus',
    method: 'put',
    data: data
  })
}
