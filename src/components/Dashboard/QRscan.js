import { useState } from "react";
import BarcodeReader from "react-barcode-reader";
import axios from "axios";

function QRscan() {
  const [student, setStudent] = useState({
    id: "",
    std_name: "",
    std_email: "",
    std_phone: "",
    course: "",
    year_and_section: "",
    guardian_name: "",
    guardian_phone: "",
  });
  const [attendance, setAttendance] = useState({
    hashed_id: "",
  });
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (data) => {
    if (data) {
      setAttendance({
        hashed_id: data,
      });
      await axios
        .post("http://localhost:3010/student/hash", attendance)
        .then((response) => {
          setStudent({
            id: response.data.id,
            std_name: response.data.std_name,
            std_email: response.data.std_email,
            std_phone: response.data.std_phone,
            course: response.data.course,
            year_and_section: response.data.year_and_section,
            guardian_name: response.data.guardian_name,
            guardian_phone: response.data.guardian_phone,
          });
        });

      console.log(student);
      await axios.post("http://localhost:3010/attendance/auto", attendance);

      setIsScanning(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const handleScanClick = () => {
    setIsScanning(true);
  };
  const handleStopClick = () => {
    setIsScanning(false);
  };
  return (
    <>
      <h1>Scan</h1>
      <div>
        <button onClick={handleScanClick}>Scan</button>
        <button onClick={handleStopClick}>Stop</button>
      </div>
      {isScanning && (
        <div>
          Scanning
          <BarcodeReader onError={handleError} onScan={handleScan} />
        </div>
      )}
      <div>
        <h1>Scanned ID: {student.id}</h1>
        <h2>Student Name: {student.std_name}</h2>
        <h2>Student Email: {student.std_email}</h2>
        <h2>Student Phone: {student.std_phone}</h2>
        <h2>Course: {student.course}</h2>
        <h2>Year and Section: {student.year_and_section}</h2>
        <h2>Guardian Name: {student.guardian_name}</h2>
        <h2>Guardian Phone: {student.guardian_phone}</h2>
      </div>
    </>
  );
}

export default QRscan;
