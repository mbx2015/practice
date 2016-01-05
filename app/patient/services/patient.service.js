System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PatientService, PATIENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PatientService = (function () {
                function PatientService() {
                }
                PatientService.prototype.getPatients = function () {
                    return Promise.resolve(PATIENTS);
                };
                PatientService.prototype.savePatient = function (patient) {
                    PATIENTS.push(patient);
                };
                PatientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PatientService);
                return PatientService;
            })();
            exports_1("PatientService", PatientService);
            exports_1("PATIENTS", PATIENTS = [
                { "firstName": "Said", "lastName": "ELHARTI", "age": 34, "phoneNumber": "0678345526" },
                { "firstName": "Kamal", "lastName": "SEBTI", "age": 43, "phoneNumber": "0662345526" },
                { "firstName": "Omar", "lastName": "MAHER", "age": 46, "phoneNumber": "0665435526" },
                { "firstName": "Fatima", "lastName": "BOYI", "age": 54, "phoneNumber": "0661345446" },
                { "firstName": "Mohamed", "lastName": "FETOUHI", "age": 64, "phoneNumber": "0662232311" }
            ]);
        }
    }
});
//# sourceMappingURL=patient.service.js.map