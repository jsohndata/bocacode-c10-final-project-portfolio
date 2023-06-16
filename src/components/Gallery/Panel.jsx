import { ShareFill } from 'react-bootstrap-icons';
import { Col, Card, Image, Modal, Button, Tooltip, OverlayTrigger } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {projectName, projectInfo, former, projectImage, linkProject}} ) {

    const renderTooltip = (props) => (
      <Tooltip className="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );

  const imageUri = process.env.PUBLIC_URL + '/images/' + projectImage;

  return (
    <Col md={6} lg={4}>
      <Card>          
        <a href={linkProject} target='_blank' rel="noreferrer"><Image src={imageUri} fluid /></a>          
          <Card.Body className="px-4 my-2">
            <h3 className='text-center'>{projectName}</h3>
            <p className='text-center'><strong>{former}</strong></p>
            <p>{projectInfo}</p> 

            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}>           
              <Button><a href={linkProject} target='_blank' rel="noreferrer"><ShareFill color="white" size={20} /></a></Button>
            </OverlayTrigger>

        </Card.Body>

      </Card>  

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>{projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageUri} fluid />
          <p><strong>{former}</strong></p>
          <Card.Text>
            {projectInfo}
          </Card.Text>
        </Modal.Body>
      </Modal>
    </Col>
  );
}