import { Controller, Get, Bind, Dependencies, Post, Put, Delete, Param, Res, Body, Req } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
@Dependencies(EmployeesService)
export class EmployeesController {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    @Post()
    @Bind(Res(), Body())
    create(res, body) {
        console.log(body);
        let employeeData;
        if(body.addrLineTwo){
            employeeData = {
                name: body.name,
                emailAddr: body.emailAddr,
                phNumber: body.phNumber,
                city: body.city,
                zipCode: body.zipCode,
                addrLineOne: body.addrLineOne,
                addrLineTwo: body.addrLineTwo,
                dateOfEmpl: body.dateOfEmpl,
                dateOfBirth: body.dateOfBirth,
            }
        }
        else {
        employeeData = {
            name: body.name,
            emailAddr: body.emailAddr,
            phNumber: body.phNumber,
            city: body.city,
            zipCode: body.zipCode,
            addrLineOne: body.addrLineOne,
            addrLineTwo: "-",
            dateOfEmpl: body.dateOfEmpl,
            dateOfBirth: body.dateOfBirth,
        }
    }
        for (let data in employeeData) {
            if (!employeeData[data]) {
                res.status(400).send(`Missing ${data} in request`);
                return;
            }
        }
        res.status(200).send(this.employeesService.create(employeeData));
    }

    @Get()
    findAll() {
        return this.employeesService.findAll();
    }

    @Get(":id")
    @Bind(Param('id'), Res())
    findOne(id) {
        if (id) {
            res.status(200).send(this.employeesService.findOne(id));
        }
        else {
            res.status(400).send("An id number is necessary for this route to work");
        }
    }

    @Put()
    @Bind(Res(), Body())
    update(res, body) {
        if (body.id && body.updateData) {
            console.log(body);
            let updateData = JSON.parse(body.updateData);
            console.log(updateData);
            let changedData = {
                name: undefined,
                emailAddr: undefined,
                phNumber: undefined,
                city: undefined,
                zipCode: undefined,
                addrLineOne: undefined,
                addrLineTwo: undefined,
                dateOfEmpl: undefined,
                dateOfBirth: undefined,
            };
            for (let data in updateData) {
                if ( data in changedData) {
                    changedData[data] = updateData[data];
                }
            }
            res.status(200).send(this.employeesService.update(body.id, changedData));
        }
        else {
            res.status(400).send("An id number and employee data are necessary for this route to work");
        }
    }


    @Delete()
    @Bind(Res(), Body())
    softDelete(body) {
        if (body.id) {
            res.status(200).send(this.employeesService.softDelete(body.id));
        }
        else {
            res.status(400).send("An id number is necessary for this route to work");
        }
    }
}
