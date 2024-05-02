export class RoleModel {
  public static instances: RoleModel[];
  public id: number;
  public name: string;
  public value: string;
  private constructor() {}
  public static create(id: number, name: string): RoleModel {
    const model = new RoleModel();
    model.id = id;
    model.name = name;
    model.value = name;
    return model;
  }

  public static createList(): RoleModel[] {
    if (this.instances) return this.instances;
    const roleNames = 'Admin,User'.split(',');
    this.instances = roleNames.map((roleName, index) =>
      this.create(index + 1, roleName)
    );
    return this.instances;
  }
}
