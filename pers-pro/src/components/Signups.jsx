import "./Signups.css"
export function Signups({signups}){
    return <div>
        {signups.map(function(signup){
            return <div className="signups">
                <h2>Username: {signup.username}</h2>
                <h3>Password: {signup.password}</h3>
                </div>
        })}
    </div>
}