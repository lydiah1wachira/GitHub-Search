export class User {
  constructor (
    public bio:string, 
    public login:string,
    public public_repos:number,
    public created_at:Date,
    public updated_at:Date,
    public avatar_url:any,
    public followers:number,
    public following:number, 
    public html_url:string 
    ) {}
  
}
