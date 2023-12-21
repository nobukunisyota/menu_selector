FROM python
ENV PYTHONUNBUFFERED 1
RUN mkdir /api
WORKDIR /api
RUN pip install --upgrade pip
ADD requirements.txt /api/
RUN pip install -r requirements.txt
