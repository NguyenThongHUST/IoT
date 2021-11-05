// tạo biến mqtt sử dụng các chức năng của module mqtt
var mqtt = require('mqtt')
// tạo biến client sử dụng thuộc tính connect để kết nối đến broket MQTT với hostname mqtt://iot.eclipse.org
var client = mqtt.connect('mqtt://test.mosquitto.org')
// function có chức năng subscribe 1 topic nếu đã kết nối thành công đến broker
client.on('connect', function() {
  console.log('Client B connected')
 
  client.subscribe('/client-b/sub')
  
  client.publish('/client-a/sub', 'Hello from client B')
})
client.on('message', function(topic, message) {
  
  console.log(message.toString())
 
  client.end()
})
console.log('Client B started')
