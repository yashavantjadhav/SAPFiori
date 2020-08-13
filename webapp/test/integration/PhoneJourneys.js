/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Order/com/Order_Master/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Order/com/Order_Master/test/integration/pages/App",
	"Order/com/Order_Master/test/integration/pages/Browser",
	"Order/com/Order_Master/test/integration/pages/Master",
	"Order/com/Order_Master/test/integration/pages/Detail",
	"Order/com/Order_Master/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Order.com.Order_Master.view."
	});

	sap.ui.require([
		"Order/com/Order_Master/test/integration/NavigationJourneyPhone",
		"Order/com/Order_Master/test/integration/NotFoundJourneyPhone",
		"Order/com/Order_Master/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});