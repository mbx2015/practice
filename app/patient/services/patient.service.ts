import {Injectable} from "angular2/core";

@Injectable()
export class PatientService {
    getPatients(){
        return Promise.resolve(PATIENTS);
    }

    savePatient(patient: Patient){
        PATIENTS.push(patient);
    }
}


export var PATIENTS: Patient[] = [
    {"firstName": "Said", "lastName": "ELHARTI", "age": 34, "phoneNumber": "0678345526"},
    {"firstName": "Kamal", "lastName": "SEBTI", "age": 43, "phoneNumber": "0662345526"},
    {"firstName": "Omar", "lastName": "MAHER", "age": 46, "phoneNumber": "0665435526"},
    {"firstName": "Fatima", "lastName": "BOYI", "age": 54, "phoneNumber": "0661345446"},
    {"firstName": "Mohamed", "lastName": "FETOUHI", "age": 64, "phoneNumber": "0662232311"}
];

export interface Patient {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
}