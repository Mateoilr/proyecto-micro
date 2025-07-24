# Proyecto Microservicios NestJS - Opción 3: Microservicio básico

## Descripción

Este proyecto implementa la **Opción Microservicio básico** utilizando NestJS. Consiste en dos microservicios que se comunican entre sí usando el transporte TCP.

- Un microservicio actúa como **cliente**, enviando un mensaje con un comando (`get_time`).
- El otro microservicio actúa como **servidor**, escuchando el comando y respondiendo con la hora actual en formato local español.

## Cómo probarlo

1. Ejecutar el microservicio **servidor** (que escucha en el puerto 3001).
2. Ejecutar el microservicio **cliente**.
3. Desde el cliente, se puede invocar el método `getTime()` del servicio `TimeService`, que envía el comando `get_time` al servidor.
4. El servidor responde con la hora actual, que es recibida por el cliente.


