const salaryData = [
  { nama: "Technology", nilai: 9000000 },
  { nama: "Finance", nilai: 7600000 },
  { nama: "Healthcare", nilai: 6800000 },
  { nama: "Business", nilai: 6100000 },
  { nama: "Education", nilai: 4500000 }
];

const unemploymentData = [
  { jurusan: "Computer Science", Bachelor: 10, Master: 6 },
  { jurusan: "Business", Bachelor: 18, Master: 9 },
  { jurusan: "Engineering", Bachelor: 8, Master: 5 },
  { jurusan: "Education", Bachelor: 20, Master: 12 },
  { jurusan: "Health", Bachelor: 7, Master: 4 }
];

const gpaJobData = [
  { gpa: 3.8, ranking: 90, status: "Employed" },
  { gpa: 3.2, ranking: 65, status: "Employed" },
  { gpa: 2.7, ranking: 40, status: "Unemployed" },
  { gpa: 3.5, ranking: 80, status: "Employed" },
  { gpa: 2.9, ranking: 55, status: "Unemployed" },
  { gpa: 3.9, ranking: 95, status: "Employed" },
  { gpa: 3.1, ranking: 60, status: "Employed" },
  { gpa: 2.5, ranking: 35, status: "Unemployed" }
];

const ageStatusData = [
  { age: "20-22", Employed: 40, Unemployed: 20 },
  { age: "23-25", Employed: 70, Unemployed: 18 },
  { age: "26-28", Employed: 55, Unemployed: 12 },
  { age: "29+", Employed: 35, Unemployed: 8 }
];

const gpaBoxData = [
  { rank: "Low", education: "Bachelor", gpa: 2.6 },
  { rank: "Low", education: "Bachelor", gpa: 2.8 },
  { rank: "Low", education: "Bachelor", gpa: 3.0 },
  { rank: "Low", education: "Master", gpa: 2.9 },
  { rank: "Low", education: "Master", gpa: 3.1 },
  { rank: "Low", education: "Master", gpa: 3.3 },

  { rank: "Medium", education: "Bachelor", gpa: 3.0 },
  { rank: "Medium", education: "Bachelor", gpa: 3.2 },
  { rank: "Medium", education: "Bachelor", gpa: 3.4 },
  { rank: "Medium", education: "Master", gpa: 3.3 },
  { rank: "Medium", education: "Master", gpa: 3.5 },
  { rank: "Medium", education: "Master", gpa: 3.6 },

  { rank: "High", education: "Bachelor", gpa: 3.4 },
  { rank: "High", education: "Bachelor", gpa: 3.6 },
  { rank: "High", education: "Bachelor", gpa: 3.8 },
  { rank: "High", education: "Master", gpa: 3.6 },
  { rank: "High", education: "Master", gpa: 3.8 },
  { rank: "High", education: "Master", gpa: 3.9 }
];

const languageGpaData = [
  { language: 55, gpa: 2.8 },
  { language: 65, gpa: 3.0 },
  { language: 72, gpa: 3.2 },
  { language: 80, gpa: 3.5 },
  { language: 90, gpa: 3.8 },
  { language: 95, gpa: 3.9 },
  { language: 60, gpa: 2.9 },
  { language: 85, gpa: 3.6 }
];

const salaryFactorData = [
  { factor: "GPA", salary: 0.72 },
  { factor: "Language", salary: 0.64 },
  { factor: "Education", salary: 0.58 },
  { factor: "University Rank", salary: 0.69 },
  { factor: "Age", salary: 0.31 },
  { factor: "Internship", salary: 0.52 }
];

const fieldJobData = [
  { field: "Computer Science", sector: "Technology", value: 45 },
  { field: "Computer Science", sector: "Finance", value: 12 },
  { field: "Computer Science", sector: "Education", value: 5 },
  { field: "Computer Science", sector: "Healthcare", value: 3 },

  { field: "Business", sector: "Technology", value: 15 },
  { field: "Business", sector: "Finance", value: 38 },
  { field: "Business", sector: "Education", value: 6 },
  { field: "Business", sector: "Healthcare", value: 4 },

  { field: "Engineering", sector: "Technology", value: 30 },
  { field: "Engineering", sector: "Finance", value: 10 },
  { field: "Engineering", sector: "Education", value: 4 },
  { field: "Engineering", sector: "Healthcare", value: 5 },

  { field: "Education", sector: "Technology", value: 4 },
  { field: "Education", sector: "Finance", value: 3 },
  { field: "Education", sector: "Education", value: 40 },
  { field: "Education", sector: "Healthcare", value: 8 },

  { field: "Health", sector: "Technology", value: 5 },
  { field: "Health", sector: "Finance", value: 2 },
  { field: "Health", sector: "Education", value: 7 },
  { field: "Health", sector: "Healthcare", value: 42 }
];