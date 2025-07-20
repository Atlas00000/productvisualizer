FROM python:3.11-alpine

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Expose port
EXPOSE 8000

# Start the development server
CMD ["python3", "-m", "http.server", "8000"] 