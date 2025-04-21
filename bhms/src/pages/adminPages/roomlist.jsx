import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Modal, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AdminSidebar from './adminsidebar';
import AdminHeader from './adminheader';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [boarders, setBoarders] = useState([]);
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [showEditRoomModal, setShowEditRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [newRoomData, setNewRoomData] = useState({
    room_number: '',
    room_type: '',
    capacity: '',
    status: ''
  });

  const [editRoomData, setEditRoomData] = useState({
    room_id: '',
    room_number: '',
    room_type: '',
    capacity: '',
    boarder_id: '',
    status: ''
  });

  useEffect(() => {
    fetchRooms();
    fetchBoarders();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost/bhms/managerooms/roomlist.php');
      setRooms(response.data);
    } catch (error) {
      console.error('Failed to fetch rooms', error);
    }
  };

  const fetchBoarders = async () => {
    try {
      const response = await fetch('http://localhost/bhms/viewboarders.php');
      const data = await response.json();
      setBoarders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch boarders:', err);
      setBoarders([]);
    }
  };

  const handleAddRoom = () => setShowAddRoomModal(true);

  const handleEditRoom = (room) => {
    setEditRoomData({
      room_id: room.room_id,
      room_number: room.room_number,
      room_type: room.room_type,
      capacity: room.capacity,
      boarder_id: room.boarder_id,
      status: room.status
    });
    setShowEditRoomModal(true);
  };

  const handleModalClose = () => {
    setShowAddRoomModal(false);
    setShowEditRoomModal(false);
    setNewRoomData({ room_number: '', room_type: '', capacity: '', status: '' });
    setEditRoomData({ room_number: '', room_type: '', capacity: '', boarder_id: '', status: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (showAddRoomModal) {
      setNewRoomData({ ...newRoomData, [name]: value });
    } else if (showEditRoomModal) {
      setEditRoomData({ ...editRoomData, [name]: value });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (showAddRoomModal) {
      try {
        const response = await axios.post('http://localhost/bhms/managerooms/addroom.php', newRoomData);
        alert(response.data.success ? 'Room added successfully' : `Failed: ${response.data.message}`);
        fetchRooms();
        handleModalClose();
      } catch (error) {
        console.error('Add room error', error);
        alert('Failed to add room');
      }
    } else if (showEditRoomModal) {
      handleEditFormSubmit(event);
    }
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost/bhms/managerooms/editroom.php?room_id=${editRoomData.room_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editRoomData)
      });
      if (response.ok) {
        fetchRooms();
        setShowEditRoomModal(false);
      } else {
        console.error('Failed to update room');
      }
    } catch (error) {
      console.error('Edit room error:', error);
    }
  };

  const handleDeleteRoom = async (roomId) => {
    if (window.confirm('Delete this room?')) {
      try {
        await axios.post('http://localhost/bhms/managerooms/deleteroom.php', { room_id: roomId });
        fetchRooms();
      } catch (error) {
        console.error('Delete room error', error);
      }
    }
  };

  const getBoarderName = (id) => {
    const b = boarders.find(b => b.boarder_id === id);
    return b ? b.full_name : '';
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <AdminHeader />
      <AdminSidebar />
      <Container fluid style={{ paddingTop: '150px' }}>
        <Row>
          <Col lg={2}></Col>
          <Col lg={9}>
            <Card className="bg-gray-800 text-white shadow-lg rounded-lg p-4">
              <Card.Body className="bg-gray-500 text-white">
                <Card.Title className="text-center mb-4 text-xl font-bold bg-gray-900">List of Rooms</Card.Title>
                <div className="d-flex justify-content-end mb-3">
                  <Button variant="success" onClick={handleAddRoom}>Add Room</Button>
                </div>
                <Table hover responsive className="align-middle bg-gray-200 text-white">
                  <thead className="bg-gray-500 text-white">
                    <tr>
                      <th>Room ID</th>
                      <th>Room Number</th>
                      <th>Room Type</th>
                      <th>Capacity</th>
                      <th>Boarder Name</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map(room => (
                      <tr key={room.room_id} className="bg-white text-dark">
                        <td>{room.room_id}</td>
                        <td>{room.room_number}</td>
                        <td>{room.room_type}</td>
                        <td>{room.capacity}</td>
                        <td>{getBoarderName(room.boarder_id)}</td>
                        <td>
                            <span className={`badge ${room.status === 'vacant' ? 'bg-success' : 'bg-danger'}`}>
                              {room.status === 'vacant' ? 'Available' : 'Occupied'}
                            </span>
                        </td>
                        <td>
                          <Button variant="outline-warning" size="sm" onClick={() => handleEditRoom(room)} className="me-2">Edit</Button>
                          <Button variant="outline-danger" size="sm" onClick={() => handleDeleteRoom(room.room_id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Add Room Modal */}
        <Modal show={showAddRoomModal} onHide={handleModalClose} contentClassName="bg-dark text-white">
          <Modal.Header closeButton className="bg-secondary">
            <Modal.Title>Add New Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formRoomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control type="text" name="room_number" value={newRoomData.room_number} onChange={handleInputChange} className="bg-dark text-white border-secondary" required />
              </Form.Group>

              <Form.Group controlId="formRoomType" className="mt-3">
                <Form.Label>Room Type</Form.Label>
                <Form.Control as="select" name="room_type" value={newRoomData.room_type} onChange={handleInputChange} className="bg-dark text-white border-secondary" required>
                  <option value="">-- Select Room Type --</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="triple">Triple</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formCapacity" className="mt-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" name="capacity" value={newRoomData.capacity} onChange={handleInputChange} className="bg-dark text-white border-secondary" required />
              </Form.Group>

              <Form.Group controlId="formStatus" className="mt-3">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name="status" value={newRoomData.status} onChange={handleInputChange} className="bg-dark text-white border-secondary" required>
                  <option value="">-- Select Status --</option>
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                </Form.Control>
              </Form.Group>

              <Button variant="warning" type="submit" className="mt-3">Add Room</Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Edit Room Modal */}
        <Modal show={showEditRoomModal} onHide={handleModalClose} contentClassName="bg-dark text-white">
          <Modal.Header closeButton className="bg-secondary">
            <Modal.Title>Edit Room Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditFormSubmit}>
              <Form.Group controlId="formRoomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control type="text" name="room_number" value={editRoomData.room_number} onChange={handleInputChange} className="bg-dark text-white border-secondary" required />
              </Form.Group>

              <Form.Group controlId="formRoomType" className="mt-3">
                <Form.Label>Room Type</Form.Label>
                <Form.Control as="select" name="room_type" value={editRoomData.room_type} onChange={handleInputChange} className="bg-dark text-white border-secondary" required>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="triple">Triple</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formCapacity" className="mt-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" name="capacity" value={editRoomData.capacity} onChange={handleInputChange} className="bg-dark text-white border-secondary" required />
              </Form.Group>

              <Form.Group controlId="formBoarderId" className="mt-3">
                <Form.Label>Boarder</Form.Label>
                <Form.Control as="select" name="boarder_id" value={editRoomData.boarder_id} onChange={handleInputChange} className="bg-dark text-white border-secondary">
                  <option value="">-- Select Boarder --</option>
                  {boarders.map((b) => (
                    <option key={b.boarder_id} value={b.boarder_id}>{b.full_name}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formStatus" className="mt-3">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name="status" value={editRoomData.status} onChange={handleInputChange} className="bg-dark text-white border-secondary" required>
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                </Form.Control>
              </Form.Group>

              <Button variant="warning" type="submit" className="mt-3">Update Room</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default RoomList;