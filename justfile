[private]
default:
  just --list

dev:
  pnpm run dev

start-web-app:
  pnpm run dev

start-back:
  pocketbase serve