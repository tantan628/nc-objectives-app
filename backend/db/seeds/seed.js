const format = require('pg-format');
const db = require('../connection');
const { dropTables, createTables } = require('../helpers/manage-tables');

const seed = async ({ sectionsData, objectivesData }) => {
    await dropTables();
    await createTables();

    const insertSectionsQueryStr = format(
        "INSERT INTO course_sections (name, duration) VALUES %L RETURNING *;",
        sectionsData.map(({ name, duration }) => [name, duration])
    );

    await db.query(insertSectionsQueryStr);

    const insertObjectivesQueryStr = format(
        "INSERT INTO objectives (summary, complete_status, custom_objective, course_section) VALUES %L RETURNING *;",
        objectivesData.map(({ summary, complete_status = false, custom_objective = false, course_section }) => [
            summary,
            complete_status,
            custom_objective,
            course_section
        ])
    );

    await db.query(insertObjectivesQueryStr);

    const insertObjectiveCountQueryStr = `
    UPDATE course_sections
    SET objective_count = (SELECT COUNT (*) FROM objectives WHERE objectives.course_section = course_sections.name);`

    await db.query(insertObjectiveCountQueryStr);
};

module.exports = seed;