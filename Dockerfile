# Start from the official Node.js LTS image
FROM node:22-alpine3.18

# Set the working directory
WORKDIR /app

# Define arguments
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ARG BASE_URL
ENV BASE_URL=$BASE_URL

RUN npm install -g npm@10.8.2
# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install
#RUN npm install --legacy-peer-deps

# Copy all files
COPY . .

# Build the project
RUN npm run build

# Run npm start script
CMD ["npm", "run", "start"]