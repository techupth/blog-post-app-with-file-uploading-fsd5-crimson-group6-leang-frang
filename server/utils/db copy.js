import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:Pgd7kyMbyU@38@localhost:5438/e-commerce2",
});

export { pool };