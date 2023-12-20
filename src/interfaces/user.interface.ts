export interface IUserRepository {
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: any): Promise<any>;
  find(): Promise<any[]>;
  findOne(id: string): Promise<any>;
}
