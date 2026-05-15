FROM nginx:alpine

RUN addgroup -g 1001 app && adduser -u 1001 -G app -s /bin/sh -D app

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=app:app . /usr/share/nginx/html

RUN chown -R app:app /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
    && touch /var/run/nginx.pid && chown app:app /var/run/nginx.pid

USER app
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/healthz || exit 1
