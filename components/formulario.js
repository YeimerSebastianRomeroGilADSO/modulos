import tabla from "./tabla.js";
export default{
name: document.querySelector("#myformulario"),
data: [],

formu(){
    this.name.addEventListener("submit",(e)=>{
        this.data.push(Object.fromEntries(new FormData(e.target)))
        this.name.reset();
        e.preventDefault();
        tabla.vali();
        this.data=[]
    })
},



}