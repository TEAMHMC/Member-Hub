/**
 * Where an editor starts from, for a course or for a pathway's tests.
 *
 * Shared by the Curriculum editor and the review screen, because a draft has to open in the
 * same shape for the person who wrote it and the person reviewing it, and two copies of this
 * would drift. Three layers: the compiled course, whatever has been released over it, and the
 * draft over that. Only the difference from the compiled course is ever stored, so the
 * compiled layer is returned too.
 */

import { pathwayById } from './catalog';
import { findCourse } from './editorSource';
import {
  courseToStructure, mergeStructure, pristineCourse, pristineTests,
  type CourseStructure, type FullStructure, type PathwayTests,
} from './courseStructure';

export interface LiveContent {
  content: string;
  sections: { heading: string; body: string }[];
  page?: unknown;
  version: number;
  structure?: CourseStructure | null;
  pathwayTests?: PathwayTests | null;
}

export type EditorStart =
  | { kind: 'tests'; opened: PathwayTests; start: PathwayTests }
  | { kind: 'course'; compiled: FullStructure; opened: FullStructure; start: FullStructure }
  | { kind: 'course'; compiled: null; opened: null; start: null };

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

export const editorStart = (
  id: string,
  itemKind: 'course' | 'tests' | undefined,
  live: LiveContent,
  draft?: { structure?: CourseStructure | null; pathwayTests?: PathwayTests | null } | null,
): EditorStart => {
  const isTests = (itemKind || (id.startsWith('tests:') ? 'tests' : 'course')) === 'tests';
  if (isTests) {
    const p = pathwayById(id.replace(/^tests:/, ''));
    const base: PathwayTests = p ? pristineTests(p) : { preTest: [], postTest: [] };
    const opened = clone(live.pathwayTests || base);
    return { kind: 'tests', opened, start: clone(draft?.pathwayTests || opened) };
  }
  const found = findCourse(id);
  // A course the server lists but this build does not carry.
  if (!found) return { kind: 'course', compiled: null, opened: null, start: null };
  const compiled = courseToStructure(
    pristineCourse(found.course),
    { content: live.content, sections: live.sections, page: live.page, version: live.version } as never,
  ) as FullStructure;
  const opened = mergeStructure(compiled, live.structure);
  return {
    kind: 'course',
    compiled: clone(compiled),
    opened: clone(opened),
    start: clone(draft?.structure ? mergeStructure(compiled, draft.structure) : opened),
  };
};
