export const DEPARTMENTS = [
    'CS',
    'Math',
    'English'
];

export const DEPARMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    label: dept,
    value: dept,

}));

export const MOCK_SUBJECTS = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        department: "CS",
        description: "An introduction to the fundamental concepts of computer science.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        name: "Calculus I",
        code: "MATH101",
        department: "Math",
        description: "Differential and integral calculus of functions of one variable.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        name: "English Composition",
        code: "ENG101",
        department: "English",
        description: "Principles of expository writing and rhetorical analysis.",
        createdAt: new Date().toISOString(),
    },
];