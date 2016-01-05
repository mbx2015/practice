System.register(["angular2/platform/browser", "./patient/components/patient.component"], function(exports_1) {
    var browser_1, patient_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (patient_component_1_1) {
                patient_component_1 = patient_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(patient_component_1.PatientComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map