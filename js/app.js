var app = new Vue({
    el: '#app',
    data: {
        items:[
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",
                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                },
                images:[
                    ""
                ]
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"m",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
            {
                name:"سامسونج جلاكسى A23 - رامات 6 جيجا - 128 جيجا بايت - أسود",
                price:5000,
                status:"جديد",
                itemType:"h",

                details:{
                    sim:2,
                    simtype:"NanoSim",
                    screen:"6.6",
                    screenPixlesW:1080,
                    screenPixlesH:2408,
                    ram:"6 جيجا بايت",
                    internalMem:"128 جيجا",
                    fronCam:" 8 ميجا بكسل",
                    backCam:"رباعية 50 ميجا بكسل",
                    color: "أسود"
                }
            },
        ],
        showDetails:false,
        message: 'Hello Vue!',
        selectedItem:null,
        selecteditemtype:"h"
    },
    methods:{
        setSelectedItem(item){
            this.showDetails = true;
            this.selectedItem = item;

        },
        closelDialog(){
            this.showDetails = false;
            console.log(`show details => ${this.showDetails}`)
        },
        setItemsType(t){
            // console.log(t)
            this.selecteditemtype = t;
            // console.log(this.filtereditems)
        }
    },
    computed:{
        filtereditems(){
            return this.items.filter((obj)=>{
                return obj.itemType == this.selecteditemtype 
            })
        }
    }
})
