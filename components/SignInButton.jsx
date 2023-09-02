import { useSession, signIn, signOut } from "next-auth/react"

const SignInButton = () => {

    const { data: session } = useSession()
    if (session) {
        return (
            <div></div>
        )
    }
    return (
        <div className="float-right">
           
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}

export default SignInButton