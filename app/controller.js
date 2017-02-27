/**
 * Main app controller
 */
define([
	'jquery', 'backbone', 'marionette', 'app/app',
	'modules/homeView/landingPage',
	'modules/homeView/directorsOffice'
], function ($, Backbone, Marionette, App, LandingPage, DirectorsOffice) {
    var stoppableModules = ['homeView', 'permitServices', 'inspectionServices', 'supportServices'];

    var _stopAllExcept = function (exceptMods) {
        $.each(stoppableModules, function (i, modKey) {
            if (exceptMods.indexOf(modKey) == -1) {
                App.module(modKey).stop();
            }
        });
    };

    var AppController = Marionette.Controller.extend ({
        initialize: function () {
            console.info("Controller: initializing...");
            var self = this;
            // add specific initialization
            console.info("Controller: initialized.");
        },

        homeView: function () {
			console.info("Controller: homeView");
			App.Events.trigger("app:navigateTo", {step: "home"});
			var homeViewMod = App.module("homeView");
			var mainAppRegion = App.appContent.currentView.mainContentRegion;
			if (!homeViewMod.moduleStarted) {				
				_stopAllExcept(['homeView']);
				mainAppRegion.show(homeViewMod.layout);
				homeViewMod.start();
			}
			homeViewMod.layout.showLandingPage(); 
        },
		
		directorsOffice: function () {
			console.info("Controller: directorsOffice");
			App.Events.trigger("app:navigateTo", {step: "director"});
			var homeViewMod = App.module("homeView");
			var mainAppRegion = App.appContent.currentView.mainContentRegion;
			if (!homeViewMod.moduleStarted) {				
				_stopAllExcept(['homeView']);
				mainAppRegion.show(homeViewMod.layout);
				homeViewMod.start();
			}
			homeViewMod.layout.showDirectorsOfficeView();

		},

        bic: function () {
			console.info("Controller: BIC");
			App.Events.trigger("app:navigateTo", {step: "bic"});
			var homeViewMod = App.module("homeView");
			if (!homeViewMod.moduleStarted) {				
				_stopAllExcept(['homeView']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(homeViewMod.layout);
				homeViewMod.start();
			}
			homeViewMod.layout.showBicLandingPage();
        },

        permitServices: function () {
            console.info("Controller: permitServices");
            App.Events.trigger("app:navigateTo", {step: "permitservices"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showPermitServicesPage();
         },
		
		centralPermitBureau: function () {
			console.info("Controller: centralPermitBureau");
			App.Events.trigger("app:navigateTo", {step: "cpb"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showCentralPermitBureauPage();
		},

		helpDesk: function () {
			console.info("Controller: helpDesk");
			App.Events.trigger("app:navigateTo", {step: "helpdesk"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showHelpDeskPage();
		},

		initialPlanReview: function () {
			console.info("Controller: initialPlanReview");
			App.Events.trigger("app:navigateTo", {step: "initialplanreview"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showInitialPlanReviewPage();
		},

		mechanicalPlanReview: function () {
			console.info("Controller: mechanicalPlanReview");
			App.Events.trigger("app:navigateTo", {step: "mechplanreview"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showMechanicalPlanReviewPage();
		},

		planReview: function () {
            console.info("Controller: planReview");
            App.Events.trigger("app:navigateTo", {step: "planreview"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showPlanReviewPage();
		},

		technicalServices: function () {
            console.info("Controller: technicalServices");
            App.Events.trigger("app:navigateTo", {step: "technicalservices"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showTechnicalServicesPage();
		},

		managementInformationServices: function () {
            console.info("Controller: managementInformationServices");
            App.Events.trigger("app:navigateTo", {step: "mis"});
			var permitServicesMod = App.module("permitServices");
			if (!permitServicesMod.moduleStarted) {				
				_stopAllExcept(['permitServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(permitServicesMod.layout);
				permitServicesMod.start();
			}
			permitServicesMod.layout.showMISPage();
		},

		inspectionServices: function () {
			console.info("Controller: inspectionServices");
			App.Events.trigger("app:navigateTo", {step: "inspectionservices"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showInspectionServicesPage();
		},

		buildingInspections: function () {
			console.info("Controller: buildingInspections");
			App.Events.trigger("app:navigateTo", {step: "bid"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showBuildingInspectionsPage();
		},

		electricalInspections: function () {
			console.info("Controller: electricalInspections");
			App.Events.trigger("app:navigateTo", {step: "eid"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showElectricalInspectionsPage();
		},

		plumbingInspections: function () {
			console.info("Controller: plumbingInspections");
			App.Events.trigger("app:navigateTo", {step: "pid"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showPlumbingInspectionsPage();
		},

		codeEnforcement: function () {
			console.info("Controller: codeEnforcement");
			App.Events.trigger("app:navigateTo", {step: "ces"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showCodeEnforcementPage();
		},

		housingInspections: function () {
			console.info("Controller: housingInspections");
			App.Events.trigger("app:navigateTo", {step: "his"});
			var inspectionServicesMod = App.module("inspectionServices");
			if (!inspectionServicesMod.moduleStarted) {				
				_stopAllExcept(['inspectionServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(inspectionServicesMod.layout);
				inspectionServicesMod.start();
			}
			inspectionServicesMod.layout.showHousingInspectionsPage();
		},

		adminServices: function () {
			console.info("Controller: adminServices");
			App.Events.trigger("app:navigateTo", {step: "adminservices"});
			var supportServicesMod = App.module("supportServices");
			if (!supportServicesMod.moduleStarted) {				
				_stopAllExcept(['supportServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(supportServicesMod.layout);
				supportServicesMod.start();
			}
			supportServicesMod.layout.showAdminServicesPage();
		},

		financeServices: function () {
			console.info("Controller: financeServices");
			App.Events.trigger("app:navigateTo", {step: "finance"});
			var supportServicesMod = App.module("supportServices");
			if (!supportServicesMod.moduleStarted) {				
				_stopAllExcept(['supportServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(supportServicesMod.layout);
				supportServicesMod.start();
			}
			supportServicesMod.layout.showFinanceServicesPage();
		},

		personnelPayroll: function () {
			console.info("Controller: personnelPayroll");
			App.Events.trigger("app:navigateTo", {step: "pp"});
			var supportServicesMod = App.module("supportServices");
			if (!supportServicesMod.moduleStarted) {				
				_stopAllExcept(['supportServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(supportServicesMod.layout);
				supportServicesMod.start();
			}
			supportServicesMod.layout.showPersonnelPayrollPage();
		},

		recordsManagement: function () {
			console.info("Controller: recordsManagement");
			App.Events.trigger("app:navigateTo", {step: "rmd"});
			var supportServicesMod = App.module("supportServices");
			if (!supportServicesMod.moduleStarted) {				
				_stopAllExcept(['supportServices']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(supportServicesMod.layout);
				supportServicesMod.start();
			}
			supportServicesMod.layout.showRecordsManagementPage();
		},

		resources: function () {
			console.info("Controller: Resources");
			App.Events.trigger("app:navigateTo", {step: "resources"});
			var homeViewMod = App.module("homeView");
			if (!homeViewMod.moduleStarted) {				
				_stopAllExcept(['homeView']);
				var mainAppRegion = App.appContent.currentView.mainContentRegion;
				mainAppRegion.show(homeViewMod.layout);
				homeViewMod.start();
			}
			homeViewMod.layout.showResourcesPage();
		}
    });
    return new AppController();
});