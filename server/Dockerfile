FROM node:20-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

EXPOSE 3006

CMD ["npm", "run", "start"]
