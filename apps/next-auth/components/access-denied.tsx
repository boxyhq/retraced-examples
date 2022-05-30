import { signIn } from "next-auth/react"

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a
          onClick={(e) => {
            e.preventDefault()
            signIn("boxyhq-saml")
          }}
        >
          You must be signed in to view this page. Click on &quot;Sign In&quot;
        </a>
      </p>
    </>
  )
}
