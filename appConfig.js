var port = '9090'
var url = 'http://' + getIPAdress() + ':' + port //前面的http协议要带上，否则访问时容易出现:net::ERR_UNKNOWN_URL_SCHEME错误
var newsCommentKey = 'list'

var config = {
	port,
	url,
	newsCommentKey,
}
export default config;

//使用os模块获取本机ip地址
function getIPAdress() {
	var interfaces = require('os').networkInterfaces();
	for (var devName in interfaces) {
		var iface = interfaces[devName];
		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
				return alias.address;
			}
		}
	}
	return 'localhost'
}

console.log(config)