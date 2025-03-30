import React, { useState, useRef } from "react";
import { getFromIPFS } from "../utils/pinata";
import { QRCodeSVG } from "qrcode.react";
import { Download, Share2, Search, FileText } from "lucide-react";

const RetrieveForm = () => {
  const [cid, setCid] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const qrRef = useRef(null);

  const handleRetrieve = async () => {
    setIsLoading(true);
    try {
      const url = await getFromIPFS(cid);
      if (url) {
        setFileUrl(url);
        setQrCodeGenerated(true);
      } else {
        alert("Invalid CID or data not found.");
      }
    } catch (error) {
      alert("Error retrieving data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Share CID QR Code",
        text: `Here is the CID for the file on IPFS: ${cid}`,
        url: `https://ipfs.io/ipfs/${cid}`,
      })
        .then(() => console.log("Share was successful!"))
        .catch((error) => console.log("Sharing failed:", error));
    } else {
      alert("Your browser does not support the Web Share API.");
    }
  };

  const downloadQRCode = () => {
    if (qrRef.current) {
      const svg = qrRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `qr-code-${cid}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Retrieve Data from IPFS</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Enter CID</label>
            <div className="flex gap-3">
              <input
                className="flex-1 px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                type="text"
                placeholder="Enter CID to retrieve data"
                value={cid}
                onChange={(e) => setCid(e.target.value)}
                required
              />
              <button
                onClick={handleRetrieve}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search className="h-5 w-5" />
                {isLoading ? "Retrieving..." : "Retrieve"}
              </button>
            </div>
          </div>

          {fileUrl && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">File Retrieved Successfully!</p>
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:text-green-700 underline"
                  >
                    View File
                  </a>
                </div>
              </div>
            </div>
          )}

          {qrCodeGenerated && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-900">QR Code</h3>
                <div className="flex gap-2">
                  <button
                    onClick={downloadQRCode}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200 flex justify-center">
                <div ref={qrRef}>
                  <QRCodeSVG
                    value={`https://gateway.pinata.cloud/ipfs/${cid}`}
                    size={256}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetrieveForm;
