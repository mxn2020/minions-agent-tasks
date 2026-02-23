/**
 * @module @minions-agent-tasks/sdk/schemas
 * Custom MinionType schemas for Minions Agent-tasks.
 */

import type { MinionType } from 'minions-sdk';

export const agenttaskType: MinionType = {
  id: 'agent-tasks-agent-task',
  name: 'Agent task',
  slug: 'agent-task',
  description: 'A task submitted to gh agent-task create for autonomous implementation.',
  icon: '🤖',
  schema: [
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'prompt', type: 'string', label: 'prompt' },
    { name: 'promptTemplateId', type: 'string', label: 'promptTemplateId' },
    { name: 'branch', type: 'string', label: 'branch' },
    { name: 'prNumber', type: 'number', label: 'prNumber' },
    { name: 'prUrl', type: 'string', label: 'prUrl' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'submittedAt', type: 'string', label: 'submittedAt' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
    { name: 'reviewStatus', type: 'select', label: 'reviewStatus' },
    { name: 'mergedAt', type: 'string', label: 'mergedAt' },
  ],
};

export const taskbatchType: MinionType = {
  id: 'agent-tasks-task-batch',
  name: 'Task batch',
  slug: 'task-batch',
  description: 'A batch of related agent-tasks to implement a feature set.',
  icon: '📋',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'taskIds', type: 'string', label: 'taskIds' },
    { name: 'executionOrder', type: 'string', label: 'executionOrder' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const taskresultType: MinionType = {
  id: 'agent-tasks-task-result',
  name: 'Task result',
  slug: 'task-result',
  description: 'The outcome of a completed agent-task with quality assessment.',
  icon: '✅',
  schema: [
    { name: 'agentTaskId', type: 'string', label: 'agentTaskId' },
    { name: 'filesChanged', type: 'number', label: 'filesChanged' },
    { name: 'linesAdded', type: 'number', label: 'linesAdded' },
    { name: 'linesRemoved', type: 'number', label: 'linesRemoved' },
    { name: 'testsAdded', type: 'number', label: 'testsAdded' },
    { name: 'buildPassing', type: 'boolean', label: 'buildPassing' },
    { name: 'qualityNotes', type: 'string', label: 'qualityNotes' },
    { name: 'reviewedAt', type: 'string', label: 'reviewedAt' },
    { name: 'reviewedBy', type: 'string', label: 'reviewedBy' },
  ],
};

export const customTypes: MinionType[] = [
  agenttaskType,
  taskbatchType,
  taskresultType,
];

