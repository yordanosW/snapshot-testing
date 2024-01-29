import React from "react"
import Card from "react-bootstrap/Card"
import githubimg from './107896300.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
    
        <Card.Img variant="top" src={githubimg} />
        
        <Card.Body>
            <Card.Title>Yordanos</Card.Title>
            <Card.Text>
            Im pationate  about coding and I am always looking to learn more! Feel free to check out my Github
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard