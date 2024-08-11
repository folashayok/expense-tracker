import { defineConfig } from 'drizzle-kit'

export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:rPmyHQ04MzWK@ep-shiny-butterfly-a5rosu4s.us-east-2.aws.neon.tech/expense-tracker?sslmode=require'
    }
  };

  // original: process.env.NEXT_PUBLIC_DATABASE_URL