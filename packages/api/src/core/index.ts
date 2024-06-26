/**
 * This is basically a global variable that keeps track if we want to run the
 * standard Stryker mutations, or the precomputed mutations. By default,
 * the standard mutations are used.
 */
export class StrykerMode {
  public static usePrecomputed = false;
}

export type { Position } from './position.js';
export type { Location } from './location.js';
export * from './mutant.js';
export * from '../../src-generated/stryker-core.js';
export * from './report-types.js';
export * from './stryker-options-schema.js';
export * from './partial-stryker-options.js';
export * from './instrument.js';
export * from './mutant-coverage.js';
export * from './mutant-test-plan.js';
export * from './file-description.js';
export * from './mutation-range.js';
/**
 * Re-export all members from "mutation-testing-report-schema" under the `schema` key
 */
export * as schema from 'mutation-testing-report-schema/api';
