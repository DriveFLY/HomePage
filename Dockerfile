FROM node:20-alpine

ARG NEXT_PUBLIC_THIRDWEB_CLIENT_ID
ARG THIRDWEB_SECRET_KEY

ENV NEXT_PUBLIC_THIRDWEB_CLIENT_ID=$NEXT_PUBLIC_THIRDWEB_CLIENT_ID
ENV THIRDWEB_SECRET_KEY=$THIRDWEB_SECRET_KEY
ENV NEXT_PUBLIC_CONVEX_URL=$NEXT_PUBLIC_CONVEX_URL

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]