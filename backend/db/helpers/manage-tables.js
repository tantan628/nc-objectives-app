const db = require('../connection');

const createTables = async () => {
    await db.query(`
    CREATE TABLE course_sections (
        name VARCHAR PRIMARY KEY,
        duration INT NOT NULL,
        objective_count INT DEFAULT 0 NOT NULL
    );`);

    await db.query(`
    CREATE TABLE objectives (
        objective_id SERIAL PRIMARY KEY,
        summary VARCHAR NOT NULL,
        complete_status BOOLEAN DEFAULT false NOT NULL,
        completed_date TIMESTAMP WITH TIME ZONE,
        custom_objective BOOLEAN DEFAULT false NOT NULL,
        course_section VARCHAR NOT NULL REFERENCES course_sections(name),
    );`);
};

const dropTables = async () => {
    await db.query(`DROP TABLE IF EXISTS objectives;`);
    await db.query(`DROP TABLE IF EXISTS course_sections;`)
};

module.exports = { createTables, dropTables };