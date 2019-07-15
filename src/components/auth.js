import React, { useState } from 'react';
import { useUserSession } from '../user-context';

const LogInForm = () => {
    const { logIn } = useUserSession()
    const [name, setName] = useState('')
}

function onSubmit(e) {
    e.preventDefault()
    logIn(name)
}

return (
    <form className="mx-auto w-25" onSubmit="onSubmit">
        <h2>Log In</h2>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label>name: </label>
                    <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                    placeholder="Renato Lima"
                    />
                </div>
                <div className="text-right">
                    <button className="btn btn-primary">Log In</button>
                </div>
            </div>
        </div>
    </form>
)
}

const Auth = () => {
    const { user, logOut } = useUserSession()

    if (user.__guest) {
        return <LogInForm />
    }

    function onClick(e) {
        e.preventDefault()
        logOut()
    }
}

return (
    <div>
        <p>You are logged in {user.displayName}</p>
        <button className="btn btn-outline-danger" onClick={onClick}>Log Out</button>
    </div>
)
}

export default Auth;