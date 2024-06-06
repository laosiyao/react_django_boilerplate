该项目是一个用于 Django (Django Rest Framework) 和 React (使用 React-Bootstrap 进行样式设计) 的 Web 应用程序样板。它使用 Docker、Docker-Compose、Nginx 和 PostgreSQL 进行配置和部署。

### 项目简介

这个仓库包含一个简单的项目样板，适用于 Django 和 React 应用程序。它旨在默认安装最少量的包，并为 Docker 提供一个可随时测试的默认配置。

### 技术栈与已安装的包

- **Django**：后端 API 的核心，包含以下包：
  - Django Rest Framework
  - Pillow（用于管理图像上传）
  - Django-Cors-Headers（允许 React 进行跨域请求）
  - Django-Environ（用于在 settings.py 文件中获取环境变量）
  - Psycopg2-binary（用于管理 PostgreSQL 数据库）
  - Gunicorn（用于管理 Django Web 应用的运行实例）

- **React**：前端库，使用 `npx create-react-app` 创建，额外安装了以下包：
  - Bootstrap 和 React-Bootstrap（用于样式设计）
  - Axios（用于与 Django 后端进行通信）

- **Nginx**：Docker-Compose 测试构建的服务器，默认配置位于 `nginx/nginx.conf` 文件中。

- **PostgreSQL**：默认配置的数据库。

### 使用 Docker 进行安装和运行

1. 克隆仓库：
    ```bash
    git clone https://github.com/Ceci-Aguilera/react_django_boilerplate.git
    ```

2. 复制默认的环境变量配置：
    ```bash
    cp example_env .env
    cp django_backend/django_backend/settings/example_env django_backend/django_backend/settings/.env
    ```

3. 运行 Docker-Compose：
    ```bash
    docker-compose up -d --build
    ```

成功后，React 前端可通过 `localhost:80` 访问，Django 后端可通过 `localhost:80/api` 访问。

### 手动安装和运行

1. 克隆仓库：
    ```bash
    git clone https://github.com/Ceci-Aguilera/react_django_boilerplate.git
    ```

2. 复制 Django 的默认环境变量配置：
    ```bash
    cp django_backend/django_backend/settings/example_env django_backend/django_backend/settings/.env
    ```

3. 设置数据库（默认使用 PostgreSQL），并在 `django_backend/django_backend/settings/.env` 文件中配置数据库凭据。

4. 修改 `settings` 文件以使用开发配置：
    ```python
    from .docker import *
    ```
    修改为：
    ```python
    from .dev import *
    ```

5. 创建并激活虚拟环境，安装依赖：
    ```bash
    cd django_backend
    pip install -r requirements.txt
    ```

6. 运行 Django：
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

7. 配置 React 并安装依赖：
    ```bash
    cd react_frontend
    npm install
    ```

8. 运行 React：
    ```bash
    npm start
    ```

成功后，React 前端可通过 `localhost:3000` 访问，Django 后端可通过 `localhost:8000` 访问。

### 文件结构

- **django_backend**：包含使用 `django-admin startproject` 创建的 Django 项目。
- **react_frontend**：包含使用 `npx create-react-app` 创建的 React 项目。
- **nginx**：包含用于 Docker-Compose 的 Nginx 配置。

### 贡献指南

贡献流程：

1. Fork 仓库并从 master 创建分支
2. 克隆项目到本地
3. 提交变更到自己的分支
4. 更新文档
5. 推送到自己的 fork 仓库
6. 提交 Pull Request

### 有用链接

- [Django 官方文档](https://docs.djangoproject.com/)
- [React 官方文档](https://reactjs.org/docs/getting-started.html)
- [Bootstrap 官方文档](https://getbootstrap.com/docs/)
- [Docker 官方文档](https://docs.docker.com/)
- [PostgreSQL 官方文档](https://www.postgresql.org/docs/)

该项目旨在提供一个简单而有效的全栈 Web 应用程序开发起点。

