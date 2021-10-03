import { Controller, Get, Bind, Dependencies, Post, Put, Delete, Param, Res, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
@Dependencies(EmployeesService)
export class EmployeesController {
    constructor(employeesService) {
        this.employeesService = EmployeesService;
    }
    @Post()
    @Bind(Res(), Body())
    create(res, body) {
        let employeeData = {
            name: body.name,
            emailAddr: body.emailAddr,
            phNumber: body.phNumber,
            city: body.city,
            zipCode: body.zipCode,
            addrLineOne: body.addrLineOne,
            dateOfEmpl: body.dateOfEmpl,
            dateOfBirth: body.dateOfBirth,
        }
        for (let data in employeeData) {
            if (!employeeData[data]) {
                res.status(400).send(`Missing ${data} in request`);
            }
        }
        if (body.addrLineTwo) {
            employeeData[addrLineTwo] = body.addrLineTwo;
        }
        else {
            employeeData[addrLineTwo] = "-";
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
    update(body) {
        if (body.id && body.updateData) {
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
            for (let data in body.updateData) {
                if (body.updateData[data] !== "Unchanged" && data in changedData) {
                    changedData[data] = body.updateData;
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
