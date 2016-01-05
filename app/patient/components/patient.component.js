/**
 * Created by abdelkaderkanbi on 03/01/2016.
 */
System.register(["angular2/core", "../services/patient.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, patient_service_1;
    var PatientComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            PatientComponent = (function () {
                function PatientComponent(_patientService) {
                    this._patientService = _patientService;
                    this.label_title = "Patient List";
                    this.adding = false;
                }
                PatientComponent.prototype.ngOnInit = function () {
                    return this.getPatients();
                };
                PatientComponent.prototype.getPatients = function () {
                    var _this = this;
                    this._patientService.getPatients().then(function (patients) { return _this.patients = patients; });
                    console.log(this.patients);
                };
                PatientComponent.prototype.onEdit = function (patient) {
                    this.selectedPatient = patient;
                    console.log("selected patient : " + this.selectedPatient.lastName);
                };
                PatientComponent.prototype.onDelete = function (patient) {
                    var _this = this;
                    this._patientService.getPatients().then(function (patients) { return _this.patients.splice(_this.patients.indexOf(patient), 1); });
                    console.log(patient.lastName + " has been deleted");
                };
                PatientComponent.prototype.onAdd = function () {
                    this.adding = true;
                };
                PatientComponent.prototype.onSave = function (newP) {
                    this._patientService.savePatient(newP);
                    console.log(newP);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-list',
                        providers: [patient_service_1.PatientService],
                        inputs: ['patient']
                    }),
                    core_1.View({
                        templateUrl: 'app/patient/templates/patient.html',
                    }), 
                    __metadata('design:paramtypes', [patient_service_1.PatientService])
                ], PatientComponent);
                return PatientComponent;
            })();
            exports_1("PatientComponent", PatientComponent);
        }
    }
});
//# sourceMappingURL=patient.component.js.map