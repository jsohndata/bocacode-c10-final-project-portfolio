import { useState } from 'react';
import { ShareFill, InfoLg, Github, Linkedin } from 'react-bootstrap-icons';
import { Container, Row, Col, Card, Image, Modal, Button, Tooltip, OverlayTrigger } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {projectName, projectInfo, name, former, content, projectImage, linkProject, linkGitHub, linkLinedin, photo}} ) {

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
        <a href={linkProject} target='_blank' rel="noreferrer"><Image 
          src={imageUri + projectImage} fluid /></a> 
                   
          <Card.Body className="px-4 my-2">
            <h3 className='text-center'>{projectName}</h3>
            <p className='text-center cursor-pointer'
              onClick={toggleModalShow}><strong>{name}</strong></p>
            <p>{projectInfo}</p> 

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 250 }}
              overlay={toolTipLaunch}
              koko="hihi">

              <Button variant="outline-info">
                <a href={linkProject} target='_blank' rel="noreferrer"><ShareFill color="info" size={20} /></a>
              </Button>

            </OverlayTrigger>


            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 250 }}
              overlay={toolTipProfile}>

              <Button variant="outline-info" className="mx-2" onClick={toggleModalShow}>
                <InfoLg color="info" size={20} />
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
            <Col xs={12} lg={6}>
              <Image src={imageUri + photo} fluid />
            </Col>

            <Col xs={12} lg={6} className="px-5 pb-5">
              <div className="panel-close">
                <Button variant="outline-secondary"
                  size="sm"
                  onClick={toggleModalShow}>Esc X</Button>
              </div>

              <h3 className="mt-5">{name}</h3>
              <h4>{former}</h4>
              <p className="my-4">{content}</p>
              <a href={linkGitHub} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><Github color="white" size={25} /></Button></a>

              <a href={linkLinedin} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><Linkedin color="white" size={25} /></Button></a>

              <a href={linkLinedin} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><ShareFill color="white" size={25} /></Button></a>              
            </Col>
          </Row>
        </Container>
      </Modal>
    </Col>
  );
}