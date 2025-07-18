define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.hclsoftwareu.hamburgermenu", {
            "viewName": "hamburgermenu",
            "controllerName": "hamburgermenuController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hclsoftwareu",
            "classname": "hamburgermenu",
            "name": "com.hclsoftwareu.hamburgermenu"
        });
        voltmx.mvc.registry.add("com.konymp.piechart", {
            "viewName": "piechart",
            "controllerName": "piechartController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "piechart",
            "name": "com.konymp.piechart"
        });
        voltmx.mvc.registry.add("com.voltmxmp.multiseriesverticalbar", {
            "viewName": "multiseriesverticalbar",
            "controllerName": "multiseriesverticalbarController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.voltmxmp",
            "classname": "multiseriesverticalbar",
            "name": "com.voltmxmp.multiseriesverticalbar"
        });
        voltmx.mvc.registry.add("myflxSegRowWithImageAndLabel", {
            "viewName": "myflxSegRowWithImageAndLabel",
            "controllerName": "myflxSegRowWithImageAndLabelController"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("DemandRequestFrm", {
            "viewName": "DemandRequestFrm",
            "controllerName": "DemandRequestFrmController"
        });
        voltmx.mvc.registry.add("ProductLinefrm", {
            "viewName": "ProductLinefrm",
            "controllerName": "ProductLinefrmController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("DemandRequestFrm").navigate();
    }
});