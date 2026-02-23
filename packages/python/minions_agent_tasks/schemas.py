"""
Minions Agent-tasks SDK — Type Schemas
Custom MinionType schemas for Minions Agent-tasks.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

agent_task_type = MinionType(
    id="agent-tasks-agent-task",
    name="Agent task",
    slug="agent-task",
    description="A task submitted to gh agent-task create for autonomous implementation.",
    icon="🤖",
    schema=[
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="prompt", type="string", label="prompt"),
        FieldDefinition(name="promptTemplateId", type="string", label="promptTemplateId"),
        FieldDefinition(name="branch", type="string", label="branch"),
        FieldDefinition(name="prNumber", type="number", label="prNumber"),
        FieldDefinition(name="prUrl", type="string", label="prUrl"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="submittedAt", type="string", label="submittedAt"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
        FieldDefinition(name="reviewStatus", type="select", label="reviewStatus"),
        FieldDefinition(name="mergedAt", type="string", label="mergedAt"),
    ],
)

task_batch_type = MinionType(
    id="agent-tasks-task-batch",
    name="Task batch",
    slug="task-batch",
    description="A batch of related agent-tasks to implement a feature set.",
    icon="📋",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="taskIds", type="string", label="taskIds"),
        FieldDefinition(name="executionOrder", type="string", label="executionOrder"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

task_result_type = MinionType(
    id="agent-tasks-task-result",
    name="Task result",
    slug="task-result",
    description="The outcome of a completed agent-task with quality assessment.",
    icon="✅",
    schema=[
        FieldDefinition(name="agentTaskId", type="string", label="agentTaskId"),
        FieldDefinition(name="filesChanged", type="number", label="filesChanged"),
        FieldDefinition(name="linesAdded", type="number", label="linesAdded"),
        FieldDefinition(name="linesRemoved", type="number", label="linesRemoved"),
        FieldDefinition(name="testsAdded", type="number", label="testsAdded"),
        FieldDefinition(name="buildPassing", type="boolean", label="buildPassing"),
        FieldDefinition(name="qualityNotes", type="string", label="qualityNotes"),
        FieldDefinition(name="reviewedAt", type="string", label="reviewedAt"),
        FieldDefinition(name="reviewedBy", type="string", label="reviewedBy"),
    ],
)

custom_types: list[MinionType] = [
    agent_task_type,
    task_batch_type,
    task_result_type,
]

