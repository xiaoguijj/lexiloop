# 词环 LexiLoop

独立的英语四六级背词 PWA，包含考试日期规划、三档间隔复习、CSV/粘贴导入、学习统计与 Web Push 提醒。

## 本地体验

页面默认使用演示数据和本机保存，不配置后端也可完整试用学习、导入、统计与通知权限流程。

## Supabase 生产配置

1. 创建 Supabase 项目，启用 Email OTP / Magic Link。
2. 执行 `supabase/migrations/202608130001_lexiloop.sql`，创建表、索引、RLS 和新用户示例词包。
3. 按 `.env.example` 配置前端和 VAPID 变量；服务端另配置 `SUPABASE_SERVICE_ROLE_KEY`。
4. 部署 `send-reminders` Edge Function，使用 Supabase Cron 每分钟调用。函数会根据每个用户的时区与提醒时间选择订阅，并自动停用 404/410 失效设备。

> 注：真实邮箱登录、云同步与后台推送需要项目所有者提供 Supabase 和 VAPID 密钥。密钥不应提交到代码库。
