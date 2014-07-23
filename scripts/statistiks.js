var socket = new WebSocket('ws://www.jessemillar.com:1234')

socket.onopen = function()
{
	socket.send('visitor')
	socket.close()
}