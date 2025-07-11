define("DemandRequestFrm", function() {
    return function(controller) {
        function addWidgetsDemandRequestFrm() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexSKUTable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61.11%",
                "id": "FlexSKUTable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4.62%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0i2f208e36e0f41",
                "top": "38.89%",
                "width": "90%",
                "zIndex": 1,
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            FlexSKUTable.setDefaultUnit(voltmx.flex.DP);
            var flexHeaderDemandRequest = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "64.91%",
                "id": "flexHeaderDemandRequest",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "2.50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "29.82%",
                "width": "95%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexHeaderDemandRequest.setDefaultUnit(voltmx.flex.DP);
            var flexDemandRequest = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flexDemandRequest",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "top": "0%",
                "width": "100%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexDemandRequest.setDefaultUnit(voltmx.flex.DP);
            var flexSKUID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexSKUID",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "10%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexSKUID.setDefaultUnit(voltmx.flex.DP);
            var lblSKUID = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblSKUID",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "SKUID",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexSKUID.add(lblSKUID);
            var flexName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexName.setDefaultUnit(voltmx.flex.DP);
            var lblName = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblName",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Name",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexName.add(lblName);
            var flexCategory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexCategory",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexCategory.setDefaultUnit(voltmx.flex.DP);
            var lblCategory = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblCategory",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Category",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexCategory.add(lblCategory);
            var flexStock = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexStock",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexStock.setDefaultUnit(voltmx.flex.DP);
            var lblStock = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblStock",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Stock",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexStock.add(lblStock);
            var flexForecasted = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexForecasted",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexForecasted.setDefaultUnit(voltmx.flex.DP);
            var lblForecasted = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblForecasted",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Forecasted",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexForecasted.add(lblForecasted);
            var flexEnrichedQTY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexEnrichedQTY",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexEnrichedQTY.setDefaultUnit(voltmx.flex.DP);
            var lblEnrichedQTY = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblEnrichedQTY",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "EnrichedQTY",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexEnrichedQTY.add(lblEnrichedQTY);
            var flexRequested = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequested",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequested.setDefaultUnit(voltmx.flex.DP);
            var lblRequested = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequested",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Requested",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequested.add(lblRequested);
            var flexStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexStatus.setDefaultUnit(voltmx.flex.DP);
            var lblStatus = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblStatus",
                "isVisible": true,
                "left": "0%",
                "skin": "lblStatusSkin0d1b3c7ffb10440",
                "text": "Status",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexStatus.add(lblStatus);
            var flexRequestedBY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequestedBY",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequestedBY.setDefaultUnit(voltmx.flex.DP);
            var lblRequestedBY = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequestedBY",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "RequestedBY",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequestedBY.add(lblRequestedBY);
            var flexRequestDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequestDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequestDate.setDefaultUnit(voltmx.flex.DP);
            var lblRequestDate = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequestDate",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "RequestDate",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequestDate.add(lblRequestDate);
            flexDemandRequest.add(flexSKUID, flexName, flexCategory, flexStock, flexForecasted, flexEnrichedQTY, flexRequested, flexStatus, flexRequestedBY, flexRequestDate);
            voltmx.mvc.registry.add('CopyFBoxDemandRequest0ea77f446c59041', 'CopyFBoxDemandRequest0ea77f446c59041', 'CopyFBoxDemandRequest0ea77f446c59041Controller');
            var segDemandRequest = new voltmx.ui.SegmentedUI2({
                "alternateRowSkin": "defDataPanelAlternateRowSkinDW0ccd9302b745549",
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segDemandRequest",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "defDataPanelRowFocusSkin0bd1dff1eda834e",
                "rowSkin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "rowTemplate": "CopyFBoxDemandRequest0ea77f446c59041",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0i672f9ffb35a4b",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblCategory1": "lblCategory1",
                    "lblEnrichedQTY1": "lblEnrichedQTY1",
                    "lblForecasted1": "lblForecasted1",
                    "lblName1": "lblName1",
                    "lblRequestDate1": "lblRequestDate1",
                    "lblRequested1": "lblRequested1",
                    "lblRequestedBY1": "lblRequestedBY1",
                    "lblSKUID1": "lblSKUID1",
                    "lblStatus1": "lblStatus1",
                    "lblStock1": "lblStock1"
                },
                "width": "100%",
                "appName": "MyGitProject"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeaderDemandRequest.add(flexDemandRequest, segDemandRequest);
            var LabelID = new voltmx.ui.Label({
                "id": "LabelID",
                "isVisible": true,
                "left": "31dp",
                "skin": "CopydefLabel0c9e00abaf49641",
                "text": "Recent SKU Demand Requests",
                "top": "18dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LabelID1 = new voltmx.ui.Label({
                "id": "LabelID1",
                "isVisible": true,
                "left": "31dp",
                "skin": "CopydefLabel0e6dd4a9eb46b40",
                "text": "Overview of latest demand requests across all SKUs",
                "top": "62dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldSearchBox = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextFieldSearchBox",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ffc21e68237640",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "108dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var ListBoxCategories = new voltmx.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxCategories",
                "isVisible": true,
                "left": "430dp",
                "masterData": [
                    ["All Categories", "All Categories"],
                    ["Clothing", "Clothing"],
                    ["Home & Garden", "Home & Garden"],
                    ["Sports", "Sports"],
                    ["Books", "Books"],
                    ["Electronics", "Electronics"]
                ],
                "skin": "CopydefListBoxNormal0e2b722993c6543",
                "top": "108dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var ListBoxStatus = new voltmx.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxStatus",
                "isVisible": true,
                "left": "820dp",
                "masterData": [
                    ["All Status", "All Status"],
                    ["Approved", "Approved"],
                    ["Rejected", "Rejected"],
                    ["Pending", "Pending"]
                ],
                "skin": "CopydefListBoxNormal0d1b8af389ce64c",
                "top": "108dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            FlexSKUTable.add(flexHeaderDemandRequest, LabelID, LabelID1, TextFieldSearchBox, ListBoxCategories, ListBoxStatus);
            var FlexContainerPieChart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "33%",
                "id": "FlexContainerPieChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "780dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "33%",
                "zIndex": 1,
                "appName": "MyGitProject"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerPieChart.setDefaultUnit(voltmx.flex.DP);
            var piechart = new com.konymp.piechart({
                "height": "110.99%",
                "id": "piechart",
                "isVisible": true,
                "left": "20dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknComponentFlex",
                "top": "-26dp",
                "width": "100%",
                "appName": "MyGitProject",
                "viewType": "piechart",
                "overrides": {
                    "piechart": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            piechart.chartTitle = "Pie Chart";
            piechart.enableLegend = true;
            piechart.bgColor = "#ffffff";
            piechart.chartData = {
                "data": [{
                    "colorCode": "#1B9ED9",
                    "label": "Data1",
                    "value": "40"
                }, {
                    "colorCode": "#E8672B",
                    "label": "Data2",
                    "value": "20"
                }, {
                    "colorCode": "#76C044",
                    "label": "Data3",
                    "value": "20"
                }, {
                    "colorCode": "#FFC522",
                    "label": "Data4",
                    "value": "10"
                }, {
                    "colorCode": "#97CDED",
                    "label": "Data5",
                    "value": "10"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label",
                    "columnHeaderType": "text",
                    "columnID": "label",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "c8434b6cbed443e6a6167d99e8c3bdcb"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "value",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "cddb65c1fe8c429bb5a4b5f93bd171ef"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Color Code",
                    "columnHeaderType": "text",
                    "columnID": "colorCode",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f722303b71a8439eae528d9af9856f30"
                }]
            };
            piechart.titleFontSize = "12";
            piechart.legendFontSize = "8";
            piechart.enableStaticPreview = true;
            piechart.titleFontColor = "#000000";
            piechart.legendFontColor = "#000000";
            FlexContainerPieChart.add(piechart);
            var Image0gfe4886f9cee41 = new voltmx.ui.Image2({
                "height": "60dp",
                "id": "Image0gfe4886f9cee41",
                "isVisible": true,
                "left": "64dp",
                "skin": "slImage",
                "src": "menu.png",
                "top": "50dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1380,
                "640": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                },
                "1024": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                },
                "1366": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {
                "piechart": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                }
            }
            this.add(FlexSKUTable, FlexContainerPieChart, Image0gfe4886f9cee41);
        };
        return [{
            "addWidgets": addWidgetsDemandRequestFrm,
            "enabledForIdleTimeout": false,
            "id": "DemandRequestFrm",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200, 1366, 1380],
            "appName": "MyGitProject",
            "preShow": function(eventobject) {
                controller.AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07(eventobject);
                voltmx.visualizer.syncComponentInstanceDataCache(eventobject);
            },
            "info": {
                "kuid": "a1716dc115ec46f7b708dd80999458a8"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});