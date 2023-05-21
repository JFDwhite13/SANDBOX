import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';
import express,{Application,Request,Response} from 'express';

/**
 * Clase principal de la Api Define las rutas de la Api
 * @author JFDwhite13
 * @description Clase inicial de ejemplo para manejar rutas y documentacion
 */


//se crea una clase
class App{
	//Atributos publicos y privados
	public app:any;
	private server:any;

	constructor(){
		this.app=express();
		this.app.use(express.json());
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		);
		this.Routes();
	}

	private Routes():void{
		this.app.get( 
			'/',
			(req:Request,res:Response)=>{
				res.send('Holaaaaaa');
			}
		);
	}

	public start():void{
		const port = 3002;
		this.server =this.app.listen(
			port,()=>{console.log(`Server started in port ${port}`);}
		);
	}

	public close():void{
		this.server.close();
	}
}

export default App;