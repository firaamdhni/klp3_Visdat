function drawGpaBoxChart() {

  gpaBoxSvg.selectAll("*").remove();

  const ranks = ["Low", "Medium", "High"];

  const x = d3.scaleBand()
    .domain(ranks)
    .range([margin.left, width - margin.right])
    .padding(0.35);

  const y = d3.scaleLinear()
    .domain([2.0, 4.0])
    .range([height - margin.bottom, margin.top]);

  gpaBoxSvg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  gpaBoxSvg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  ranks.forEach((rank, index) => {

    const values = gpaBoxData
      .filter(d => d.rank === rank)
      .map(d => d.gpa)
      .sort(d3.ascending);

    const q1 = d3.quantile(values, 0.25);
    const median = d3.quantile(values, 0.5);
    const q3 = d3.quantile(values, 0.75);
    const min = d3.min(values);
    const max = d3.max(values);

    const center = x(rank) + x.bandwidth() / 2;
    const boxWidth = x.bandwidth() * 0.6;

    gpaBoxSvg.append("line")
      .attr("x1", center)
      .attr("x2", center)
      .attr("y1", y(min))
      .attr("y2", y(max))
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

    gpaBoxSvg.append("rect")
      .attr("x", center - boxWidth / 2)
      .attr("y", y(q3))
      .attr("width", boxWidth)
      .attr("height", y(q1) - y(q3))
      .attr("fill", colors[index])
      .attr("opacity", 0.75)
      .attr("stroke", "#333")
      .on("mousemove", function(event) {
        showTooltip(
          event,
          `<strong>${rank}</strong><br>Min: ${min}<br>Q1: ${q1}<br>Median: ${median}<br>Q3: ${q3}<br>Max: ${max}`
        );
      })
      .on("mouseout", hideTooltip);

    gpaBoxSvg.append("line")
      .attr("x1", center - boxWidth / 2)
      .attr("x2", center + boxWidth / 2)
      .attr("y1", y(median))
      .attr("y2", y(median))
      .attr("stroke", "#111")
      .attr("stroke-width", 3);

    gpaBoxSvg.append("line")
      .attr("x1", center - boxWidth / 4)
      .attr("x2", center + boxWidth / 4)
      .attr("y1", y(min))
      .attr("y2", y(min))
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

    gpaBoxSvg.append("line")
      .attr("x1", center - boxWidth / 4)
      .attr("x2", center + boxWidth / 4)
      .attr("y1", y(max))
      .attr("y2", y(max))
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

  });

  gpaBoxSvg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 45)
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("University Ranking");

  gpaBoxSvg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("GPA");

}