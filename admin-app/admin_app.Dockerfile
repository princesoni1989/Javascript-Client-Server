FROM nginx:1.15.2-alpine
COPY ./dist/admin-app /var/www
COPY admin_app.com /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
