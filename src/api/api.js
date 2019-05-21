import fetch from '@/services/httpservices'

/**
 * 登陆
 */

export const login = data => fetch('/admin/login', data, 'POST')

/**
 * 退出
 */

export const signout = () => fetch('/admin/singout')

/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data)
/**
 * 获取定位城市
 */

export const cityGuess = data => fetch('/v1/cities', data)
/**
 * 新增祝福
 */

export const addWish = data => fetch('/shopping/wish/addwish', data, 'POST')
