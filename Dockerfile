FROM node:20-slim

# Update and install system dependencies
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y git ffmpeg curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Clone the repository
RUN git clone https://github.com/lyfe00011/levanter.git /root/LyFE/

# Set working directory
WORKDIR /root/LyFE/

# Install dependencies
RUN yarn install

# Start the bot
CMD ["node", "index.js"]
