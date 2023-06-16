import { ShareFill } from 'react-bootstrap-icons';
import { Col, Card, Image, Modal } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {projectName, projectInfo, former, projectImage, linkProject}} ) {

  const imageUri = process.env.PUBLIC_URL + '/images/' + projectImage;

  return (
    <Col md={6} lg={4}>
      <Card>  
        <Card.Body>
        <a href={linkProject} target='_blank' rel="noreferrer"><Image src={imageUri} fluid /></a>
          <h3 className='text-center mt-3'>{projectName}</h3>
          <p className='text-center'><strong>{former}</strong></p>
          <Card.Text>
            {projectInfo}
          </Card.Text>

          <a href={linkProject} target='_blank' rel="noreferrer"><ShareFill color="royalblue" size={20} /></a>
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