"""
Minions Agent-tasks Python SDK

gh agent-task prompts, execution tracking, PR references, and review status
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Agent-tasks.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
