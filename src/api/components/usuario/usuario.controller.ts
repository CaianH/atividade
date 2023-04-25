import { Request, Response } from 'express';

export class UsuarioController{
    public list(req: Request, res: Response){
        res.status(200).json({
            name: 'Caian Henrique',
            email: 'caianhenrique10@gmail.com',
            username: 'caian',
            senha:'12345678'
        });
    }

    public create (req: Request, res: Response){
        res.send({
            api_name: 'api-contatos',
            descricao: 'API para gestão de contatos',
            status: 'OK',
        });
        let ok = false;
        let mensagem = "";

        /*
        if (req.body.nome == undefined) {
            mensagem = "A propriedade [nome] está indefinida!";
        } else if(req.body.nome == "") {
            mensagem = "A propriedade [nome] não deve estar em branco!";
        } else {
            mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
            ok = true;
        }
        */
        if (req.body.nome == undefined || req.body.nome == "") {
            if(req.body.nome == "") {
                mensagem = "A propriedade [nome] não deve estar em branco!";
            }
        } else {
            mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
            ok = true;
        }

        res.send({
            success: ok,
            message: mensagem
        })
    }
}