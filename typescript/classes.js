var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.getEmp = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.empno;
    };
    Employee.prototype.getSal = function () {
        return this.empno;
    };
    Employee.prototype.getattendance = function () {
        return this.empno;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
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
    var emp = new Employee(1, 'aaa', 2000, 12);
    var emp1 = new Employee(2, 'bbb', 20020, 19);
    var emp2 = new Employee(3, 'ccc', 12000, 10);
    emp.print();
    emp1.print();
    emp2.print();
}
