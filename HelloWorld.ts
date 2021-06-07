import { Delegate } from "./Delegate";

function sayHello(person: string) {
    console.log("Hello" + person)
}

let a:(a:number,b:number,c:number)=>void;

interface abc {(a:number,b:number,c:number):void;}

let athirment = new Delegate<typeof a>();
let funChain  = new Delegate<(l:string)=>void>();

funChain.add(sayHello, this);
funChain.add((str)=>console.log(str),this);

funChain.invoke("Tom")

athirment.add((a,b,c)=>console.log(a+b+c));
athirment.add((a,b,c)=>console.log(a*b*c));
athirment.add((a,b,c)=>console.log(a-b-c));
athirment.add((a,b,c)=>console.log(a/b/c));
athirment.invoke(10,25,44);