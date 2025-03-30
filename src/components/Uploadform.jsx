import React, { useState } from "react"; 
import { uploadToIPFS } from "../utils/pinata"; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ChevronDown, CheckCircle2, Copy, X } from "lucide-react";
import { useUsers } from "../context/UserContext";

const UploadForm = () => {
  const [name, setName] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [file, setFile] = useState(null); 
  const [cid, setCid] = useState(""); 
  const [copyStatus, setCopyStatus] = useState(false);
  const [showCid, setShowCid] = useState(false);
  const { addUser } = useUsers();

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    // Reset the file input
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !file) {
      alert("Please fill all fields and select a file.");
      return;
    }

    const ipfsHash = await uploadToIPFS(name, address, file);
    if (ipfsHash) {
      setCid(ipfsHash);
      // Add user to context
      addUser({
        id: Date.now(), // Using timestamp as temporary ID
        name,
        address,
        cid: ipfsHash,
        createdAt: new Date().toISOString()
      });
      alert(`Data stored on IPFS!\nCID: ${ipfsHash}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Upload Data to IPFS</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Name</label>
            <input
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Address</label>
            <input
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">File</label>
            <div className="mt-1">
              {file ? (
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-blue-900 font-medium truncate max-w-md">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-blue-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                  <div className="space-y-1 text-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      required
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <div className="p-2 bg-blue-50 rounded-full">
                        <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="mt-2 text-sm text-blue-900">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </div>
                      <p className="text-xs text-blue-500 mt-1">Any file type</p>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02]"
          >
            Upload to IPFS
          </button>
        </form>

        {cid && (
          <div className="mt-8">
            <button
              onClick={() => setShowCid(!showCid)}
              className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <span className="text-blue-900 font-medium">Show/Hide CID</span>
              <ChevronDown className={`h-5 w-5 text-blue-600 transform transition-transform ${showCid ? 'rotate-180' : ''}`} />
            </button>
            
            {showCid && (
              <div className="mt-4 p-4 bg-white border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={cid}
                    readOnly
                    className="flex-1 px-3 py-2 bg-blue-50 border border-blue-200 rounded-md text-blue-900 font-mono text-sm"
                  />
                  <CopyToClipboard text={cid} onCopy={onCopyText}>
                    <button className="ml-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </button>
                  </CopyToClipboard>
                </div>
                {copyStatus && (
                  <div className="mt-2 flex items-center text-green-600 animate-fade-in">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Copied to clipboard!</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm; 