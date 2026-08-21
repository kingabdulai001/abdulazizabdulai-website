from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import settings

# The engine is the core interface to the database
engine = create_engine(settings.DATABASE_URL)

# SessionLocal is a factory that creates new database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base is the class our future database models (tables) will inherit from
Base = declarative_base()


def get_db():
    """
    Dependency that provides a database session to API routes,
    and ensures it's properly closed after each request.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()