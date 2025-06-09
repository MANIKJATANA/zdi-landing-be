# Use official Node.js Alpine image for minimal size
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependencies files
COPY package.json yarn.lock ./

# Install deps
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Compile TypeScript
RUN yarn build


# ----------------------
# Final image
# ----------------------
FROM node:18-alpine

WORKDIR /app

# Copy built code from build image
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

# Install only prod deps
RUN yarn install --production --frozen-lockfile

# Set production env
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Run server
CMD ["node", "dist/app.js"]
