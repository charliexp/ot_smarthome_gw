/* ------------------------------------------
LICENSE

 * \version 
 * \date    2017-8-12
 * \author  Xiangcai Huang
 * \brief   configuration of OpenThread 
		Application Gateway components.
--------------------------------------------- */
var config = {}

// Configuration of the coap
//--------------------------------------------------

// Gateway's IPv6 address:
//      fdde:ba7a:b1e5:0:35d1:c886:ea1e:8bb3

// Commands in simulated Nodes:
//      coap put fdde:ba7a:b1e5:0:35d1:c886:ea1e:8bb3 lock_sta con 1

//      coap put fdde:ba7a:b1e5:0:35d1:c886:ea1e:8bb3 light_sta con 0
//      coap put fdde:ba7a:b1e5:0:35d1:c886:ea1e:8bb3 temp con 25

config.coap = {
	  gwAddr:         'fdde:ba7a:b1e5:0:73e9:923:a21d:e66f'  // Gateway's IPv6 address
	, frontdoorAddr:  'fdde:ba7a:b1e5:0:a5c9:5611:c34a:b41a' // Frontdoor's IPv6 address
	, livingroomAddr: 'fdde:ba7a:b1e5:0:a861:c2b5:5e7f:9d5'  // Livingroom's IPv6 address
	, localAddr:      '::1' // Localhost's IPv6 address
	, defaultPort:    5683
	, gwPort:         5683
	, nodePort:       5684  // use different port like 5684 if you are trying virtual nodes (NodeJs: vr_nodes.js)
	, nodeFrontdoor:  'frontdoor'
	, nodeLivingroom: 'livingroom'
	, lockSta:        'lock_sta'
	, lightSta:       'light_sta'
	, temp:           'temp'
	, valOn:          '1'
	, valOff:         '0'
	, valDefault:     '0'
}

// Configuration of the Object Id
//--------------------------------------------------
config.ObjectId = {
	  oIdLight: '3311'
	, oIdTemp:  '3303'
	, iId:      '0'
	, rIdLight: '5850'
	, rIdTemp:  '5700'
}

// Configuration of the http server
//--------------------------------------------------
config.httpServer = {
	  port:   80
	, UIPath: '.././freeboard'
}

// Configuration of the web socket server
//--------------------------------------------------
config.WebSocketServer = {
	port: 3001
}

module.exports = config

