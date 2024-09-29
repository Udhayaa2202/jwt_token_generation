FROM alpine
WORKDIR /app
COPY . .
RUN apk add nodejs npm
RUN npm i
EXPOSE 8080
CMD ["npm","start"]