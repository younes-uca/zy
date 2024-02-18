import {Body, Controller,Delete , Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {PaginatedList} from "src/app/zynerator/util/PaginatedList";

import {ModelPermissionUserConverter} from "src/app/shared/converter/security/ModelPermissionUserConverter";
import {ModelPermissionUserDto} from "src/app/shared/dto/security/ModelPermissionUserDto";
import {ModelPermissionUserCriteria} from "src/app/shared/dao/criteria/core/security/ModelPermissionUserCriteria";
import {ModelPermissionUserAdminServiceImpl} from "src/app/module/service/admin/security/ModelPermissionUserAdminServiceImpl";


@ApiTags('Manages model permission user services')
@Controller('api/admin/modelPermissionUser')
export class ModelPermissionUserRestAdmin {

    constructor(private readonly service: ModelPermissionUserAdminServiceImpl,
                private readonly converter: ModelPermissionUserConverter) {
    }

    @ApiOperation({summary: 'Finds a list of all modelPermissionUsers'})
    @Get()
    async findAll(): Promise<ModelPermissionUserDto[]> {
        const items = await this.service.findAll();
        return this.converter.toDtos(items);
    }

    @ApiOperation({summary: 'Finds a model permission user by id'})
    @Get('id/:id')
    async findById(@Param('id') id: number): Promise<ModelPermissionUserDto> {
        const item = await this.service.findById(id);
        return this.converter.toDto(item);
    }

    @ApiOperation({summary: 'Deletes a model permission user by id'})
    @Delete('id/:id')
    async deleteById(@Param('id') id: number): Promise<number> {
        return this.service.deleteById(id);
    }

    @ApiOperation({summary: 'Saves the specified model permission user'})
    @Post()
    async save(@Body() dto: ModelPermissionUserDto): Promise<ModelPermissionUserDto> {
        const item = this.converter.toItem(dto);
        const savedItem = await this.service.save(item);
        return this.converter.toDto(savedItem);
    }


    @ApiOperation({summary: 'Updates the specified model permission user'})
    @Put()
    async update(@Body() dto: ModelPermissionUserDto): Promise<ModelPermissionUserDto> {
        const item = this.converter.toItem(dto);
        const result = await this.service.updateWithAssociatedLists(item);
        return this.converter.toDto(result);
   }

    @ApiOperation({summary: 'Finds an optimized list of all modelPermissionUsers'})
    @Get('optimized')
    async findAllOptimized(): Promise<ModelPermissionUserDto[]> {
        const result = await this.service.findAllOptimized();
        return result;
    }

    @ApiOperation({summary: 'Finds an optimized list of all modelPermissionUsers'})
    @Post('find-by-criteria')
    async findByCriteria(@Body() criteria: ModelPermissionUserCriteria): Promise<ModelPermissionUserDto[]> {
        const items = await this.service.findByCriteria(criteria);
        return this.converter.toDtos(items);
    }

    @ApiOperation({summary: 'Finds an optimized list of all modelPermissionUsers'})
    @Post('find-paginated-by-criteria')
    async findPaginatedByCriteria(@Body() criteria: ModelPermissionUserCriteria): Promise<PaginatedList<ModelPermissionUserDto>> {
        const paginated = await this.service.findPaginatedByCriteria(criteria);
        const dtos = this.converter.toDtos(paginated.list);
        return new PaginatedList<ModelPermissionUserDto>(dtos, paginated.dataSize);
    }


    @Get('actionPermission/id/:id')
    async findByActionPermissionId(@Param('id') id: number): Promise<ModelPermissionUserDto[]> {
        const items = await this.service.findByActionPermissionId(id);
        return this.converter.toDtos(items);
    }
    @Get('modelPermission/id/:id')
    async findByModelPermissionId(@Param('id') id: number): Promise<ModelPermissionUserDto[]> {
        const items = await this.service.findByModelPermissionId(id);
        return this.converter.toDtos(items);
    }
    @Get('user/id/:id')
    async findByUserId(@Param('id') id: number): Promise<ModelPermissionUserDto[]> {
        const items = await this.service.findByUserId(id);
        return this.converter.toDtos(items);
    }

    @Post('multiple')
    async deleteMultiple(@Body() dtos: ModelPermissionUserDto[]): Promise<ModelPermissionUserDto[]> {
        const items = dtos.map(dto => this.converter.toItem(dto));
        const deletedItems = await this.service.deleteMultiple(items);
        return deletedItems.map(element => this.converter.toDto(element));
    }

}
