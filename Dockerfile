FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY what-is-an-api.mp4 /usr/share/nginx/html/what-is-an-api.mp4
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
