/**
 *
 * :::warning
 * `@auth/koa` is currently experimental. The API _will_ change in the future.
 * :::
 *
 * Koa.js Auth is the official Koa integration for Auth.js.
 * It provides a simple way to add authentication to your Koa app in a few lines of code.
 *
 * ## Installation
 * ```bash npm2yarn
 * npm install @auth/koa
 * ```
 *
 * ## Usage
 *
 * ### Provider Configuration
 *
 * ## Signing in and signing out
 *
 * ## Managing the session
 *
 * ## Authorization
 *
 * ```
 *
 * @module @auth/koa
 */

// Re-export types of Auth.js
export type {
  Account,
  DefaultSession,
  Profile,
  Session,
  User,
} from "@auth/core/types"

export function KoaAuth() {
  throw new Error("Not implemented")
}
