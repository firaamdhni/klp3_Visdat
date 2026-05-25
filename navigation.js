window.showSection = function(type) {

  document.getElementById("hero").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.querySelectorAll(".chart-section").forEach(section => {
    section.style.display = "none";
  });

  const sectionMap = {
    salary: "salarySection",
    unemployment: "unemploymentSection",
    gpaJob: "gpaJobSection",
    ageStatus: "ageStatusSection",
    gpaBox: "gpaBoxSection",
    languageGpa: "languageGpaSection",
    salaryFactor: "salaryFactorSection",
    fieldJob: "fieldJobSection"
  };

  const selectedSection = document.getElementById(sectionMap[type]);

  if (selectedSection) {
    selectedSection.style.display = "block";
  }

};


window.backToMenu = function() {

  document.getElementById("hero").style.display = "flex";
  document.getElementById("dashboard").style.display = "none";

};