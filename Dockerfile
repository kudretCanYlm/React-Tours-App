FROM nginx:alpine

WORKDIR /app

# Eksik dizin oluşturma
RUN mkdir -p /usr/share/nginx/html

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf