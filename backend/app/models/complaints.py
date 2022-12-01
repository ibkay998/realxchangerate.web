from sqlalchemy import Column, Integer, String, DateTime, DateTime
from sqlalchemy_utils import EmailType
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.base_class import Base

import enum
from sqlalchemy import Integer, Enum


class Status(enum.Enum):
    Resolved = "Resolved"
    Unresolved = "Unresolved"
    Still_in_review  = "Still_in_review"


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, unique=True, index=True, nullable=False)
    email = Column(EmailType, nullable=False)
    complaint = Column(String(256), nullable=False)
    timestamp = Column(DateTime(timezone=True), nullable=False, default=datetime.now())

    status = Column(Enum(Status), default=Status.Still_in_review)
