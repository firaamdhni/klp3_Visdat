function drawSalaryFactorChart() {

  salaryFactorSvg.selectAll("*").remove();

  const x = d3.scaleBand()
    .domain(salaryFactorData.map(d => d.factor))
    .range([margin.left, width - margin.right])
    .padding(0.08);

  const color = d3.scaleSequential()
    .domain([0, 1])
    .interpolator(d3.interpolateBlues);

  salaryFactorSvg.append("g")
    .attr("transform", `translate(0,${height / 2 + 40})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-25)")
    .style("text-anchor", "end");

  salaryFactorSvg.selectAll("rect")
    .data(salaryFactorData)
    .enter()
    .append("rect")
    .attr("x", d => x(d.factor))
    .attr("y", height / 2 - 70)
    .attr("width", x.bandwidth())
    .attr("height", 110)
    .attr("fill", d => color(d.salary))
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.factor}</strong><br>Korelasi salary: ${d.salary}`
      );
    })
    .on("mouseout", hideTooltip);

  salaryFactorSvg.selectAll(".heat-label")
    .data(salaryFactorData)
    .enter()
    .append("text")
    .attr("x", d => x(d.factor) + x.bandwidth() / 2)
    .attr("y", height / 2 - 10)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("fill", "#111")
    .text(d => d.salary);

}