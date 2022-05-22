FROM node:14.15.1-alpine AS build

ENV NODE_ENV production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY insurance_compare_frontend/package*.json ./

ENV NODE_OPTIONS=--max-old-space-size=2048

RUN npm install

RUN npm install --only=dev

RUN npm install -g @angular/cli@~12.0.0

COPY insurance_compare_frontend/ .

RUN ng build --prod --aot=true --buildOptimizer=true --base-href / --deploy-url /

FROM nginx:stable

COPY config/frontend/default.conf /etc/nginx/conf.d

COPY --from=build /usr/src/app/dist/Finsa /var/www/html
