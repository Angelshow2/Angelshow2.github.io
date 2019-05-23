
// export default {
//   name: 'zs',
//   age: 20
// }

// export default {
//   gender: '男',
//   hobby: '45453'
// }

// 一个文件里面只能有一个 export default
// 一个文件中可以同时出现多个 export ，且只能使用 { } 来接受，这种形式叫做 【按需导出】
//  { } 中必须严格按照导出时的名称 来接收   如需改名称  { title as title123 }  ---可以以这种形式来起别名 （原名称不可用）

const info = {
  name: 'ls',
  gender: '男'
}

// 可以使用任意变量来接收
export default info

export const title = '我是export'
export const container = '我也是一个export'






