FROM node:14.16.0

# Specify the working directory INSIDE the container
WORKDIR /usr/src/server

# Move the package.json and package-lock.json into the container to install dependencies
COPY package*.json ./

# Install the dependencies
RUN yarn

# Copy the source code
COPY . .

# Expose the port
EXPOSE 4000

# Start the node server
CMD ["yarn", "serve"]