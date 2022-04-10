// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Site Inspection',
    competency: 4,
    category: ['Architecture', 'Research'],
  },
  {
    title: 'Adobe Creative Suite',
    competency: 3,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'Rhinoceros',
    competency: 4,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'Revit',
    competency: 4,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'AutoCAD',
    competency: 4,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'ArchiCAD',
    competency: 4,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'ArcMap',
    competency: 3,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'ArcGIS',
    competency: 3,
    category: ['Architecture'],
  },
  {
    title: 'SketchUp',
    competency: 4,
    category: ['Architecture', 'Design'],
  },
  {
    title: 'Microsoft Office',
    competency: 5,
    category: ['Architecture', 'Research'],
  },
  {
    title: 'Agisoft Photoscan',
    competency: 2,
    category: ['Architecture', 'Research', 'Design'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Architecture', 'Languages', 'Research'],
  },
  {
    title: 'Miro',
    competency: 4,
    category: ['Pedagogy'],
  },
  {
    title: 'Canvas',
    competency: 5,
    category: ['Pedagogy'],
  },
  {
    title: 'Google Classroom',
    competency: 4,
    category: ['Pedagogy'],
  },
  {
    title: 'Blended Learning',
    competency: 4,
    category: ['Pedagogy'],
  },
  {
    title: 'Reflective Learning activities',
    competency: 4,
    category: ['Pedagogy'],
  },
  {
    title: 'Student Supervision',
    competency: 4,
    category: ['Pedagogy'],
  },
  {
    title: 'Pre-Documentation',
    competency: 3,
    category: ['Architectural Services'],
  },
  {
    title: 'Development Application Documentation',
    competency: 3,
    category: ['Architectural Services'],
  },
  {
    title: 'Report Preparation/Advice',
    competency: 3,
    category: ['Architectural Services'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
