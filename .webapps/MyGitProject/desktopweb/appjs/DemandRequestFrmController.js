define("userDemandRequestFrmController", {
    pieChartFromSegment: function() {
        try {
            var rawData = this.view.segDemandRequest.data;
            kony.print("Raw Segment Data: " + JSON.stringify(rawData));
            var categoryTotals = {};
            var totalRequestedQty = 0;
            // Group Requested Qty by Category
            rawData.forEach(function(item) {
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
            this.view.piechart.chartData = {
                data: chartData
            };
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
define("DemandRequestFrmControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMapping defined for DemandRequestFrm **/
    AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07: function AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07(eventobject) {
        var self = this;

        function SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_True() {}

        function INVOKE_SERVICE_jaeb26165b184047aca6d7d11e45e1aa_Callback(DemandRequest) {
            voltmx.application.dismissLoadingScreen();
            if (DemandRequest.opstatus == 0) {
                var tempCollection8147 = [];
                var tempData2292 = DemandRequest.records;
                for (var each4018 in tempData2292) {
                    var shouldShow = typeof tempData2292[each4018]["x_0024FILES"] !== 'undefined' && tempData2292[each4018]["x_0024FILES"] && tempData2292[each4018]["x_0024FILES"].length > 0
                    tempCollection8147.push({
                        "lblSKUID1": {
                            "text": tempData2292[each4018]["SKUID"]
                        },
                        "lblName1": {
                            "text": tempData2292[each4018]["Name"]
                        },
                        "lblCategory1": {
                            "text": tempData2292[each4018]["Category"]
                        },
                        "lblStock1": {
                            "text": tempData2292[each4018]["Stock"]
                        },
                        "lblForecasted1": {
                            "text": tempData2292[each4018]["Forecasted"]
                        },
                        "lblEnrichedQTY1": {
                            "text": tempData2292[each4018]["EnrichedQTY"]
                        },
                        "lblRequested1": {
                            "text": tempData2292[each4018]["Requested"]
                        },
                        "lblStatus1": {
                            "text": tempData2292[each4018]["Status"]
                        },
                        "lblRequestedBY1": {
                            "text": tempData2292[each4018]["RequestedBY"]
                        },
                        "lblRequestDate1": {
                            "text": tempData2292[each4018]["RequestDate"]
                        },
                    });
                }
                self.view.segDemandRequest.setData(tempCollection8147);
                if ([640].indexOf(kony.application.getCurrentBreakpoint()) !== -1) {
                    var templateId = self.view.segDemandRequest.rowTemplate;
                    self.view.segDemandRequest.data.forEach(function(row) {
                        row[templateId] = {
                            layoutType: kony.flex.FLOW_VERTICAL
                        };
                        Object.keys(row).forEach(function(key) {
                            if (key.includes("lbl")) {
                                row[key].width = '80%';
                                row[key].height = kony.flex.USE_PREFERRED_SIZE;
                            }
                        });
                    });
                    var clonedWidgetDataMap = self.view.segDemandRequest.widgetDataMap;
                    clonedWidgetDataMap[templateId] = templateId;
                    self.view.segDemandRequest.widgetDataMap = clonedWidgetDataMap;
                    self.view.segDemandRequest.setData(self.view.segDemandRequest.data);
                    self.view.forceLayout();
                }
                self.pieChartFromSegment.call(this);
            } else {
                function SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_Callback() {
                    SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "message": "failed to fetch data",
                    "alertHandler": SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (DemandRequest_inputparam == undefined) {
            var DemandRequest_inputparam = {};
        }
        DemandRequest_inputparam["serviceID"] = "SKUDemandRequests$DemandRequest$get";
        DemandRequest_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var DemandRequest_httpheaders = {};
        DemandRequest_inputparam["httpheaders"] = DemandRequest_httpheaders;
        var DemandRequest_httpconfigs = {};
        DemandRequest_inputparam["httpconfig"] = DemandRequest_httpconfigs;
        SKUDemandRequests$DemandRequest$get = mfobjectsecureinvokerasync(DemandRequest_inputparam, "SKUDemandRequests", "DemandRequest", INVOKE_SERVICE_jaeb26165b184047aca6d7d11e45e1aa_Callback);
    }
});
define("DemandRequestFrmController", ["userDemandRequestFrmController", "DemandRequestFrmControllerActions"], function() {
    var controller = require("userDemandRequestFrmController");
    var controllerActions = ["DemandRequestFrmControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
