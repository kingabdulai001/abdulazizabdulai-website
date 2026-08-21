from fastapi import FastAPI
from app.core.config import settings

app = FastAPI(title="Abdul Aziz Abdulai Platform API")

@app.get("/")
def read_root():
    return {
        "message": "Welcome to the Abdul Aziz Abdulai Platform API",
        "environment": settings.ENVIRONMENT
    }