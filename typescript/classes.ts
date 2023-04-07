class Employee1{
    private fname: string;
    private mname : string;
    private lname : string;
    constructor(fname:string ,mname :string, lname:string){
        
        this.fname=fname;
        this.lname=lname;
        this.mname=mname;
    }
    getname():string{
        return this.mname;

    }
}
    let e1=new Employee1('a','b','c');
    console.log(e1.getname);


var emparray: Employee[]= [emp,emp1,emp2];
 emparray.forEach(emparray=> {
    emp.print;
    emp1.print;
    emp2.print;

});






















class Employee{

    private readonly empno: number;
    private ename : string;
    private sal: number;
    private attendance:any;

    public getEmp():number{
        return this.empno;
    }
    public getEname():number{
        return this.empno;
    }
    public getSal():number{
        return this.empno;
    }
    public getattendance():number{
        return this.empno;
    }
    
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
        
    // }

    constructor(empno:number,ename:string,sal:number,attendance:any)
    {
        this.empno=empno;
        this.ename=ename;
        this.sal=sal;
        this.attendance=attendance;
    }
    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendance);
    }
}
// {
//     var emp =new Employee();
//     var emp1 =new Employee();
//     emp1.empno=102;
//     var emp2 =new Employee();
//     emp2.empno=103;
//     emp.print();
//     emp1.print();
        //     emp2.print();}
{
let emp=new Employee(1,'aaa',2000,12);
let emp1=new Employee(2,'bbb',20020,19);
let emp2=new Employee(3,'ccc',12000,10);

emp.print();
emp1.print();
emp2.print();
}
