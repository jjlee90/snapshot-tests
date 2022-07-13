import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import GitHubForm from "./GitHubForm"

export default function GitHubCard() {
  const [user, setUser] = useState("")

  return (
    <Card style={{ width: "18rem" }}>
      {user.avatar_url && <Card.Img variant="top" src={user.avatar_url} />}
      <Card.Body>
        {user.login ? "" : <h2>Enter your GitHub Username</h2>}
        <GitHubForm setUser={setUser} />
        <Card.Title>{user.login ? `Username: ${user.login}` : ""}</Card.Title>
        <Card.Text>
          {user.login ? `Im a developer. Check out my awesome repos.` : ""}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
