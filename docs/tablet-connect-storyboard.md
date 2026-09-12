# Tablet connect walkthrough · lightweight storyboard

> Product demo (UI as subject). Path: HTML rebuild of simplified frames (not pixel screenshots) so each step can animate independently. Audience: first-time users of the desktop build. 1920×1080 · 30fps · ~20s · zh-CN captions.

## Assumptions

- Visual language follows M3E Canvas: purple accent `#7C5CFF`, dark window `#16181F`, soft canvas `#F6EEF3`.
- No brand campaign — instructional, low energy, clear step labels.
- Hero is the **Connect** flow (QR + dual device), not a marketing slogan.

## Shots

| # | 时间 | 景别 | [CAMERA] | 画面构图 | 关键动效 | 转场 | 验收帧 |
|---|------|------|----------|----------|----------|------|--------|
| 1 | 0–3.0s | 全景 1x | 静止 · 定场 | 深底居中：左 PC 框 55%、右平板占 35%，中间虚线 Wi‑Fi；顶部大字「平板连接桌面」 | 两设备入场 + Wi‑Fi 波纹一次呼吸 | 共享元素（两设备）缩到下一镜 | f45 / f80 |
| 2 | 3.0–5.5s | 中景 1.3x | push-in → 锚点 = Connect 按钮 | PC 窗口完整，右下 Connect 紫胶囊占 18% 宽 | 光标弧线入场 → 点击 ripple | mask-wipe 到二维码窗 | f110 / f150 |
| 3 | 5.5–9.0s | 近景 1.6x | 静止 · 关键 UI hold | Connect 对话框居中 45%：QR 白底、URL 一行、状态点 | QR 从 0→1 缩放入场；URL 文字 stagger | 缩放过渡到双机全景 | f200 / f250 |
| 4 | 9.0–12.5s | 全景 1x | 静止 · 步骤说明 | 左 PC 右平板；标题「同一 Wi‑Fi 扫码」；步骤 1-3 小字 | 步骤序号依次亮起；平板角对 QR 扫描光带 | 共享元素 → 镜像画面 | f300 / f350 |
| 5 | 12.5–17.5s | 中景 1.2x | 轻微 pull-out · 展示同步 | 平板显示 PC 简化镜像；紫圆环笔迹随「笔」移动 | 笔迹路径绘制；镜像同步闪烁一次 | 流白 | f420 / f500 |
| 6 | 17.5–20s | 全景 1x | 静止 · 谢幕 | 三步要点卡：装包 / 同网 / 扫码；底部仓库链接 | 文案两拍入场后 hold | 无 | f560 / f590 |

## Cover test (per shot)

Each hold frame keeps ≤3 active elements and one focus (Connect button → QR → dual-device scan → pen ring).
