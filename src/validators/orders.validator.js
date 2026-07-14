async function checkRequest(req, res, next) {
    if(!req.body) return res.status(400).send("Введіть свою інформацію")
    
    const {name, contact} = req.body
    
    if(!name || typeof name !== "string" || name.length < 2) return res.status(400).send("Введіть ваше справжнє ім'я")

    if(!contact || contact.length < 3) return res.status(400).send("Введіть ваш контакт")

    next()
}

export {checkRequest}