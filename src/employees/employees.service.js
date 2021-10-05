import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
require('dotenv').config();

@Injectable()
export class EmployeesService {
    constructor() {
        async function connector() {
            await mongoose.connect(process.env.MONGO_DB_URI);
        }
        let outer = this;
        connector().then(function () {
           let employeeSchema = new mongoose.Schema({
                name: String,
                emailAddr: String,
                phNumber: String,
                city: String,
                zipCode: Number,
                addrLineOne: String,
                addrLineTwo: { type: String, default: "-" },
                dateOfEmpl: String,
                dateOfBirth: String,
                exists: Boolean,
            });
            const Employee = mongoose.model('Employee', employeeSchema);
           outer.employeeType = Employee;
        });
    }

    async create(employee) {
        let newEmployee = new this.employeeType({
            name: employee.name,
            emailAddr: employee.emailAddr,
            phNumber: employee.phNumber,
            city: employee.city,
            zipCode: employee.zipCode,
            addrLineOne: employee.addrLineOne,
            addrLineTwo: employee.addrLineTwo,
            dateOfEmpl: employee.dateOfEmpl,
            dateOfBirth: employee.dateOfBirth,
            exists: true,
        });
        await newEmployee.save();
        return newEmployee;
    }

    findAll() {
        return this.employeeType.find({ exists: true });
    }

    findOne(id) {
        return this.employeeType.findById(id);
    }

    update(id, changedData) {
        this.employeeType.findByIdAndUpdate(id, changedData, function (error, changedEmployee) {
            if (!error) {
                if (changedEmployee.exists) {
                    return changedEmployee;
                }
                else {
                    return "This employee doesn't exist";
                }
            }
            else {
                return error;
            }
        });
    }

    softDelete(id) {
        return this.employeeType.findByIdAndUpdate(id, { exists: false }, function (error, softDeletedEmployee) {
            if (!error) {
                if (softDeletedEmployee.exists) {
                    return softDeletedEmployee;
                }
                else {
                    return "This employee doesn't exist";
                }
            }
            else {
                return error;
            }
        });
    }
}
