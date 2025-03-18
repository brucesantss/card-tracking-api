import { Request, Response } from "express"
import { z } from 'zod';
import Card from "../models/Card"

const cards: Card[] = [];

const cardSchema = z.object({
    clientID: z.number(),
    cardType: z.enum([ 'Débito', 'Crédito' ])
});

export const createCard = (req: Request<Card>, res: Response) => {

    const { clientID, cardType } = req.body;

    const validation = cardSchema.safeParse({ clientID, cardType });
    if(!validation.success){
        res.status(400).json({ errors: validation.error.flatten() });
    }

    const newCard: Card = {
        ID: cards.length + 1,
        clientID,
        cardType,
        status: 'Em Produção'
    };

    cards.push(newCard);
    res.status(201).json({ message: 'Novo pedido de cartão feito!', card: newCard })

}

export const updateCardStatus = (req: Request, res: Response) => {

    const { ID } = req.params;
    const { status } = req.body;
    const idNumber = parseInt(ID);    

    const card = cards.find(c => c.ID === idNumber);
    if(!card){
        res.status(400).json({ message: 'ID Inválido!' });
        return;
    }

    if(!['Em trânsito', 'Entregue'].includes(status)){
        res.status(400).json({ message: 'Status inválido.' });
        return;
    }

    card.status = status as Card['status'];
    res.status(200).json({ message: card });
    return;

}

export const getCardStatus = (req: Request, res: Response) => {

    const { ID } = req.params;
    const idNumber = parseInt(ID);

    const card = cards.find(c => c.ID === idNumber);
    if(!card){
        res.status(400).json({ message: 'ID Inválido!' });
        return;
    }

    res.status(200).json({ card });
    return;
}