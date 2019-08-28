FROM nginx:1.15.2-alpine
COPY ./build-client /var/www
COPY client.com /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]