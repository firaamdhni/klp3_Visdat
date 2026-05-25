function drawAgeStatusChart() {

  ageStatusSvg.selectAll("*").remove();

  const keys = ["Employed", "Unemployed"];

  const stackedData = d3.stack()
    .keys(keys)(ageStatusData);

  const x = d3.scaleBand()
    .domain(ageStatusData.map(d => d.age))
    .range([margin.left, width - margin.right])
    .padding(0.3);

  const y = d3.scaleLinear()
    .domain([0, d3.max(ageStatusData, d => d.Employed + d.Unemployed)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  ageStatusSvg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  ageStatusSvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  ageStatusSvg.append("g")
    .selectAll("g")
    .data(stackedData)
    .enter()
    .append("g")
    .attr("fill", (d, i) => colors[i])
    .selectAll("rect")
    .data(d => d.map(item => {
      item.key = d.key;
      return item;
    }))
    .enter()
    .append("rect")
    .attr("x", d => x(d.data.age))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.data.age}</strong><br>${d.key}: ${d.data[d.key]}`
      );
    })
    .on("mouseout", hideTooltip);

  const legend = ageStatusSvg.append("g")
    .attr("transform", `translate(${width - 180},${margin.top})`);

  keys.forEach((key, i) => {
    legend.append("rect")
      .attr("x", 0)
      .attr("y", i * 25)
      .attr("width", 14)
      .attr("height", 14)
      .attr("fill", colors[i]);

    legend.append("text")
      .attr("x", 22)
      .attr("y", i * 25 + 12)
      .attr("class", "legend")
      .text(key);
  });

}