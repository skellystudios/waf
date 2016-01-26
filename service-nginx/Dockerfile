# Set nginx base image
FROM nginx

# Copy custom configuration file from the current directory
ADD nginx.conf /etc/nginx/conf.d/waf.conf

CMD npm run start