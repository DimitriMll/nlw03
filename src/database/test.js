const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //inserir dados na tabela
    /*
    await saveOrphanage(db, {
        id: 1,
        lat: "-30.043967",
        lng: "-51.224493",
        name: "Lar dos guri",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"75978966987",
        images:[
            "https://images.unsplash.com/photo-1600720665043-3c088759e359?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/flagged/photo-1576042766640-62eacf463b9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"

    }) */

    //consultar dados na tabela
            
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")

    console.log(selectedOrphanages)

    //consultar dados por id

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')  

    //console.log(orphanage)

    //deletar dados
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "5" '))


})