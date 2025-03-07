# syntac=docker/dockerfile:1

FROM node:23

WORKDIR /crochet-frontend

#copying these into the workdir first because docker caches layers - so if there isnt any update to the dependencies then this layer can be reused.
COPY package.json package-lock.json ./

#switch to npm ci once prod ready - faster and better for ci cd. Relies only on package-lock.json
RUN npm install

COPY . .

EXPOSE 3000

# compile
RUN npm run build

# run the frontend 
CMD ["npm", "start"]
