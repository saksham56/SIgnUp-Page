import "./css/Signups.css"
export function Signups({signups}){
    return <div>
        {signups.map(function(signup){
            return <div className="signups">
                <h1>Username: {signup.username}</h1>
                <h2>Email: {signup.email}</h2>
                <h3>Password: {signup.password}</h3>
                </div>
        })}
    </div>
}