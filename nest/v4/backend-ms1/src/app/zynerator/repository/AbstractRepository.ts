import {Repository, SelectQueryBuilder} from "typeorm";
import {BaseCriteria} from "../criteria/BaseCriteria";
import {PaginatedList} from "../util/PaginatedList";

export abstract class AbstractRepository<T, C extends BaseCriteria> {

    private repo: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repo = repository;
    }

    public abstract constructQuery(crieria: C): SelectQueryBuilder<T>;

    public addConstraint(query: SelectQueryBuilder<T>, attribute: any, constraint: string, queryParams: any) {
        if (attribute) {
            query.andWhere("item." + constraint, queryParams);
        }
    }

    public addConstraintMinMax(query: SelectQueryBuilder<T>, attributeMin: any, attributeMax: any, constraintMin: string, constraintMax: string, queryParams: any) {
        this.addConstraint(query, attributeMin, constraintMin, queryParams);
        this.addConstraint(query, attributeMax, constraintMax, queryParams);
    }

    public getPaginatedResult(criteria: C, query: SelectQueryBuilder<T>) {
        const {page, maxResults} = criteria;
        const skip = (page) * maxResults;
        query.skip(skip).take(maxResults);
        return query.getMany();
    }

    public getResult(query: SelectQueryBuilder<T>) {
        return query.getMany();
    }

    public initQuery(repository: Repository<T>) {
        return repository.createQueryBuilder("item");
    }

    public async findPaginatedByCriteria(criteria: C): Promise<PaginatedList<T>> {
        const { maxResults = 10, page = 0 } = criteria;

        const offset = page * maxResults;

        const [result, total] = await this.repo.findAndCount({
            ...criteria,
            take: maxResults,
            skip: offset,
        });

        return new PaginatedList(result, total);
    }


    public async findByCriteria(criteria: C): Promise<T[]> {
        const query = this.constructQuery(criteria);
        return this.getResult(query);
    }

    public async count(): Promise<number> {
        return this.repo.count();
    }

}
