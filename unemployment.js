function drawUnemploymentChart() {

  unemploymentSvg.selectAll("*").remove();

  const groups = unemploymentData.map(d => d.jurusan);
  const subgroups = ["Bachelor", "Master"];

  const x = d3.scaleBand()
    .domain(groups)
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const xSub = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding(0.05);

  const y = d3.scaleLinear()
    .domain([0, d3.max(unemploymentData, d => Math.max(d.Bachelor, d.Master))])
    .nice()
    .range([height - margin.bottom, margin.top]);

  unemploymentSvg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-25)")
    .style("text-anchor", "end");

  unemploymentSvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickFormat(d => d + "%"));

  unemploymentSvg.append("g")
    .selectAll("g")
    .data(unemploymentData)
    .enter()
    .append("g")
    .attr("transform", d => `translate(${x(d.jurusan)},0)`)
    .selectAll("rect")
    .data(d => subgroups.map(key => {
      return {
        jurusan: d.jurusan,
        key: key,
        value: d[key]
      };
    }))
    .enter()
    .append("rect")
    .attr("x", d => xSub(d.key))
    .attr("y", height - margin.bottom)
    .attr("width", xSub.bandwidth())
    .attr("height", 0)
    .attr("fill", (d, i) => colors[i])
    .attr("rx", 6)
    .on("mousemove", function(event, d) {
      showTooltip(
        event,
        `<strong>${d.jurusan}</strong><br>${d.key}: ${d.value}%`
      );
    })
    .on("mouseout", hideTooltip)
    .transition()
    .duration(900)
    .attr("y", d => y(d.value))
    .attr("height", d => height - margin.bottom - y(d.value));

  const legend = unemploymentSvg.append("g")
    .attr("transform", `translate(${width - 180},${margin.top})`);

  subgroups.forEach((key, i) => {
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