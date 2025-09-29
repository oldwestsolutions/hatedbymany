#!/bin/bash

# Start the FastAPI backend server
echo "Starting HBM Luxury Images API..."
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
