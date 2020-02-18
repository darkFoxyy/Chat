
    var socket = io();
    
    document.addEventListener('submit', (event) => {
        event.preventDefault()
        const msg = document.getElementById('m').value
        console.log(msg)
        document.getElementById('m').value = ''
        socket.emit('chat message', msg);
       
    })
    socket.on('catch', msg => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(msg))
        document.getElementById('messages').appendChild(li)
    })