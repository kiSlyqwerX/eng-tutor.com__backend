async function checkTheme(req, res, next) {
    if(!req.body) return res.status(400).send("Введіть повну інформацію")
    
    const {name, context} = req.body
    
    if(!name || typeof name !== "string" || name.length < 10) return res.status(400).send("Введіть тему статті")

    if(context && typeof context !== "string") return res.status(400).send("Контекст має бути текстовим полем")

    const newTheme = {
        name
    }

    if(context) newTheme.context = context

    req.newTheme = newTheme
    next()
}

export {checkTheme}