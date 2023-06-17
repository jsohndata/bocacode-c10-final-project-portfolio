import { useState } from 'react';
import { ShareFill, InfoLg } from 'react-bootstrap-icons';
import { Container, Row, Col, Card, Image, Modal, Button, Tooltip, OverlayTrigger } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {projectName, projectInfo, name, former, content, projectImage, linkProject, photo}} ) {

  const toolTipLaunch = (props) => (      
    <Tooltip className="button-tooltip" {...props}>
      Launch Project
    </Tooltip>
  );

  const toolTipProfile = (props) => (      
    <Tooltip className="button-tooltip" {...props}>
      See Profile
    </Tooltip>
  );

  const [showModal, setShowModal] = useState(false);
  const toggleModalShow = () => setShowModal(!showModal);

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <Col md={6} lg={4}>
      <Card>          
        <a href={linkProject} target='_blank' rel="noreferrer"><Image src={imageUri + projectImage} fluid /></a>          
          <Card.Body className="px-4 my-2">
            <h3 className='text-center'>{projectName}</h3>
            <p className='text-center cursor-pointer'
              onClick={toggleModalShow}><strong>{name}</strong></p>
            <p>{projectInfo}</p> 

            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={toolTipLaunch}>           
              <Button variant="outline-primary">
                <a href={linkProject} target='_blank' rel="noreferrer"><ShareFill color="primary" size={20} /></a>
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={toolTipProfile}>           
              <Button variant="outline-primary" className="mx-2" onClick={toggleModalShow}>
                <InfoLg color="primary" size={20} />
              </Button>
            </OverlayTrigger>
        </Card.Body>
      </Card>  

      <Modal 
        show={showModal} 
        onHide={toggleModalShow} 
        size="xl"
        className="backdrop-effect">
        <Container className="m-0 p-0">
          <Row>
            <Col xs={12} md={6}>
              <Image src={imageUri + photo} fluid />
            </Col>

            <Col xs={12} md={6}>
              <h3>{name}</h3>
              <p>{former}</p>
              <p>{content}</p>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Col>
  );
}