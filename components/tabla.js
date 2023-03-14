import formulario from "./formulario.js";

export default{
    name: document.querySelector("#tabls"),
    frag: document.createDocumentFragment(),
    data: [],
    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    Taditional(p1){
        this.data.Taditional.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data["14-Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
  vali(){
    let dato = formulario.data[0]
    this.data.Taditional.forEach((valo,id)=>{
        if(dato.califique >= valo[0] && dato.califique <= valo[1]){
        this.Taditional(id);
        this.PointRange(id);
        this.Letter(id);
        this.SBGRating(id);
        this.ProficiencyLevelWithStandard(id);
        this.tablas(id);
    }})
  },
  tablas(val){
    this.frag = document.createDocumentFragment();
    let tabl=document.createElement("TR")
    let tb = document.createElement("TD")
    tb.insertAdjacentText("beforeend",this.data.Taditional[val])
    let tb1 = document.createElement("TD")
    tb1.insertAdjacentText("beforeend",this.data["14-Point-Range"][val])
    let tb2 = document.createElement("TD")
    tb2.insertAdjacentText("beforeend",this.data.Letter[val])
    let tb3 = document.createElement("TD")
    tb3.insertAdjacentText("beforeend",this.data["SBG-Rating"][val])
    let tb4 = document.createElement("TD")
    tb4.insertAdjacentText("beforeend",this.data["Proficiency-Level-With-Standard"][val])
    tabl.append(tb,tb1,tb2,tb3,tb4)
    this.frag.append(tabl);
    this.name.append(this.frag);
  }
        
    
   
}