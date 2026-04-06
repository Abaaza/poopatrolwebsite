#!/bin/bash
yum update -y
yum install -y nginx certbot python3-certbot-nginx aws-cli

# Download site from S3
mkdir -p /usr/share/nginx/poopatrol
aws s3 sync s3://poopatrolcleaning-website/ /usr/share/nginx/poopatrol/

# Configure nginx
cat > /etc/nginx/conf.d/poopatrol.conf << 'NGINX'
server {
    listen 80;
    server_name poopatrolcleaning.com www.poopatrolcleaning.com;
    root /usr/share/nginx/poopatrol;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map|json|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
}
NGINX

# Remove default server block
rm -f /etc/nginx/conf.d/default.conf
sed -i '/server {/,/}/d' /etc/nginx/nginx.conf 2>/dev/null || true

# Start nginx
systemctl enable nginx
systemctl start nginx

# Get SSL certificate (will retry if DNS hasn't propagated yet)
sleep 30
certbot --nginx -d poopatrolcleaning.com -d www.poopatrolcleaning.com --non-interactive --agree-tos --email admin@poopatrolcleaning.com --redirect

# Set up auto-renewal
echo "0 0 * * * root certbot renew --quiet" > /etc/cron.d/certbot-renew
