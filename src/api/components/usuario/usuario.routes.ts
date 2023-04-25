
import { Router } from 'express';
import { UsuarioController } from './usuario.controller';

export class UsuarioRoutes {
    private router: Router = Router();

    private readonly controller: UsuarioController;

    constructor() {
        this.controller = new UsuarioController();
        this.init();
    }

    private init(): void {
        this.router.get('/usuarios', this.controller.list);
        this.router.post('/usuarios/', this.controller.create);

    }

    public routes(): Router {
        return this.router;
    }
}