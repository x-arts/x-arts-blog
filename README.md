# X-Arts Blog

X-Arts Blog 是一个基于 VitePress 的个人数字花园，用于结构化沉淀 AI、工程方法论、工具实践和读书笔记等内容。

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

## 内容维护

1. 在 `docs/` 下按主题新增或修改 Markdown 文件。
2. 如需让新页面出现在导航或侧边栏中，更新 `docs/.vitepress/config.mjs`。
3. 提交前运行 `npm run docs:build`，确认站点可以正常构建。

## 部署

项目通过 GitHub Actions 构建并部署到 GitHub Pages。推送到 `master` 分支后，`.github/workflows/deploy.yml` 
会自动执行构建和发布流程。
