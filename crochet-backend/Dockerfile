# syntax=docker/dockerfile:1
# the line above is a syntac parser directive - instructs docker builder what syntac to use to parse dockerfile
FROM node:23
WORKDIR /crochet-backend

#copying these into the workdir first because docker caches layers - so if there isnt any update to the dependencies then this layer can be reused.
COPY package.json package-lock.json ./

#switch to npm ci --omit=dev when ready for prod
#this installs all dependencies - in prod you can omit dev
RUN npm install

COPY . .

#compilation
RUN npm run build

EXPOSE 5500

# Run the backend server
CMD ["npm","start"]



