function drawLanguageGpaChart() {

  languageGpaSvg.selectAll("*").remove();

  const x = d3.scaleLinear()
    .domain([40, 100])
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([2.0, 4.0])
    .range([height - margin.bottom, margin.top]);

  languageGpaSvg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  languageGpaSvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  languageGpaSvg.selectAll("circle")
    .data(languageGpaData)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.language))
    .attr("cy", d => y(d.gpa))
    .attr("r", 0)
    .attr("fill", colors[2])
    .attr("opacity", 0.8)
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>Language: ${d.language}</strong><br>GPA: ${d.gpa}`
      );
    })
    .on("mouseout", hideTooltip)
    .transition()
    .duration(800)
    .attr("r", 8);

  languageGpaSvg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 45)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Language Proficiency");

  languageGpaSvg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("GPA");

}