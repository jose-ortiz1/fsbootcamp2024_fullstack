var test_string:string = "test string";
var val_number:number = 10;
var is_true:boolean = true;
var is_false:boolean = false;

//array of strings
var user:string[] = ['a', 'b', 'c', 'd', 'e'];
//array of strings with numbers and boolean values
var str_num_arr:(string | number | boolean)[] = [1,'Array Exaple',true,false,100];

//in case of you are not sure about the type
var array_example:any = [1,'whatever',true,false,];

var obj_example:{id:number, name:string}= {id:1, name:'Jose'};

type Student = {
    id: number,
    name:string
}

var obj_example_type:Student= {id:1, name:'Jose'};

function info(name:string, age:number) :string {
    return "Your name is "+name+" and age is "+age+" years old";

}

info('Jose', 28);



console.log(test_string);
console.log(val_number);
