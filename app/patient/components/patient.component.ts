/**
 * Created by abdelkaderkanbi on 03/01/2016.
 */

import {Component, View, OnInit} from "angular2/core";
import {Patient, PatientService} from "../services/patient.service";

@Component({
    selector: 'patient-list',
    providers: [PatientService],
    inputs: ['patient']
})
@View({
    templateUrl: 'app/patient/templates/patient.html',
})

export class PatientComponent implements OnInit {

    public label_title: string = "Patient List";
    public patients: Patient[];
    public selectedPatient: Patient;
    public adding: boolean = false;

    ngOnInit() {
        return this.getPatients();
    }

    constructor(private _patientService: PatientService){}

    getPatients() {
        this._patientService.getPatients().then(patients => this.patients = patients);
        console.log(this.patients);
    }

    onEdit(patient: Patient){
        this.selectedPatient = patient;
        console.log("selected patient : "+this.selectedPatient.lastName);
    }

    onDelete(patient: Patient) {
        this._patientService.getPatients().then(patients => this.patients.splice(this.patients.indexOf(patient), 1));
        console.log(patient.lastName+" has been deleted");
    }

    onAdd() {
        this.adding = true;
    }

    onSave(newP: Patient) {
        this._patientService.savePatient(newP);
        console.log(newP);
    }
}