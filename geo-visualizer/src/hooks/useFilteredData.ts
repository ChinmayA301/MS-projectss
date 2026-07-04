import { useMemo } from 'react';
import { Category, HistoricalNode, HistoricalThread } from '../types';

/**
 * Returns nodes and threads that are visible given the currentYear and activeCategories.
 * Includes an opacity value (0‒1) for fade-in/out within a 50-year transition window.
 */

export interface VisibleNode extends HistoricalNode {
  opacity: number;
}

export interface VisibleThread extends HistoricalThread {
  opacity: number;
}

const FADE_WINDOW = 50; // years over which to fade in/out

function computeOpacity(
  startYear: number,
  endYear: number,
  currentYear: number
): number {
  if (currentYear < startYear - FADE_WINDOW || currentYear > endYear + FADE_WINDOW) {
    return 0;
  }
  if (currentYear >= startYear && currentYear <= endYear) {
    return 1;
  }
  // Fade in
  if (currentYear < startYear) {
    return Math.max(0, (currentYear - (startYear - FADE_WINDOW)) / FADE_WINDOW);
  }
  // Fade out
  return Math.max(0, ((endYear + FADE_WINDOW) - currentYear) / FADE_WINDOW);
}

export function useFilteredData(
  nodes: HistoricalNode[],
  threads: HistoricalThread[],
  currentYear: number,
  activeCategories: Set<Category>
) {
  const visibleNodes = useMemo<VisibleNode[]>(() => {
    return nodes
      .map((node) => ({
        ...node,
        opacity: computeOpacity(node.startYear, node.endYear, currentYear),
      }))
      .filter((n) => n.opacity > 0);
  }, [nodes, currentYear]);

  const visibleThreads = useMemo<VisibleThread[]>(() => {
    return threads
      .map((thread) => ({
        ...thread,
        opacity: computeOpacity(thread.startYear, thread.endYear, currentYear),
      }))
      .filter(
        (t) => t.opacity > 0 && activeCategories.has(t.category)
      );
  }, [threads, currentYear, activeCategories]);

  return { visibleNodes, visibleThreads };
}
