//Javascript code below has been made by referring to 'Most basic Sankey diagram in d3.js' on the d3.js website.
// The code below has been adapted to match this dataset and website design and purpose.

// I also acknowledge the use of ChatGPT and ClaudeAI to assist with implementing the Sankey diagram interactions and adding interactivity using JavaScript.
// All modifications were made with a clear understanding of the code and in accordance with academic integrity guidelines.

// In the code snippet below (1. India Sankey), the dataset was provided to ChatGPT,
// which was used solely to convert the Excel data into a D3.js-compatible format.
const indiaRaw = [
  { Industry: "Artificial Intelligence", State: "Karnataka", Count: 1 },
  { Industry: "Artificial Intelligence", State: "Telangana", Count: 1 },
  { Industry: "Crypto Currency", State: "Karnataka", Count: 1 },
  { Industry: "Crypto Currency", State: "Maharashtra", Count: 1 },
  { Industry: "E-Commerce", State: "Karnataka", Count: 4 },
  { Industry: "E-Commerce", State: "Haryana", Count: 5 },
  { Industry: "E-Commerce", State: "Maharashtra", Count: 4 },
  { Industry: "E-Commerce", State: "Delhi", Count: 2 },
  { Industry: "Education", State: "Karnataka", Count: 3 },
  { Industry: "Education", State: "Maharashtra", Count: 3 },
  { Industry: "Education", State: "Delhi", Count: 1 },
  { Industry: "Financial Technology", State: "Karnataka", Count: 7 },
  { Industry: "Financial Technology", State: "Haryana", Count: 1 },
  { Industry: "Financial Technology", State: "Telangana", Count: 2 },
  { Industry: "Financial Technology", State: "Maharashtra", Count: 3 },
  { Industry: "Financial Technology", State: "Delhi", Count: 1 },
  { Industry: "Food", State: "Maharashtra", Count: 1 },
  { Industry: "Food", State: "Delhi", Count: 1 },
  { Industry: "Healthcare", State: "Karnataka", Count: 1 },
  { Industry: "Healthcare", State: "Haryana", Count: 1 },
  { Industry: "Healthcare", State: "Maharashtra", Count: 2 },
  { Industry: "Hospitality", State: "Karnataka", Count: 1 },
  { Industry: "Hospitality", State: "Haryana", Count: 2 },
  { Industry: "Hospitality", State: "Maharashtra", Count: 2 },
  { Industry: "Management", State: "Karnataka", Count: 4 },
  { Industry: "Management", State: "Haryana", Count: 1 },
  { Industry: "Management", State: "Maharashtra", Count: 1 },
  { Industry: "Misc", State: "Karnataka", Count: 4 },
  { Industry: "Misc", State: "Tamil Nadu", Count: 2 },
  { Industry: "Misc", State: "Rajasthan", Count: 1 },
  { Industry: "Misc", State: "Uttar Pradesh", Count: 1 },
  { Industry: "Software", State: "Karnataka", Count: 1 },
  { Industry: "Software", State: "Haryana", Count: 1 },
  { Industry: "Software", State: "Maharashtra", Count: 5 },
  { Industry: "Software", State: "Uttar Pradesh", Count: 1 },
  { Industry: "Technology", State: "Karnataka", Count: 2 },
  { Industry: "Transportation", State: "Uttar Pradesh", Count: 1 },
];
// End code snippet (1. India Sankey)

// In the code snippet below (2. USA Sankey), the dataset was provided to ChatGPT,
// which was used solely to convert the Excel data into a D3.js-compatible format.
const usRaw = [
  { Industry: "Aerospace", State: "California", Value: 2 },
  { Industry: "Artificial Intelligence", State: "California", Value: 7 },
  { Industry: "Artificial Intelligence", State: "New York", Value: 1 },
  { Industry: "Bio Technology", State: "California", Value: 1 },
  { Industry: "Bio Technology", State: "Massachusetts", Value: 1 },
  { Industry: "Crypto Currency", State: "California", Value: 2 },
  { Industry: "Crypto Currency", State: "New York", Value: 1 },
  { Industry: "Cyber Security", State: "California", Value: 9 },
  { Industry: "Cyber Security", State: "New York", Value: 3 },
  { Industry: "Cyber Security", State: "Washington", Value: 1 },
  { Industry: "Data Science", State: "California", Value: 4 },
  { Industry: "Data Science", State: "Massachusetts", Value: 1 },
  { Industry: "Data Science", State: "North Carolina", Value: 1 },
  { Industry: "E-Commerce", State: "California", Value: 6 },
  { Industry: "E-Commerce", State: "Illinois", Value: 1 },
  { Industry: "E-Commerce", State: "New York", Value: 7 },
  { Industry: "E-Commerce", State: "Washington", Value: 3 },
  { Industry: "Education", State: "California", Value: 3 },
  { Industry: "Education", State: "Massachusetts", Value: 1 },
  { Industry: "Education", State: "New York", Value: 1 },
  { Industry: "Financial Technology", State: "California", Value: 11 },
  { Industry: "Financial Technology", State: "Illinois", Value: 2 },
  { Industry: "Financial Technology", State: "New York", Value: 6 },
  { Industry: "Financial Technology", State: "North Carolina", Value: 1 },
  { Industry: "Food", State: "California", Value: 1 },
  { Industry: "Food", State: "Illinois", Value: 1 },
  { Industry: "Food", State: "Massachusetts", Value: 2 },
  { Industry: "Food", State: "New York", Value: 4 },
  { Industry: "Healthcare", State: "California", Value: 4 },
  { Industry: "Healthcare", State: "Florida", Value: 1 },
  { Industry: "Healthcare", State: "Massachusetts", Value: 2 },
  { Industry: "Healthcare", State: "New York", Value: 1 },
  { Industry: "Healthcare", State: "Pennsylvania", Value: 1 },
  { Industry: "Hospitality", State: "California", Value: 1 },
  { Industry: "Hospitality", State: "Illinois", Value: 1 },
  { Industry: "Hospitality", State: "Massachusetts", Value: 1 },
  { Industry: "Hospitality", State: "New York", Value: 1 },
  { Industry: "Management", State: "California", Value: 6 },
  { Industry: "Management", State: "Florida", Value: 1 },
  { Industry: "Management", State: "Illinois", Value: 1 },
  { Industry: "Management", State: "New York", Value: 5 },
  { Industry: "Management", State: "Texas", Value: 1 },
  { Industry: "Misc", State: "California", Value: 12 },
  { Industry: "Misc", State: "Florida", Value: 1 },
  { Industry: "Misc", State: "New York", Value: 5 },
  { Industry: "Misc", State: "North Carolina", Value: 2 },
  { Industry: "Robotics", State: "California", Value: 2 },
  { Industry: "Robotics", State: "Massachusetts", Value: 1 },
  { Industry: "Software", State: "California", Value: 36 },
  { Industry: "Software", State: "Florida", Value: 1 },
  { Industry: "Software", State: "Massachusetts", Value: 2 },
  { Industry: "Software", State: "Minnesota", Value: 1 },
  { Industry: "Software", State: "New York", Value: 1 },
  { Industry: "Software", State: "Tennessee", Value: 1 },
  { Industry: "Software", State: "Texas", Value: 1 },
  { Industry: "Software", State: "Utah", Value: 3 },
  { Industry: "Technology", State: "California", Value: 4 },
  { Industry: "Technology", State: "Ohio", Value: 1 },
  { Industry: "Transportation", State: "California", Value: 3 },
  { Industry: "Transportation", State: "Michigan", Value: 1 },
  { Industry: "Transportation", State: "New Jersey", Value: 1 },
];
// End code snippet (2. USA Sankey)

// In the code snippet below (3. Build Sankey), Claude AI was used to make the buildSankeyData function using the data.
// The code below appears in its original format.
function buildSankeyData(rawData, valueKey = "Count") {
  const industryNodes = Array.from(new Set(rawData.map((d) => d.Industry)));
  const stateNodes = Array.from(new Set(rawData.map((d) => d.State)));
  const nodes = industryNodes.concat(stateNodes).map((name) => ({ name }));
  const nodeIndex = new Map();
  nodes.forEach((d, i) => nodeIndex.set(d.name, i));
  const links = rawData.map((d) => ({
    source: nodeIndex.get(d.Industry),
    target: nodeIndex.get(d.State),
    value: d[valueKey],
  }));
  return { nodes, links, industryNodes, stateNodes };
}

const indiaData = buildSankeyData(indiaRaw, "Count");
const usData = buildSankeyData(usRaw, "Value");

let selectedIndustry = null;
let selectedLink = null;
let isLocked = false;
// End code snippet (3. Build Sankey)

// In the code snippet below (4. Tooltip), Claude AI was used to make the createTooltip function to add hover functionality.
// The AI generated code below has been edited and adapted to better match the intended design of the website.
function createTooltip() {
  return d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("pointer-events", "none")
    .style("background", "white")
    .style("color", "#2d3748")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "13px")
    .style("font-family", "Arial, sans-serif")
    .style("line-height", "1.4")
    .style("opacity", 0)
    .style("box-shadow", "0 4px 20px rgba(0,0,0,0.15)")
    .style("z-index", "1000");
}
// End code snippet (4. Tooltip)

// In the code snippet below (5. Tooltip Content), Claude AI was used to make the getTooltipContent function.
// The AI generated code below has been edited and adapted to better match the intended design of the website.
function getTooltipContent(d, datasetName, isLink = false) {
  const borderColor = datasetName === "india" ? "#ff6600" : "#204d90";
  const valueColor = datasetName === "india" ? "#ff6600" : "#204d90";
  const textColor = "#2d3748";

  if (isLink) {
    return `
      <div style="border-left: 3px solid ${borderColor}; padding-left: 10px;">
        <div style="font-weight: 600; margin-bottom: 4px; color: ${textColor}; font-size: 14px;">${d.source.name} → ${d.target.name}</div>
        <div style="color: ${valueColor}; font-weight: 600; font-size: 13px;">Number of Unicorns: ${d.value}</div>
      </div>
    `;
  } else {
    return `
      <div style="border-left: 3px solid ${borderColor}; padding-left: 10px;">
        <div style="font-weight: 600; margin-bottom: 4px; color: ${textColor}; font-size: 14px;">${d.name}</div>
        <div style="color: ${valueColor}; font-weight: 600; font-size: 13px;">Number of Unicorns: ${d.value}</div>
      </div>
    `;
  }
}
// End code snippet (5. Tooltip Content)

// In the code snippet below (6. Node Highlight), Claude AI was used to make a helper function to check if node should be highlighted.
// The code appears in its original format
function isNodeHighlighted(d, selectedIndustry, selectedLink, sankeyData) {
  if (selectedIndustry) {
    return (
      d.name === selectedIndustry ||
      sankeyData.links.some(
        (l) =>
          (l.source.name === selectedIndustry && l.target.name === d.name) ||
          (l.target.name === selectedIndustry && l.source.name === d.name)
      )
    );
  }
  if (selectedLink) {
    return (
      d === selectedLink.source ||
      d === selectedLink.target ||
      d.name === selectedLink.source.name ||
      d.name === selectedLink.target.name
    );
  }
  return false;
}
// End code snippet (6. Node Highlight)

// In the code snippet below (7. Node Click), Claude AI was used to make a helper function to handle node/label click.
// The code appears in its original format
function handleNodeClick(nodeName) {
  selectedLink = null;
  if (selectedIndustry === nodeName) {
    selectedIndustry = null;
    isLocked = false;
  } else {
    selectedIndustry = nodeName;
    isLocked = true;
  }
  d3.select(".tooltip").style("opacity", 0);
  updateHighlight();
}
// End code snippet (7. Node Click)

// In the code snippet below (8. Draw Sankey), Claude AI was used to make the drawSankey function.
// The AI generated code has been edited and adapted to better match the intended design of the website.
function drawSankey(containerId, data, color, datasetName) {
  const container = d3.select(`#${containerId}`);
  container.selectAll("*").remove();

  const containerWidth = container.node().clientWidth || 480;
  const containerHeight = 450;

  const margin = {
    top: 50,
    right: 120,
    bottom: 20,
    left: 120,
  };

  const width = containerWidth;
  const height = containerHeight;
  const sankeyWidth = width - margin.left - margin.right;
  const sankeyHeight = height - margin.top - margin.bottom;

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "100%")
    .attr("role", "img")
    .attr("aria-label", `${containerId} sankey diagram`);

  const headerColor = datasetName === "india" ? "#ff6600" : "#204d90";

  svg
    .append("text")
    .attr("x", margin.left / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-family", "Bebas Neue, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", headerColor)
    .text("INDUSTRIES");

  svg
    .append("text")
    .attr("x", width - margin.right / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-family", "Bebas Neue, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", headerColor)
    .text("STATES");

  const sankeyGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const defs = svg.append("defs");

  // Create node gradients
  data.nodes.forEach((d, i) => {
    const gradId = `${datasetName}-node-gradient-${i}`;
    const gradient = defs
      .append("linearGradient")
      .attr("id", gradId)
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    const nodeColor = datasetName === "india" ? "#ff6600" : "#204d90";
    gradient.append("stop").attr("offset", "0%").attr("stop-color", nodeColor);
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", nodeColor);
  });

  // Create link gradient
  const linkGradientId = `${datasetName}-link-gradient`;
  const linkGradient = defs
    .append("linearGradient")
    .attr("id", linkGradientId)
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", sankeyWidth)
    .attr("y2", 0);

  const linkColor = datasetName === "india" ? "#ff6600" : "#204d90";
  linkGradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", linkColor);
  linkGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", linkColor);

  const sankeyGenerator = d3
    .sankey()
    .nodeWidth(18)
    .nodePadding(12)
    .extent([
      [0, 0],
      [sankeyWidth, sankeyHeight],
    ]);

  const sankeyData = sankeyGenerator(data);
  const tooltip = createTooltip();

  // Draw links
  const link = sankeyGroup
    .append("g")
    .attr("fill", "none")
    .attr("stroke-opacity", 0.4)
    .selectAll("path")
    .data(sankeyData.links)
    .join("path")
    .attr("d", d3.sankeyLinkHorizontal())
    .attr("stroke", `url(#${linkGradientId})`)
    .attr("stroke-width", (d) => Math.max(1, d.width))
    .on("mouseover", (event, d) => {
      const isHighlighted =
        !isLocked ||
        (selectedIndustry &&
          (d.source.name === selectedIndustry ||
            d.target.name === selectedIndustry)) ||
        (selectedLink && d === selectedLink);

      if (isHighlighted) {
        tooltip
          .style("opacity", 1)
          .html(getTooltipContent(d, datasetName, true));
        if (!isLocked)
          d3.select(event.currentTarget).attr("stroke-opacity", 0.8);
      }
    })
    .on("mousemove", (event, d) => {
      const isHighlighted =
        !isLocked ||
        (selectedIndustry &&
          (d.source.name === selectedIndustry ||
            d.target.name === selectedIndustry)) ||
        (selectedLink && d === selectedLink);

      if (isHighlighted) {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY + 10 + "px");
      }
    })
    .on("mouseout", (event) => {
      tooltip.style("opacity", 0);
      if (!isLocked) {
        d3.select(event.currentTarget).attr("stroke-opacity", 0.4);
      }
    })
    .on("click", (event, d) => {
      event.stopPropagation();
      selectedIndustry = null;
      if (selectedLink === d) {
        selectedLink = null;
        isLocked = false;
      } else {
        selectedLink = d;
        isLocked = true;
      }
      tooltip.style("opacity", 0);
      updateHighlight();
    });

  // Draw nodes
  const node = sankeyGroup
    .append("g")
    .selectAll("g")
    .data(sankeyData.nodes)
    .join("g")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
    .style("cursor", "pointer");

  node
    .append("rect")
    .attr("height", (d) => d.y1 - d.y0)
    .attr("rx", 2)
    .attr("width", sankeyGenerator.nodeWidth())
    .attr("fill", datasetName === "india" ? "#ff6600" : "#204d90")
    .on("mouseover", (event, d) => {
      const isHighlighted =
        !isLocked ||
        isNodeHighlighted(
          d,
          selectedIndustry,
          selectedLink,
          window.indiaData
        ) ||
        isNodeHighlighted(d, selectedIndustry, selectedLink, window.usData);

      if (isHighlighted) {
        tooltip
          .style("opacity", 1)
          .html(getTooltipContent(d, datasetName, false));
      }
    })
    .on("mousemove", (event, d) => {
      const isHighlighted =
        !isLocked ||
        isNodeHighlighted(
          d,
          selectedIndustry,
          selectedLink,
          window.indiaData
        ) ||
        isNodeHighlighted(d, selectedIndustry, selectedLink, window.usData);

      if (isHighlighted) {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY + 10 + "px");
      }
    })
    .on("mouseout", () => tooltip.style("opacity", 0))
    .on("click", (event, d) => {
      event.stopPropagation();
      handleNodeClick(d.name);
    });

  // Add external labels for industries
  sankeyData.nodes
    .filter((d) => data.industryNodes.includes(d.name))
    .forEach((d) => {
      svg
        .append("text")
        .attr("x", margin.left - 10)
        .attr("y", margin.top + d.y0 + (d.y1 - d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .text(d.name)
        .attr("font-size", "11px")
        .attr("font-weight", "500")
        .attr("fill", headerColor)
        .style("cursor", "pointer")
        .on("click", (event) => {
          event.stopPropagation();
          handleNodeClick(d.name);
        });
    });

  // Add external labels for states
  sankeyData.nodes
    .filter((d) => data.stateNodes.includes(d.name))
    .forEach((d) => {
      svg
        .append("text")
        .attr("x", margin.left + sankeyWidth + 10)
        .attr("y", margin.top + d.y0 + (d.y1 - d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "start")
        .text(d.name)
        .attr("font-size", "11px")
        .attr("font-weight", "500")
        .attr("fill", headerColor)
        .style("cursor", "pointer")
        .on("click", (event) => {
          event.stopPropagation();
          handleNodeClick(d.name);
        });
    });

  if (datasetName === "india") {
    window.indiaNodes = node;
    window.indiaLinks = link;
    window.indiaData = sankeyData;
  } else {
    window.usNodes = node;
    window.usLinks = link;
    window.usData = sankeyData;
  }
}
// End code snippet (8. Draw Sankey)

// In the code snippet below (9. Update Highlightd Links), Claude AI was used to make the updateHighlight function.
// The code appears in it's original format.
function updateHighlight() {
  if (!selectedIndustry && !selectedLink) {
    if (
      window.indiaNodes &&
      window.indiaLinks &&
      window.usNodes &&
      window.usLinks
    ) {
      window.indiaNodes.selectAll("rect").attr("fill-opacity", 1);
      window.indiaLinks.attr("stroke-opacity", 0.4);
      window.usNodes.selectAll("rect").attr("fill-opacity", 1);
      window.usLinks.attr("stroke-opacity", 0.4);
    }
    return;
  }

  if (selectedIndustry) {
    // Node selection highlight
    window.indiaLinks.attr("stroke-opacity", (d) =>
      d.source.name === selectedIndustry || d.target.name === selectedIndustry
        ? 0.7
        : 0.1
    );
    window.indiaNodes
      .selectAll("rect")
      .attr("fill-opacity", (d) =>
        d.name === selectedIndustry ||
        window.indiaData.links.some(
          (l) =>
            (l.source.name === selectedIndustry && l.target.name === d.name) ||
            (l.target.name === selectedIndustry && l.source.name === d.name)
        )
          ? 1
          : 0.3
      );

    window.usLinks.attr("stroke-opacity", (d) =>
      d.source.name === selectedIndustry || d.target.name === selectedIndustry
        ? 0.7
        : 0.1
    );
    window.usNodes
      .selectAll("rect")
      .attr("fill-opacity", (d) =>
        d.name === selectedIndustry ||
        window.usData.links.some(
          (l) =>
            (l.source.name === selectedIndustry && l.target.name === d.name) ||
            (l.target.name === selectedIndustry && l.source.name === d.name)
        )
          ? 1
          : 0.3
      );
  } else if (selectedLink) {
    // Link selection highlight - only highlight the specific link in its chart
    const selectedDataset = window.indiaData.links.includes(selectedLink)
      ? "india"
      : "us";

    if (selectedDataset === "india") {
      window.indiaLinks.attr("stroke-opacity", (d) =>
        d === selectedLink ? 0.7 : 0.1
      );
      window.indiaNodes
        .selectAll("rect")
        .attr("fill-opacity", (d) =>
          d === selectedLink.source || d === selectedLink.target ? 1 : 0.3
        );

      // For US chart, highlight nodes with same names but dim all links
      window.usLinks.attr("stroke-opacity", 0.1);
      window.usNodes
        .selectAll("rect")
        .attr("fill-opacity", (d) =>
          d.name === selectedLink.source.name ||
          d.name === selectedLink.target.name
            ? 1
            : 0.3
        );
    } else {
      window.usLinks.attr("stroke-opacity", (d) =>
        d === selectedLink ? 0.7 : 0.1
      );
      window.usNodes
        .selectAll("rect")
        .attr("fill-opacity", (d) =>
          d === selectedLink.source || d === selectedLink.target ? 1 : 0.3
        );

      // For India chart, highlight nodes with same names but dim all links
      window.indiaLinks.attr("stroke-opacity", 0.1);
      window.indiaNodes
        .selectAll("rect")
        .attr("fill-opacity", (d) =>
          d.name === selectedLink.source.name ||
          d.name === selectedLink.target.name
            ? 1
            : 0.3
        );
    }
  }
}
// End code snippet (9. Update Highlightd Links)

// In the code snippet below (10. Render the Sankey), Claude AI was used to make the final call on javascript to render the sankey on the screen.
// The AI generated code has been edited and adapted to better match the intended design of the website.
document.addEventListener("DOMContentLoaded", function () {
  drawSankey("india-sankey", indiaData, "#ff6600", "india");
  drawSankey("us-sankey", usData, "#204d90", "us");

  // Clear highlights on click outside any node or link
  d3.select("body").on("click", () => {
    selectedIndustry = null;
    selectedLink = null;
    isLocked = false;

    // Hide tooltip when resetting state
    d3.select(".tooltip").style("opacity", 0);
    updateHighlight();
  });
});
// End code snippet (10. Render the Sankey)
