import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './adminheader';
import AdminSidebar from './adminsidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminCalc = () => {
  const [newAmount, setNewAmount] = useState('');
  const [oldAmount, setOldAmount] = useState('');
  const [kwh, setKwh] = useState('');
  const [billTotalAmount, setBillTotalAmount] = useState('');
  const [billing, setBilling] = useState(null);
  const [meter, setMeter] = useState(null);
  const [totalFee, setTotalFee] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCalculate = () => {
    setError(null);

    if (!newAmount || !oldAmount || !kwh || !billTotalAmount) {
      setError('Please fill in all fields.');
      return;
    }

    const newAmountValue = parseFloat(newAmount);
    const oldAmountValue = parseFloat(oldAmount);
    const kwhValue = parseFloat(kwh);
    const billTotalAmountValue = parseFloat(billTotalAmount);

    if (isNaN(newAmountValue) || isNaN(oldAmountValue) || isNaN(kwhValue) || isNaN(billTotalAmountValue) || kwhValue === 0) {
      setError('Invalid input values.');
      return;
    }

    const meterReading = newAmountValue - oldAmountValue;
    setMeter(meterReading.toFixed(2));

    const billingAmount = billTotalAmountValue / kwhValue;
    setBilling(billingAmount.toFixed(2));

    const totalFeeAmount = meterReading * billingAmount;
    setTotalFee(totalFeeAmount.toFixed(2));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <AdminSidebar />
      <div className="flex-grow-1" style={{ marginLeft: '16rem' }}>
        <AdminHeader />

        <Container fluid className="p-4 mt-5">
          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="bg-secondary text-white p-4 rounded shadow-sm">
                <h3 className="mb-4 text-center">Billing Calculator</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={(e) => e.preventDefault()}>

                  {/* New Amount */}
                  <div className="border rounded p-3 mb-3 bg-dark">
                    <Form.Group controlId="formNewAmount">
                      <Form.Label className="fw-bold text-white">New Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter new amount"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)}
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </div>

                  {/* Old Amount */}
                  <div className="border rounded p-3 mb-3 bg-dark">
                    <Form.Group controlId="formOldAmount">
                      <Form.Label className="fw-bold text-white">Old Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter old amount"
                        value={oldAmount}
                        onChange={(e) => setOldAmount(e.target.value)}
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </div>

                  {/* KWH */}
                  <div className="border rounded p-3 mb-3 bg-dark">
                    <Form.Group controlId="formKwh">
                      <Form.Label className="fw-bold text-white">KWH</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter KWH"
                        value={kwh}
                        onChange={(e) => setKwh(e.target.value)}
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </div>

                  {/* Bill Total Amount */}
                  <div className="border rounded p-3 mb-3 bg-dark">
                    <Form.Group controlId="formBillTotalAmount">
                      <Form.Label className="fw-bold text-white">Bill Total Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter total bill amount"
                        value={billTotalAmount}
                        onChange={(e) => setBillTotalAmount(e.target.value)}
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </div>

                  {/* Editable Checkbox Field Block */}
                  <div className="border rounded p-3 mb-3 bg-dark">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Checkbox"
                        checked
                        readOnly
                        className="text-white"
                      />
                      <div>
                        <Button variant="outline-danger" size="sm" className="me-2">Remove</Button>
                        <Button variant="outline-light" size="sm">Done</Button>
                      </div>
                    </div>

                    <Form.Group controlId="formCheckboxLabel" className="mb-2">
                      <Form.Label className="text-white">Label</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Alle Angaben sind korrekt."
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <Form.Group controlId="formCheckboxInfo">
                      <Form.Label className="text-white">Info Text</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Add additional information..."
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <div className="mt-3 text-white">
                      <Form.Check inline label="Required" type="checkbox" />
                      <Form.Check inline label="Readonly" type="checkbox" />
                      <Form.Check inline label="Hidden Field" type="checkbox" />
                    </div>
                  </div>

                  <Button variant="primary" onClick={handleCalculate} className="w-100 mt-3">
                    Calculate
                  </Button>
                </Form>
              </div>
            </Col>

            <Col lg={5} className="mt-4 mt-lg-0">
              {billing !== null && (
                <div className="bg-secondary p-4 rounded shadow-sm text-white">
                  <h4 className="text-center mb-3">Calculation Results</h4>
                  <Alert variant="success" className="bg-dark text-white border-success">
                    <p><strong>Billing Rate per KWH:</strong> ₱{billing}</p>
                    <p><strong>Meter Reading:</strong> {meter} kWh</p>
                    <p><strong>Total Fee:</strong> ₱{totalFee}</p>
                  </Alert>
                </div>
              )}
            </Col>
          </Row>
        </Container>

        <Button
          variant="secondary"
          onClick={handleBack}
          className="position-fixed"
          style={{ bottom: '20px', left: '20px', zIndex: 1000 }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AdminCalc;
