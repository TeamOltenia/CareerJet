# Use Node.js LTS version as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or whichever port your NestJS app listens on)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]