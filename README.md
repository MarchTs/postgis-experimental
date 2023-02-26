# knexjs

Tags: Database Driver
Type: Library, Nodejs

# Initialize Project

```markdown
npm init
npm install --save-dev @types/node
npm install typescript --save-dev

npm install dotenv

npx tsc --init
```

```jsx
npm install knex
npm install pg
```

# Migration

Make Migration

```jsx
knex migrate:make migration_name
```

Run Migration

```jsx
knex migrate:latest
```

```bash
knex migrate:up

# or

knex migrate:up {{001_migration_name}}
```

```bash
knex migrate:down {{001_migration_name}}
```
