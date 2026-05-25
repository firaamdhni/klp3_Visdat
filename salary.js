function drawSalaryChart(order) {

  salarySvg.selectAll("*").remove();

  let sortedData = [...salaryData];

  sortedData.sort((a, b) =>
    order === "asc"
      ? a.nilai - b.nilai
      : b.nilai - a.nilai
  );

  const x = d3.scaleBand()
    .domain(sortedData.map(d => d.nama))
    .range([margin.left, width - margin.right])
    .padding(0.3);

  const y = d3.scaleLinear()
    .domain([0, d3.max(sortedData, d => d.nilai)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  salarySvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(
      d3.axisLeft(y)
        .tickSize(-(width - margin.left - margin.right))
        .tickFormat("")
    )
    .attr("opacity", 0.12);

  salarySvg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  salarySvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickFormat(d => "Rp" + d / 1000000 + "jt"));

  const bars = salarySvg.selectAll("rect")
    .data(sortedData)
    .enter()
    .append("rect")
    .attr("x", d => x(d.nama))
    .attr("y", height - margin.bottom)
    .attr("width", x.bandwidth())
    .attr("height", 0)
    .attr("fill", (d, i) => colors[i % colors.length])
    .attr("rx", 8);

  bars.transition()
    .duration(900)
    .attr("y", d => y(d.nilai))
    .attr("height", d => height - margin.bottom - y(d.nilai));

  bars
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.nama}</strong><br>Rata-rata gaji: Rp${d.nilai.toLocaleString("id-ID")}`
      );
    })
    .on("mouseout", hideTooltip);

  salarySvg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 45)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Job Sector");

  salarySvg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Average Salary");

}