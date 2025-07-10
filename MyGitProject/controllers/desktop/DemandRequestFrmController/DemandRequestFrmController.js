define({
  
  pieChartFromSegment: function () {
    try {
      var rawData = this.view.segDemandRequest.data;
      kony.print("Raw Segment Data: " + JSON.stringify(rawData));

      var categoryTotals = {};
      var totalRequestedQty = 0;

      // Group Requested Qty by Category
      rawData.forEach(function (item) {
        if (item && item.lblCategory1 && item.lblRequested1) {
          var category = item.lblCategory1.text.trim();
          var requestedQty = parseInt(item.lblRequested1.text, 10);

          if (!isNaN(requestedQty)) {
            totalRequestedQty += requestedQty;
            categoryTotals[category] = (categoryTotals[category] || 0) + requestedQty;
          }
        }
      });

      if (totalRequestedQty === 0) {
        kony.print("No valid requested quantity to chart.");
        return;
      }

      // Pastel color palette
      var pastelColors = ["#A3D5FF", "#FFD6A5", "#C3FDB8", "#FFB3C1", "#D5D6EA"];
      var chartData = [];
      var colorIndex = 0;

      for (var category in categoryTotals) {
        var qty = categoryTotals[category];
        var percentage = ((qty / totalRequestedQty) * 100).toFixed(1);
        chartData.push({
          label: category + " (" + qty + ")", // Label shows quantity
          value: qty, // Show raw value in chart
          colorCode: pastelColors[colorIndex % pastelColors.length],
          toolTip: category + ": " + qty + " (" + percentage + "%)" // Tooltip with value and %
        });
        colorIndex++;
      }

      // Assign data and config to pie chart
      this.view.piechart.chartTitle = "Requested Quantity by Category";
      this.view.piechart.enableStaticPreview = true;
      this.view.piechart.chartData = { data: chartData };
      this.view.piechart.chartConfig = {
        labelPosition: "outside",
        showLegend: true,
        showValues: true,
        toolTip: true
      };

      this.view.piechart.createChart();
      kony.print("Pie chart created with: " + JSON.stringify(chartData));
    } catch (e) {
      kony.print("Error in pieChartFromSegment: " + JSON.stringify(e));
    }
  }
});