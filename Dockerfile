FROM node:24-alpine as build

WORKDIR /app

COPY . .

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/sevtech-test/browser /usr/share/nginx/html

EXPOSE 80