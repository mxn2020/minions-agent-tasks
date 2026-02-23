# minions-agent-tasks

**gh agent-task prompts, execution tracking, PR references, and review status**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-agent-tasks/sdk minions-sdk

# Python
pip install minions-agent-tasks

# CLI (global)
npm install -g @minions-agent-tasks/cli
```

---

## CLI

```bash
# Show help
agent-tasks --help
```

---

## Python SDK

```python
from minions_agent_tasks import create_client

client = create_client()
```

---

## Project Structure

```
minions-agent-tasks/
  packages/
    core/           # TypeScript core library (@minions-agent-tasks/sdk on npm)
    python/         # Python SDK (minions-agent-tasks on PyPI)
    cli/            # CLI tool (@minions-agent-tasks/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [agent-tasks.minions.help](https://agent-tasks.minions.help)
- Blog: [agent-tasks.minions.blog](https://agent-tasks.minions.blog)
- App: [agent-tasks.minions.wtf](https://agent-tasks.minions.wtf)

---

## License

[MIT](LICENSE)
