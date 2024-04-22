FROM python:3.12-alpine
RUN pip install --upgrade pip
ENV PYTHONBUFFERED 1
WORKDIR /management
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .