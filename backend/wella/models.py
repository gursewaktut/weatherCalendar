from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from wella.db import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    email = Column(String(120), unique=True)
    password = Column(String(500), unique=False)

    def __init__(self, name=None, email=None, passowrd=None):
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.name!r}>'

class Event(Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True)
    event_name = Column(String(50), unique=True)
    user_id = Column(ForeignKey('users.id'))
    time_start = Column(DateTime(), unique=False)
    time_end = Column(DateTime(), unique=False)

    def __init__(self, event_name=None, user_id=None, time_start=None, time_end=None):
        self.event_name = event_name
        self.user_id = user_id
        self.time_start = time_start
        self.time_end = time_end

    def __repr__(self):
        return f'<Event {self.event_name!r}>'

