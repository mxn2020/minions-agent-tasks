/**
 * Minions Agent-tasks SDK
 *
 * gh agent-task prompts, execution tracking, PR references, and review status
 *
 * @module @minions-agent-tasks/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Agent-tasks.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
