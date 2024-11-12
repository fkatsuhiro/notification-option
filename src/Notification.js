import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification() {
    const [count, setCount] = useState(1);

    function handleUpCount (){
        setCount(count + 1);
    }

    function handleDownCount (){
        if (count > 1){
            setCount(count - 1);
        } else {
            alert('You can not make notification minus.');
        }
    }

    return (
        <>
            <ListGroup style={{ width: '250px', margin: '0 auto', paddingTop: '50px' }}>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className='me-auto'>
                        <div className='fw-bold'>Notification</div>
                        This is the sample of notification.
                    </div>
                    <Badge bg="primary" pill>
                        {count}
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <div style={{ width: '250px', margin: '0 auto' }} className='mt-3'>
                <div style={{textAlign: 'right'}}>
                    <Button variant="secondary" className='me-3' onClick={handleUpCount}>up</Button>
                    <Button variant="secondary" onClick={handleDownCount}>down</Button>
                </div>
            </div>
        </>
    );
}

export default Notification;