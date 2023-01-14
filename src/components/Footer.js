import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <div><Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  
                    The PERMIAN Café, the international coffee home chain, flavors you with exotic coffee varieties from around the world. Unseen coffee varieties with their rich savor and the Café’s unique ambience make Tonico Cafe a premium spot of coffee lovers who come not only to refresh their taste buds but also to enjoy time at this exotic coffee world.
                </Card.Text>
                <Button variant="primary">Quick Links</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Opp.Cochin Special Economic Zone (CSEZ),
Seaport-Airport Road, Kakkanad</Card.Footer>
        </Card></div>
    )
}

export default Footer
