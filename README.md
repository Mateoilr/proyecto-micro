# Proyecto Microservicios NestJS: Microservicio básico

## Descripción

Este proyecto implementa la **Opción Microservicio básico** utilizando NestJS. Consiste en dos microservicios que se comunican entre sí usando el transporte TCP.

- Un microservicio actúa como **cliente**, enviando un mensaje con un comando (`get_time`).
- El otro microservicio actúa como **servidor**, escuchando el comando y respondiendo con la hora actual en formato local español.

## Cómo probarlo

1. Instalar las dependencias en ambos microservicios (cliente y servidor):

```bash
cd server
npm install
cd ../client
npm install
```

2. Ejecutar el microservicio **servidor** (que escucha en el puerto 3001):

```bash
cd server
npm run start:dev
```

3. Ejecutar el microservicio **cliente**:

```bash
cd client
npm run start:dev
```

4. Desde el cliente, se puede invocar el método `getTime()` del servicio `TimeService`, que envía el comando `get_time` al servidor.

5. El servidor responde con la hora actual, que es recibida por el cliente.

6. También se puede probar accediendo a la URL `http://localhost:3000/time` para obtener la hora actual desde el servidor directamente.
