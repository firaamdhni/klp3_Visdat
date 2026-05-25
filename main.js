drawSalaryChart("desc");
drawUnemploymentChart();
drawGpaJobChart();
drawAgeStatusChart();
drawGpaBoxChart();
drawLanguageGpaChart();
drawSalaryFactorChart();
drawFieldJobChart();

d3.select("#sortSalary")
  .on("change", function() {
    drawSalaryChart(this.value);
  });