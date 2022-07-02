import { Injectable, Optional, SkipSelf } from "@angular/core";

@Injectable()
export class autentificacion {
    private usuario : any;

    getUsuario():any{
        return this.usuario;
    }

    setUsuario(us:any){
        this.usuario = us;
    }

    constructor(@Optional() @SkipSelf() sharedSer?: autentificacion){
        if(sharedSer){
            throw new Error(
                'a'
            )
        }
    }
}