function drawFieldJobChart() {

  fieldJobSvg.selectAll("*").remove();

  const fields = [...new Set(fieldJobData.map(d => d.field))];
  const sectors = [...new Set(fieldJobData.map(d => d.sector))];

  const x = d3.scaleBand()
    .domain(sectors)
    .range([margin.left, width - margin.right])
    .padding(0.05);

  const y = d3.scaleBand()
    .domain(fields)
    .range([margin.top, height - margin.bottom])
    .padding(0.05);

  const color = d3.scaleSequential()
    .domain([0, d3.max(fieldJobData, d => d.value)])
    .interpolator(d3.interpolateOranges);

  fieldJobSvg.append("g")
    .attr("transform", `translate(0,${margin.top})`)
    .call(d3.axisTop(x));

  fieldJobSvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  fieldJobSvg.selectAll("rect")
    .data(fieldJobData)
    .enter()
    .append("rect")
    .attr("x", d => x(d.sector))
    .attr("y", d => y(d.field))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("fill", d => color(d.value))
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.field}</strong><br>${d.sector}: ${d.value}`
      );
    })
    .on("mouseout", hideTooltip);

  fieldJobSvg.selectAll(".value")
    .data(fieldJobData)
    .enter()
    .append("text")
    .attr("x", d => x(d.sector) + x.bandwidth() / 2)
    .attr("y", d => y(d.field) + y.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#111")
    .text(d => d.value);

}