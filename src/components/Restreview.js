
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({ review }) {
  const [open, setOpen] = useState(false);

  console.log(review);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn bg-dark text-black mt-2"
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {
                review.map(item => (
                  <>
                    <h6>{item.name} <span>{item.date}</span></h6>
                    <p>Rating:{item.rating}</p>
                    <p>Comments:{item.comments}</p>

                  </>
                ))
              }
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview