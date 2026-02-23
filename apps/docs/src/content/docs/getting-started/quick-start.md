---
title: Quick Start
description: Get up and running with Minions Agent-tasks in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-agent-tasks/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_agent_tasks import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
agent-tasks info
```
