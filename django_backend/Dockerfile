FROM python:3.9.19-slim

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 安装系统依赖
RUN apt-get update \
    && apt-get install -y apt-utils gcc g++ tree libpq-dev netcat-openbsd \
    && apt-get clean

# 升级 pip
RUN pip3 install --upgrade pip

# 复制 requirements.txt 文件并安装 Python 依赖
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip3 install -r requirements.txt

# 复制项目代码
COPY . /usr/src/app/


# 确保 entrypoint.sh 和 manage.py 可执行
RUN chmod +x entrypoint.sh manage.py

# 设置容器启动时执行的命令
CMD ["./entrypoint.sh"]
