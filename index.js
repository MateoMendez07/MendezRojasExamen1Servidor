//Como primer paso, una variable para declarar el protocolo de intercambio
var http = requiere('http');
//Creacion del servidor
var server = http.createServer();
//servicio web con mi apellido
function mendez(req,resp){
    //Estado satisfactorio 200, mensaje tipo texto plano configurado por json 
    resp.writeHead(200,{'contentType':'text/plain'});
    //Escribo el mensaje
    resp.write('Soy Mateo Mendez, tengo 20 años, estudio la carrera de tecnología superior en desarrollo de software, me gusta el rock, la banda Queen');
    //Finalizar la comunicacion entre cliente y servidor
    resp.end();
}

server.on('request',mendez);
server.listen(3001,function(){
    console.log("La aplicación esta corriendo mediante el puerto 3001");
});
