/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/vflmunderkingen/Anzeigetafel/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/vflmunderkingen/Anzeigetafel/test/integration/pages/View1",
	"com/vflmunderkingen/Anzeigetafel/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.vflmunderkingen.Anzeigetafel.view.",
		autoWait: true
	});
});