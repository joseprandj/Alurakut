import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(req, res) {
    if(req.method === 'POST') {
      const TOKEN = 'b5b449c0e963879c9746e239864013';
      const client = new SiteClient (TOKEN);

      const registroCriado = await client.items.create({
        itemType: "972318",
        ...req.body
        // title: "Comunidade de Teste",
        // imageUrl: "https://github.com/joseprandj.png",
        // creatorSlug: "joseprandj"
      })
      
      res.json({
        dados: 'Algum dado qualquer',
        registroCriado: registroCriado
      })

      return;
    }
  
  res.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
  
}

