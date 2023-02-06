import QRCode from "qrcode";
import { useState } from "react";

function QRgenerate() {
  const [temp, setTemp] = useState("");
  const [qr, setQR] = useState("");
  const GenerateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(temp);
      setQR(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="Search Students here"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} download />
        </>
      )}
    </div>
  );
}

export default QRgenerate;
