
import express,{Application,Request,Response} from 'express'



//se crea una clase
class App{
    //Atributos publicos y privados
    public app:any;
    private server:any;

    constructor(){
        this.app=express();
        this.app.use(express.json());
        this.Routes()
    }

    private Routes():void{
        this.app.get( 
            "/",
            (req:Request,res:Response)=>{
                res.send("Holaaaaaa")
            }
        )
    }

    public start():void{
        const port = 3002
        this.app.listen(
            port,()=>{console.log(`Server started in port ${port}`)}
        )
    }

    public close():void{
        this.server.close()
    }
}

export default App