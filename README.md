# DEEPNET RUNNER

赛博朋克风文字RPG。你是一名网络跑者，接入虚拟网络 DeepNet，对抗 ICE 防御程序，收集装备，无限深入。

## 运行

纯静态项目，无需构建。

```bash
# 直接用浏览器打开
open index.html

# 或用任意 HTTP 服务
npx serve .
python3 -m http.server 8000

# Docker Compose（推荐）
cp .env.example .env   # 可选，修改端口
docker compose up -d   # http://localhost:8080
docker compose down

# Docker 单独运行
docker build -t deepnet-runner .
docker run -p 8080:80 deepnet-runner
```

## 玩法

- 选择节点探索网络，每个节点可能是战斗、商店、修复或数据
- 击败核心节点的 Boss 进入下一层
- 层级无限，没有胜利条件，直到死亡
- 每层自动生成：节点图、Boss、文本均为程序化生成
- 7 种主题循环，每次游玩体验不同

## 操作

全程鼠标点击选择，无需键盘。

## 系统

| 系统 | 说明 |
|------|------|
| 探索 | 节点图导航，选择路径 |
| 战斗 | 回合制，攻击/技能/物品 |
| 背包 | 装备武器、护甲、饰品 |
| 技能 | 升级获得技能点，解锁3条分支 |
| 商店 | 黑市购买装备和消耗品 |

## 技术

- 纯 Vanilla JS（ES Modules）
- 无框架、无构建工具
- CSS 自定义属性 + CRT 霓虹风格
- 中英文双语支持

## 项目结构

```
├── index.html
├── css/
│   ├── tokens.css      # 设计令牌
│   ├── neon.css        # 霓虹风格
│   └── game.css        # 游戏布局
└── js/
    ├── main.js          # 启动入口
    ├── core/
    │   ├── event-bus.js # 事件总线
    │   ├── state.js     # 状态管理
    │   └── renderer.js  # UI 渲染
    ├── data/
    │   ├── layers.js    # 关卡生成
    │   ├── enemies.js   # 敌人定义
    │   ├── items.js     # 物品数据
    │   ├── skills.js    # 技能树
    │   └── i18n.js      # 国际化
    ├── systems/
    │   ├── exploration.js # 探索系统
    │   ├── combat.js     # 战斗系统
    │   ├── inventory.js  # 背包系统
    │   ├── skills.js     # 技能系统
    │   └── i18n.js       # 翻译管理
    └── utils/
        ├── random.js    # 随机工具
        └── text.js      # 文本工具
```

## 调试

仅在 localhost 下可用（生产环境自动禁用）：

```js
game.god()           // 无敌模式
game.state.get()     // 查看状态
game.bus.emit(...)   // 触发事件
```
