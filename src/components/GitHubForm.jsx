import React, { useState } from "react"

export default function GitHubForm(props) {
  const [userInputValue, setUserInputValue] = useState("")

  async function getUser(e) {
    e.preventDefault()

    const response = await fetch(
      `https://api.github.com/users/${userInputValue}`
    )
    const data = await response.json()
    console.log(data)
    props.setUser(data)

    setUserInputValue("")
  }

  return (
    <div>
      <form onSubmit={getUser}>
        <input
          type="text"
          value={userInputValue}
          name="name"
          onChange={(e) => setUserInputValue(e.target.value)}
          placeholder="enter username"
        />
        <input type="submit" />
      </form>
    </div>
  )
}
