# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm ci

COPY src ./src
RUN npx tsc

# Stage 2: Runtime
FROM node:20-slim AS runtime

WORKDIR /app

# Copy only built files + package.json
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

EXPOSE 8000

CMD ["node", "dist/index.js"]
