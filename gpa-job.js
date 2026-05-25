function drawGpaJobChart() {

  gpaJobSvg.selectAll("*").remove();

  const localMargin = {
    top: 80,
    right: 180,
    bottom: 100,
    left: 90
  };

  const x = d3.scaleLinear()
    .domain([2.0, 4.0])
    .range([localMargin.left, width - localMargin.right]);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - localMargin.bottom, localMargin.top]);

  const color = d3.scaleOrdinal()
    .domain(["Employed", "Unemployed"])
    .range([colors[0], colors[3]]);

  gpaJobSvg.append("g")
    .attr("transform", `translate(${localMargin.left},0)`)
    .call(
      d3.axisLeft(y)
        .tickSize(-(width - localMargin.left - localMargin.right))
        .tickFormat("")
    )
    .attr("opacity", 0.12);

  gpaJobSvg.append("g")
    .attr("transform", `translate(0,${height - localMargin.bottom})`)
    .call(d3.axisBottom(x));

  gpaJobSvg.append("g")
    .attr("transform", `translate(${localMargin.left},0)`)
    .call(d3.axisLeft(y));

  gpaJobSvg.selectAll("circle.data-point")
    .data(gpaJobData)
    .enter()
    .append("circle")
    .attr("class", "data-point")
    .attr("cx", d => x(d.gpa))
    .attr("cy", d => y(d.ranking))
    .attr("r", 0)
    .attr("fill", d => color(d.status))
    .attr("opacity", 0.85)
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.status}</strong><br>GPA: ${d.gpa}<br>Ranking: ${d.ranking}`
      );
    })
    .on("mouseout", hideTooltip)
    .transition()
    .duration(800)
    .attr("r", 8);

  gpaJobSvg.append("text")
    .attr("x", (localMargin.left + width - localMargin.right) / 2)
    .attr("y", height - 45)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("GPA");

  gpaJobSvg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("University Ranking");

  const statuses = ["Employed", "Unemployed"];

  const legend = gpaJobSvg.append("g")
    .attr("transform", `translate(${width - 145}, ${localMargin.top})`);

  legend.append("rect")
    .attr("x", -15)
    .attr("y", -18)
    .attr("width", 130)
    .attr("height", 70)
    .attr("rx", 12)
    .attr("fill", "white")
    .attr("stroke", "#e5e7eb")
    .attr("opacity", 0.95);

  statuses.forEach((status, i) => {
    legend.append("circle")
      .attr("cx", 0)
      .attr("cy", i * 28)
      .attr("r", 7)
      .attr("fill", color(status));

    legend.append("text")
      .attr("x", 18)
      .attr("y", i * 28 + 5)
      .attr("class", "legend")
      .text(status);
  });

}