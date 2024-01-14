const zod = require("zod");
const CreateSignup = zod.object({
    username :zod.string(),
    email: zod.string().email(),
    password: zod.string()

})

module.exports ={
    CreateSignup
}