const tooltip = d3.select("#tooltip");

const width = 900;
const height = 500;

const margin = {
  top: 50,
  right: 40,
  bottom: 100,
  left: 85
};

const colors = d3.schemeTableau10;

const salarySvg = d3.select("#salaryChart")
  .attr("width", width)
  .attr("height", height);

const unemploymentSvg = d3.select("#unemploymentChart")
  .attr("width", width)
  .attr("height", height);

const gpaJobSvg = d3.select("#gpaJobChart")
  .attr("width", width)
  .attr("height", height);

const ageStatusSvg = d3.select("#ageStatusChart")
  .attr("width", width)
  .attr("height", height);

const gpaBoxSvg = d3.select("#gpaBoxChart")
  .attr("width", width)
  .attr("height", height);

const languageGpaSvg = d3.select("#languageGpaChart")
  .attr("width", width)
  .attr("height", height);

const salaryFactorSvg = d3.select("#salaryFactorChart")
  .attr("width", width)
  .attr("height", height);

const fieldJobSvg = d3.select("#fieldJobChart")
  .attr("width", width)
  .attr("height", height);

function showTooltip(event, html) {
  tooltip
    .style("opacity", 1)
    .html(html)
    .style("left", event.pageX + 15 + "px")
    .style("top", event.pageY - 30 + "px");
}

function hideTooltip() {
  tooltip.style("opacity", 0);
}