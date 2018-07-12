module.exports = {// 保证运行容器里面有console这个api
    log: (message) => {
    console && console.log(message)
    }
}